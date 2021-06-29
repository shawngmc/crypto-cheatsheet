---
sidebar_position: 7
---

# Signing

## Digest Signing
| Inputs                       | Action                      | Command |
|------------------------------|-----------------------------|-----------------------------|
| PEM(1x, Private Key)         | Create Signature File | ```openssl dgst -sign privkey.pem -out sigfile.sha256 datafile``` |
| PEM(1x, Private Key)         | Check Signature via Private Key | ```openssl dgst -prverify privkey.pem -signature sigfile.sha256 datafile``` |
| PEM(1x, Public Key)          | Check Signature via Public Key | ```openssl dgst -verify pubkey.pem -signature sigfile.sha256 datafile``` |
| PEM(1x, Certificate)         | Extract Public Key from Cert | ```openssl x509 -pubkey -noout -in cert.pem > pubkey.pem``` |
