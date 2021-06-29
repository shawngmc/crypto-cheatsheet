## File Types

| File Type  | Description                 | Think of                                                   | Common Extensions          | Wiki Page                                                      | Identification Method              | File type             | Contains                    | Encrypted   | Sensitive | Notes                                                                            |
|------------|-----------------------------|------------------------------------------------------------|----------------------------|----------------------------------------------------------------|------------------------------------|-----------------------|-----------------------------|-------------|-----------|----------------------------------------------------------------------------------|
| PKCS12/PFX | PKCS#12 Certificate Bundle  | A binary blob of multiple certs and keys                   | .p12 .pfx                  | https://en.wikipedia.org/wiki/PKCS_12                          | file command: data, openssl verify | BINARY                | Key(s), Cert(s)             | Yes         | Usually   |                                                                                  |
| PEM        | X.509 Bundle                | Base64-encode 1+ DER's with headers                        | .pem                       | https://en.wikipedia.org/wiki/Privacy-enhanced_Electronic_Mail | contains -----BEGIN                | ASCII                 | Key(s), Cert(s), Request(s) | Maybe       | Sometimes | PEM(1x) = PEM with one key or cert; PEM(Nx) = PEM with one or more keys or certs |
| DER        | DER-encoded Certificate     | A binary blob with actual data                             | .der .cer .crt .cert .pem  | https://en.wikipedia.org/wiki/X.690#DER_encoding               | file command: data, openssl verify | BINARY                | Key OR Cert OR Request      | No          | Sometimes |                                                                                  |
| P7B        | PKCS#7 Certificate          | Certs for sharing/recognizing                              | .p7b                       | ???                                                            | Cert(s)                            | No                    | Sometimes                   |             |           |                                                                                  |
| CRL        | Certificate Revocation List | Telling everyone a cert is no longer good                  | .crl                       | ???                                                            | Revocation(s)                      | No                    |                             |             |           |                                                                                  |
| 'CSR'      | Certificate Signing Request | Typically a PEM with just a request and named differently! | .csr                       | contains -----BEGIN CERTIFICATE REQUEST-----                   | ASCII                              | Request (but any PEM) | Maybe                       | If misnamed |           |                                                                                  |
| 'KEY'      | Key                         | Typically a PEM with just a key and named differently!     | .key .rsa                  | contains -----BEGIN and KEY-----                               | ASCII                              | Key (but any PEM)     | Maybe                       | Usually     |           |                                                                                  |
| CERT'      | Certificate                 | Typically a PEM with just a cert and named differently!    | .cert                      | contains -----BEGIN CERTIFICATE-----                           | ASCII                              | Cert (but any PEM)    | Maybe                       | If misnamed |           |                                                                                  |
| JKS        | Java KeyStore               | A binary blob of multiple certs and keys                   | .jks .keystore .truststore | ???                                                            | BINARY                             | Usually               |                             |             |           |                                                                                  |
| BKS        | BouncyCastle KeyStore       | A binary blob of multiple certs and keys                   | .bks                       | http://www.bouncycastle.org/specifications.html                | ???                                | BINARY                | Usually                     |             |           |                                                                                  |
## Secure PEMs

## Command Reference

## Hashing Algorithms

## Encryption Algorithms

## Key Exchange

## Block Cipher Modes of Operation

## Cipher-Exchange-Mode Combinations

## Common Errors

## Socket Encryption Standard

## Common Attacks

## Which Should I Use?

## More Reference Links
