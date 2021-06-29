---
sidebar_position: 3
---

# Convert

## Certificates Between Formats
| From                       | To                      | Command |
|------------------------------|-----------------------------|-----------------------------|
| PEM(1x) | DER | ```openssl x509 -inform PEM -in in.pem -outform DER -out out.der``` |
| DER | PEM(1x) | ```openssl x509 -inform DER -in in.der -outform PEM -out out.pem``` |

