One of the biggest risks with cert and key stores/bundles is not managing the encryption properly.

* It's easy to store them encrypted (with a passphrase) or unencrypted.
* A store can contain cert(s), key(s) or both.
* Many of the commands to do transformations aren't entirely clear to the untrained eye.
* In some cases, you need a copy of the key that is unencrypted (for example, to plug into an app that doesn't accept a passphrase).

It's helpful to separate SENSITIVITY and SECURITY:

* A store is SENSITIVE if it contains a private key.
* A store is SECURE only if it is encrypted and requires a password/passphrase to decrypt any and all private keys.

As a general rule:
* Name files to reflect their sensitivity - one easy way is to name files with private keys with 'key' in the name or extension.
* Save an unencrypted private key to disk as rarely as possible, and only on local hardware (avoid S3, NFS, etc.)
* Verify the contents of any transformations you apply to a store.

#### PEM
##### To make a SECURE PEM:
* Use the open SSL commands on the next tab
* Make sure '-nodes' is not specified on an openssl pkcs12 export
* Make sure one of the valid encryption modes from the list below are in the command (-aes256 or -camellia256 recommended)

##### To make an INSECURE PEM:
* Use the open SSL commands on the next tab
* Ensure that you are working with a non-SENSITIVE key - ie, a public key, a limited-lifespan decrypted copy of a private key, or a single-use key.
* Add '-nodes' to the command to skip the encryption step in an export or generate operation
* Make sure none of the valid encryption modes from the list below are in the command

##### OpenSSL Encryption Flags
* -nodes: Do not encrypt output. Only required on exports from other formats ('openssl pkcs12) or generation ('openssl req') (completely insecure!)
* -des: Usse DES encryption (insecure)
* -des3: Use Triple DES encryption (default on 'openssl pkcs12' export, but must be supplied in a 'openssl rsa' operation) (potentially insecure)
* -idea: Use IDEA encryption (insecure)
* -seed: Use SEED encryption (not recommended unless in Korea due to low interoperability)
* -aes128, -aes192, -aes256: Use CBC AES encryption with the given key strength (aes256 recommended)
* -camellia128, -camellia192, -camellia256: Use CBC Camellia encryption with the given key strength (camellia256 recommended)

##### To examine a PEM for SENSITIVITY and SECURITY:
1. Use a text editor or known-good script to isolate the individual certs and keys within a PEM
(ie, save each as a new file - recommend using name.pem for certs and number.key for keys until matches are verified)
2. For each single PEM file (in_single.pem in our examples), verify appropriately:
  * If any PRIVATE KEYs are present, the PEM is SENSITIVE and should be encrypted in the vast majority of circumstances; verify it with ```openssl rsa -in in_single.pem -check```. If you aren't asked for a password, it's not encrypted and is INSECURE!
  * If any CERTIFICATES are present, they should be verified to ensure validity (proper issuer, expected subject, date range) verify it with ```openssl x509 -in in.pem -text``` and verified against a private key if you hold that key (```openssl x509 -noout -modulus -in incert.pem | openssl md5``` on the cert and ```openssl rsa -noout -modulus -in in.key | openssl md5``` on the key should yield the same hash);
  * If any PUBLIC KEYs or CERTIFICATES are present, they should be verified against a private key if you hold that key (```openssl x509 -noout -modulus -in incert.pem | openssl md5``` on the cert and ```openssl rsa -noout -modulus -in in.key | openssl md5``` on the key should yield the same hash);
- If you are not asked for a password for each PRIVATE key, it's likely that the PEM is INSECURE

The bag attributes in a multi-object PEM can be used to help correlate but are NOT a guarantee - these sections are not secured!