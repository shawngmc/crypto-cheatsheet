Often, you don't get to choose a cert/key store type arbitrarily - applications typically offer support for a limited number of formats. For example:

* __Java apps__: 	P12 unless you MUST use JKS!
  * This includes Apache, Tomcat, JBoss, and a number of other common servers.
  * The [Java Secure Socket Extensions (JSSE) docs](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html) can help you understand how Java manages keys and certs.
* __CURL__:	PEM or DER
* __Firefox__: P12, PEM, DER, P7B
* __IE, Windows, Edge, IIS__: P12, DER, P7B
* __Chrome__
  * __On Windows__: P12, DER, P7B
* __wget__:	PEM or DER
* __NGinx__: PEM
* __Node.JS__: PEM
* __PuTTY__: PPK

But, if you get to choose:	
* __PEM__ and __P12__ are the most portable
* __PEM__ can ber merged by hand
* __DER__ are typically the smallest