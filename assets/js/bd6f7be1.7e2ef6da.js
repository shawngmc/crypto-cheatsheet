(self.webpackChunkcrypto_cheatsheet=self.webpackChunkcrypto_cheatsheet||[]).push([[186],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=m(n),s=r,N=u["".concat(o,".").concat(s)]||u[s]||k[s]||l;return n?a.createElement(N,p(p({ref:e},d),{},{components:n})):a.createElement(N,p({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1375:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),p=["components"],i={sidebar_position:2},o="Manage Bundles",m={unversionedId:"common-commands/manage-bundles",id:"common-commands/manage-bundles",isDocsHomePage:!1,title:"Manage Bundles",description:"Export from Bundle",source:"@site/docs/common-commands/manage-bundles.md",sourceDirName:"common-commands",slug:"/common-commands/manage-bundles",permalink:"/crypto-cheatsheet/docs/common-commands/manage-bundles",editUrl:"https://github.com/shawngmc/crypto-cheatsheet/edit/master/website/docs/common-commands/manage-bundles.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Common Commands",permalink:"/crypto-cheatsheet/docs/common-commands/intro"},next:{title:"Convert",permalink:"/crypto-cheatsheet/docs/common-commands/convert"}},d=[{value:"Export from Bundle",id:"export-from-bundle",children:[]},{value:"Import to Bundle",id:"import-to-bundle",children:[]},{value:"Between Bundles",id:"between-bundles",children:[]},{value:"Create Bundle",id:"create-bundle",children:[]},{value:"List Bundle Contents",id:"list-bundle-contents",children:[]},{value:"Delete from\xa0Bundle",id:"delete-from-bundle",children:[]}],k={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"manage-bundles"},"Manage Bundles"),(0,l.kt)("h2",{id:"export-from-bundle"},"Export from Bundle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"From"),(0,l.kt)("th",{parentName:"tr",align:null},"To"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM(1x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Export via Split"),(0,l.kt)("td",{parentName:"tr",align:null},"Use a text editor and save new files for each BEGIN/END line pair")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM(1x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cert-only csplit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"csplit --prefix='cert.' --suffix-format='%03d.pem' multicert.pem '/-----BEGIN CERTIFICATE-----/' '{*}'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM(1x)"),(0,l.kt)("td",{parentName:"tr",align:null},"AWK Script"),(0,l.kt)("td",{parentName:"tr",align:null},"```#!/usr/bin/awk -f")))),(0,l.kt)("h1",{id:""}),(0,l.kt)("h1",{id:"take-a-pem-format-file-as-input-and-split-out-certs-and-keys-into-separate-files"},"Take a PEM format file as input and split out certs and keys into separate files"),(0,l.kt)("h1",{id:"-1"}),(0,l.kt)("p",null,'BEGIN                          { n=0; cert=0; key=0; if ( ARGC < 2 ) { print "Usage: pem-split FILENAME"; exit 1 } }\n/-----BEGIN PRIVATE KEY-----/  { key=1; cert=0 }\n/-----BEGIN CERTIFICATE-----/  { cert=1; key=0 }\nsplit_after == 1               { n++; split_after=0 }\n/-----END CERTIFICATE-----/    { split_after=1 }\n/-----END PRIVATE KEY-----/    { split_after=1 }\nkey == 1                       { print > FILENAME "-" n ".key" }\ncert == 1                      { print > FILENAME "-" n ".crt" }',(0,l.kt)("inlineCode",{parentName:"p"},"|\n| PEM(Nx) | DER | Export via Split | PEM -> PEM(1x) -> DER |\n| P12 | PEM(1x) | Export | P12 -> PEM -> PEM(1x) |\n| P12 | DER | Export |"),"keytool -export -alias alias -file out.der -keystore store.p12",(0,l.kt)("inlineCode",{parentName:"p"},"|\n| JKS | PEM(1x) | Export | JKS -> P12 -> PEM -> PEM(1x) |\n| JKS | DER | Export |"),"keytool -export -alias alias -file\xa0out.der -keystore store.jks``` |"),(0,l.kt)("h2",{id:"import-to-bundle"},"Import to Bundle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"From"),(0,l.kt)("th",{parentName:"tr",align:null},"To"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(1x)"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"Import via Merge"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cat 1.pem >> 2.pem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(1x)"),(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"Import"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openssl pkcs12 -export -out certificate.p12 -inkey inkey.pem -in incert.pem -certfile CACert.pem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(1x)"),(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Import"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM(1x) -> DER -> JKS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DER"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"Import"),(0,l.kt)("td",{parentName:"tr",align:null},"DER -> PEM(1x) -> PEM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DER"),(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"Import"),(0,l.kt)("td",{parentName:"tr",align:null},"DER -> PEM(1x) -> P12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DER"),(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Import"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -import -alias alias -keystore store.jks -file in.der"))))),(0,l.kt)("h2",{id:"between-bundles"},"Between Bundles"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"From"),(0,l.kt)("th",{parentName:"tr",align:null},"To"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openssl pkcs12 -export -out store.p12 -in in.pem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"Import to Existing"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openssl pkcs12 -export -out newstore.p12 -in in.pem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"Build a full-chain P12"),(0,l.kt)("td",{parentName:"tr",align:null},'```"cat cacerts.pem cert.pem >> merged.pem')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'openssl pkcs12 -export -inkey key.pem -in merged.pem -name myname -out mergedWithKey.pem"```'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM -> P12 -> JKS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Import to Existing"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM -> P12 -> JKS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openssl pkcs12 -in in.p12 -out newstore.pem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"Import to Existing"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openssl pkcs12 -in in.p12 >> store.pem"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -importkeystore -srckeystore in.p12 -srcstoretype PKCS12 -destkeystore newstore.jks -deststoretype JKS"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Import All\xa0to Existing"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -importkeystore -srckeystore in.p12 -srcstoretype PKCS12 -destkeystore store.jks -deststoretype JKS"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Import\xa0One to Existing"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -importkeystore -srckeystore in.p12 -srcstoretype PKCS12 -srcalias alias\xa0-destkeystore store.jks -deststoretype JKS"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -importkeystore -srckeystore in.jks -srcstoretype JKS -destkeystore newstore.p12 -deststoretype PKCS12"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"Import All\xa0to Existing"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -importkeystore -srckeystore in.jks -srcstoretype JKS -destkeystore store.p12 -deststoretype PKCS12"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"Import\xa0One to Existing"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -importkeystore -srckeystore in.jks -srcstoretype JKS -srcalias alias -destkeystore store.p12 -deststoretype PKCS12"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"Convert"),(0,l.kt)("td",{parentName:"tr",align:null},"JKS -> P12 -> PEM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"Import to Existing"),(0,l.kt)("td",{parentName:"tr",align:null},"JKS ->\xa0P12 -> PEM")))),(0,l.kt)("h2",{id:"create-bundle"},"Create Bundle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Inputs"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate/Create and Delete"),(0,l.kt)("td",{parentName:"tr",align:null},"```keytool -genkey -alias temp -keystore store.p12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keytool -delete -alias temp -keystore store.p12```"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate/Create and Delete"),(0,l.kt)("td",{parentName:"tr",align:null},"```keytool -genkey -alias temp -keystore store.jks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keytool -delete -alias temp -keystore store.jks```"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM (1x or Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"Create"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"touch store.pem"))))),(0,l.kt)("h2",{id:"list-bundle-contents"},"List Bundle Contents"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Inputs"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"List with Keytool"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -list -v -keystore store.p12"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"List with OpenSSL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openssl pkcs12 -info -in store.p12"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -list -v -keystore store.jks"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(1x)"),(0,l.kt)("td",{parentName:"tr",align:null},"List Key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openssl rsa -in store.pem -check"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(1x)"),(0,l.kt)("td",{parentName:"tr",align:null},"List Cert"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openssl x509 -in store.pem -text"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"List Cert Subjects/Issuers"),(0,l.kt)("td",{parentName:"tr",align:null},"```openssl crl2pkcs7 -nocrl -certfile CHAINED.pem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"List Cert Details"),(0,l.kt)("td",{parentName:"tr",align:null},"```openssl crl2pkcs7 -nocrl -certfile CHAINED.pem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"Split Certs"),(0,l.kt)("td",{parentName:"tr",align:null},"```\"csplit --prefix='cert.' --suffix-format='%03d.pem' --elide-empty-files multicert.pem '/-----BEGIN CERTIFICATE-----/' '{*}'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"find ./cert.*.pem -print0"),(0,l.kt)("td",{parentName:"tr",align:null},'xargs -0r -I {} sh -c ""printf {}; openssl x509 -in {} -text"""```'),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"delete-from-bundle"},"Delete from\xa0Bundle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Inputs"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"P12"),(0,l.kt)("td",{parentName:"tr",align:null},"Delete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -delete -alias temp -keystore store.p12"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Delete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keytool -delete -alias temp -keystore store.jks"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PEM(Nx)"),(0,l.kt)("td",{parentName:"tr",align:null},"Delete"),(0,l.kt)("td",{parentName:"tr",align:null},"Use a text editor")))))}u.isMDXComponent=!0}}]);