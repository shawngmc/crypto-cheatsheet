---
sidebar_position: 6
---

# Revocation

## Revocation (OCSP)
| Inputs                       | Action                      | Command |
|------------------------------|-----------------------------|-----------------------------|
| Serial number and Issuer PEM | Check OCSP Status (Decimal) | ```openssl ocsp  -no_nonce -serial 012345 -cert certificate.pem -text -url http://ocsp.my.ca.tld``` |
| Serial number and Issuer PEM | Check OCSP Status (Hex)     | ```openssl ocsp -no_nonce -serial 0xAF1345 -cert certificate.pem -text -url http://ocsp.my.ca.tld```|
| Cert and Issuer PEM          | Check OCSP Status           | ```openssl ocsp  -no_nonce -issuer chain.pem -cert certificate.pem -text -url http://ocsp.my.ca.tld``` |
| Either                       | Save Request and Response   | Add ```-respout ocsp.resp -reqout ocsp.req``` to save them to the current folder |
| Replay Request               | Replay with Curl            | ```curl -v -o /dev/null --data-binary @ocsp.req -H "Content-Type: application/ocsp-request" --url http://ocsp.my.ca.tld``` |

## Revocation (CRL)
| Inputs                       | Action                      | Command |
|----------------------------------------------------------------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------|
| PEM-CRL(Nx)  | List CRL Issuers | ```"csplit --prefix='cert.' --suffix-format='%03d.pem' --elide-empty-files multicert.pem '/-----BEGIN CERTIFICATE-----/' '{*}' find ./cert.*.pem -print0 \| xargs -0r -I {} sh -c ""printf {}; openssl x509 -in {} -text"""```