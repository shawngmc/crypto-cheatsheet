---
sidebar_position: 2
---

# Manage Bundles

## Export from Bundle
| From          | To             | Action                      | Command |
|---------------|--------------|-----------------------------|-----------------------------|
| PEM(Nx) | PEM(1x) | Export via Split | Use a text editor and save new files for each BEGIN/END line pair |
| PEM(Nx) | PEM(1x) | Cert-only csplit | ```csplit --prefix='cert.' --suffix-format='%03d.pem' multicert.pem '/-----BEGIN CERTIFICATE-----/' '{*}'``` |
| PEM(Nx) | PEM(1x) | AWK Script | 
```
#!/usr/bin/awk -f
BEGIN                          { n=0; cert=0; key=0; if ( ARGC < 2 ) { print "Usage: pem-split FILENAME"; exit 1 } }
/-----BEGIN PRIVATE KEY-----/  { key=1; cert=0 }
/-----BEGIN CERTIFICATE-----/  { cert=1; key=0 }
split_after == 1               { n++; split_after=0 }
/-----END CERTIFICATE-----/    { split_after=1 }
/-----END PRIVATE KEY-----/    { split_after=1 }
key == 1                       { print > FILENAME "-" n ".key" }
cert == 1                      { print > FILENAME "-" n ".crt" }
``` |
| PEM(Nx) | DER | Export via Split | PEM -> PEM(1x) -> DER |
| P12 | PEM(1x) | Export | P12 -> PEM -> PEM(1x) |
| P12 | DER | Export | ```keytool -export -alias alias -file out.der -keystore store.p12``` |
| JKS | PEM(1x) | Export | JKS -> P12 -> PEM -> PEM(1x) |
| JKS | DER | Export | ```keytool -export -alias alias -file out.der -keystore store.jks``` |
			
## Import to Bundle			
| From          | To             | Action                      | Command |
|---------------|--------------|-----------------------------|-----------------------------|
| PEM(1x) | PEM(Nx) | Import via Merge | ```cat 1.pem >> 2.pem``` |
| PEM(1x) | P12 | Import | ```openssl pkcs12 -export -out certificate.p12 -inkey inkey.pem -in incert.pem -certfile CACert.pem``` |
| PEM(1x) | JKS | Import | PEM(1x) -> DER -> JKS |
| DER | PEM(Nx) | Import | DER -> PEM(1x) -> PEM |
| DER | P12 | Import | DER -> PEM(1x) -> P12 |
| DER | JKS | Import | ```keytool -import -alias alias -keystore store.jks -file in.der``` |
			
## Between Bundles			
| From          | To             | Action                      | Command |
|---------------|--------------|-----------------------------|-----------------------------|
| PEM(Nx) | P12 | Convert | ```openssl pkcs12 -export -out store.p12 -in in.pem``` |
| PEM(Nx) | P12 | Import to Existing | ```openssl pkcs12 -export -out newstore.p12 -in in.pem``` |
| PEM(Nx) | P12 | Build a full-chain P12 | ```"cat cacerts.pem cert.pem >> merged.pem
openssl pkcs12 -export -inkey key.pem -in merged.pem -name myname -out mergedWithKey.pem"``` |
| PEM(Nx) | JKS | Convert | PEM -> P12 -> JKS |
| PEM(Nx) | JKS | Import to Existing | PEM -> P12 -> JKS |
| P12 | PEM(Nx) | Convert | ```openssl pkcs12 -in in.p12 -out newstore.pem``` |
| P12 | PEM(Nx) | Import to Existing | ```openssl pkcs12 -in in.p12 >> store.pem``` |
| P12 | JKS | Convert | ```keytool -importkeystore -srckeystore in.p12 -srcstoretype PKCS12 -destkeystore newstore.jks -deststoretype JKS``` |
| P12 | JKS | Import All to Existing | ```keytool -importkeystore -srckeystore in.p12 -srcstoretype PKCS12 -destkeystore store.jks -deststoretype JKS``` |
| P12 | JKS | Import One to Existing | ```keytool -importkeystore -srckeystore in.p12 -srcstoretype PKCS12 -srcalias alias -destkeystore store.jks -deststoretype JKS``` |
| JKS | P12 | Convert | ```keytool -importkeystore -srckeystore in.jks -srcstoretype JKS -destkeystore newstore.p12 -deststoretype PKCS12``` |
| JKS | P12 | Import All to Existing | ```keytool -importkeystore -srckeystore in.jks -srcstoretype JKS -destkeystore store.p12 -deststoretype PKCS12``` |
| JKS | P12 | Import One to Existing | ```keytool -importkeystore -srckeystore in.jks -srcstoretype JKS -srcalias alias -destkeystore store.p12 -deststoretype PKCS12``` |
| JKS | PEM(Nx) | Convert | JKS -> P12 -> PEM |
| JKS | PEM(Nx) | Import to Existing | JKS -> P12 -> PEM |

			
## Create Bundle
| Inputs                       | Action                      | Command |
|------------------------------|-----------------------------|-----------------------------|
| P12 | Generate/Create and Delete | ```keytool -genkey -alias temp -keystore store.p12
keytool -delete -alias temp -keystore store.p12``` |			
| JKS | Generate/Create and Delete | ```keytool -genkey -alias temp -keystore store.jks
keytool -delete -alias temp -keystore store.jks``` |			
| PEM (1x or Nx) | Create | ```touch store.pem``` |			

			
## List Bundle Contents	
| Inputs                       | Action                      | Command |
|------------------------------|-----------------------------|-----------------------------|
| P12 | List with Keytool | ```keytool -list -v -keystore store.p12``` |		
| P12 | List with OpenSSL | ```openssl pkcs12 -info -in store.p12``` |		
| JKS | List | ```keytool -list -v -keystore store.jks``` |		
| PEM(1x) | List Key | ```openssl rsa -in store.pem -check``` |		
| PEM(1x) | List Cert | ```openssl x509 -in store.pem -text``` |		
| PEM(Nx) | List Cert Subjects/Issuers | ```openssl crl2pkcs7 -nocrl -certfile CHAINED.pem | openssl pkcs7 -print_certs -noout``` |		
| PEM(Nx) | List Cert Details | ```openssl crl2pkcs7 -nocrl -certfile CHAINED.pem | openssl pkcs7 -print_certs -text -noout``` |		
| PEM(Nx) | Split Certs | ```"csplit --prefix='cert.' --suffix-format='%03d.pem' --elide-empty-files multicert.pem '/-----BEGIN CERTIFICATE-----/' '{*}'
find ./cert.*.pem -print0 | xargs -0r -I {} sh -c ""printf {}; openssl x509 -in {} -text"""``` |	

				
## Delete from Bundle			
| Inputs                       | Action                      | Command |
|------------------------------|-----------------------------|-----------------------------|
| P12 | Delete | ```keytool -delete -alias temp -keystore store.p12``` |
| JKS | Delete | ```keytool -delete -alias temp -keystore store.jks``` |
| PEM(Nx)	| Delete | Use a text editor |