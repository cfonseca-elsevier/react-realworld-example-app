# ZAP Scanning Report


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 3 |
| Informational | 2 |




## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- |
| CSP: Wildcard Directive | Medium | 2 |
| Content Security Policy (CSP) Header Not Set | Medium | 2 |
| HTTP Only Site | Medium | 1 |
| Missing Anti-clickjacking Header | Medium | 2 |
| Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) | Low | 7 |
| Timestamp Disclosure - Unix | Low | 26 |
| X-Content-Type-Options Header Missing | Low | 5 |
| Information Disclosure - Suspicious Comments | Informational | 20 |
| Modern Web Application | Informational | 3 |




## Alert Detail



### [ CSP: Wildcard Directive ](https://www.zaproxy.org/docs/alerts/10055/)



##### Medium (Medium)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks. Including (but not limited to) Cross Site Scripting (XSS), and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: http://10.1.0.36:3000/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `default-src 'none'`
* URL: http://10.1.0.36:3000/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `default-src 'none'`

Instances: 2

### Solution

Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.

### Reference


* [ http://www.w3.org/TR/CSP2/ ](http://www.w3.org/TR/CSP2/)
* [ http://www.w3.org/TR/CSP/ ](http://www.w3.org/TR/CSP/)
* [ http://caniuse.com/#search=content+security+policy ](http://caniuse.com/#search=content+security+policy)
* [ http://content-security-policy.com/ ](http://content-security-policy.com/)
* [ https://github.com/shapesecurity/salvation ](https://github.com/shapesecurity/salvation)
* [ https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources ](https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Content Security Policy (CSP) Header Not Set ](https://www.zaproxy.org/docs/alerts/10038/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: http://10.1.0.36:3000
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
* URL: http://10.1.0.36:3000/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``

Instances: 2

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: "Content-Security-Policy" for Chrome 25+, Firefox 23+ and Safari 7+, "X-Content-Security-Policy" for Firefox 4.0+ and Internet Explorer 10+, and "X-WebKit-CSP" for Chrome 14+ and Safari 6+.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy ](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy)
* [ https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
* [ http://www.w3.org/TR/CSP/ ](http://www.w3.org/TR/CSP/)
* [ http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html ](http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html)
* [ http://www.html5rocks.com/en/tutorials/security/content-security-policy/ ](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
* [ http://caniuse.com/#feat=contentsecuritypolicy ](http://caniuse.com/#feat=contentsecuritypolicy)
* [ http://content-security-policy.com/ ](http://content-security-policy.com/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ HTTP Only Site ](https://www.zaproxy.org/docs/alerts/10106/)



##### Medium (Medium)

### Description

The site is only served under HTTP and not HTTPS.

* URL: http://10.1.0.36:3000
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``

Instances: 1

### Solution

Configure your web or application server to use SSL (https).

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html)
* [ https://letsencrypt.org/ ](https://letsencrypt.org/)


#### CWE Id: [ 311 ](https://cwe.mitre.org/data/definitions/311.html)


#### WASC Id: 4

#### Source ID: 1

### [ Missing Anti-clickjacking Header ](https://www.zaproxy.org/docs/alerts/10020/)



##### Medium (Medium)

### Description

The response does not include either Content-Security-Policy with 'frame-ancestors' directive or X-Frame-Options to protect against 'ClickJacking' attacks.

* URL: http://10.1.0.36:3000
  * Method: `GET`
  * Parameter: `X-Frame-Options`
  * Attack: ``
  * Evidence: ``
* URL: http://10.1.0.36:3000/
  * Method: `GET`
  * Parameter: `X-Frame-Options`
  * Attack: ``
  * Evidence: ``

Instances: 2

### Solution

Modern Web browsers support the Content-Security-Policy and X-Frame-Options HTTP headers. Ensure one of them is set on all web pages returned by your site/app.
If you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)


#### CWE Id: [ 1021 ](https://cwe.mitre.org/data/definitions/1021.html)


#### WASC Id: 15

#### Source ID: 3

### [ Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) ](https://www.zaproxy.org/docs/alerts/10037/)



##### Low (Medium)

### Description

The web/application server is leaking information via one or more "X-Powered-By" HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your web application is reliant upon and the vulnerabilities such components may be subject to.

* URL: http://10.1.0.36:3000
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
* URL: http://10.1.0.36:3000/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
* URL: http://10.1.0.36:3000/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
* URL: http://10.1.0.36:3000/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
* URL: http://10.1.0.36:3000/static/js/bundle.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
* URL: http://10.1.0.36:3000/static/js/main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`

Instances: 7

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to suppress "X-Powered-By" headers.

### Reference


* [ http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx ](http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx)
* [ http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html ](http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html)


#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Timestamp Disclosure - Unix ](https://www.zaproxy.org/docs/alerts/10096/)



##### Low (Low)

### Description

A timestamp was disclosed by the application/web server - Unix

* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `00002017`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `0123456789`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `02014101`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1073741823`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1073741824`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1073741825`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1330512305`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1330515905`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `134217727`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `134217728`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `20090320`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `20121025`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `20131105`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `20190918`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `2147483647`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `254874553`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `268435456`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `33554432`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `44198641`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `512969520`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `604800000`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `62914560`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `67108864`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `805306368`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `86400000`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `90001437`

Instances: 26

### Solution

Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.

### Reference


* [ http://projects.webappsec.org/w/page/13246936/Information%20Leakage ](http://projects.webappsec.org/w/page/13246936/Information%20Leakage)


#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ X-Content-Type-Options Header Missing ](https://www.zaproxy.org/docs/alerts/10021/)



##### Low (Medium)

### Description

The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.

* URL: http://10.1.0.36:3000
  * Method: `GET`
  * Parameter: `X-Content-Type-Options`
  * Attack: ``
  * Evidence: ``
* URL: http://10.1.0.36:3000/
  * Method: `GET`
  * Parameter: `X-Content-Type-Options`
  * Attack: ``
  * Evidence: ``
* URL: http://10.1.0.36:3000/static/js/bundle.js
  * Method: `GET`
  * Parameter: `X-Content-Type-Options`
  * Attack: ``
  * Evidence: ``
* URL: http://10.1.0.36:3000/static/js/main.chunk.js
  * Method: `GET`
  * Parameter: `X-Content-Type-Options`
  * Attack: ``
  * Evidence: ``
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: `X-Content-Type-Options`
  * Attack: ``
  * Evidence: ``

Instances: 5

### Solution

Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.
If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.

### Reference


* [ http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx ](http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx)
* [ https://owasp.org/www-community/Security_Headers ](https://owasp.org/www-community/Security_Headers)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Information Disclosure - Suspicious Comments ](https://www.zaproxy.org/docs/alerts/10027/)



##### Informational (Low)

### Description

The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.

* URL: http://10.1.0.36:3000/static/js/bundle.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `bugs`
* URL: http://10.1.0.36:3000/static/js/bundle.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `from`
* URL: http://10.1.0.36:3000/static/js/bundle.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `later`
* URL: http://10.1.0.36:3000/static/js/bundle.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `TODO`
* URL: http://10.1.0.36:3000/static/js/main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `from`
* URL: http://10.1.0.36:3000/static/js/main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `user`
* URL: http://10.1.0.36:3000/static/js/main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `username`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `bug`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `bugs`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `db`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `FIXME`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `from`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `later`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `query`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `select`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `TODO`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `user`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `username`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `where`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `XXX`

Instances: 20

### Solution

Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.

### Reference



#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Modern Web Application ](https://www.zaproxy.org/docs/alerts/10109/)



##### Informational (Medium)

### Description

The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.

* URL: http://10.1.0.36:3000
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script src="/static/js/bundle.js"></script>`
* URL: http://10.1.0.36:3000/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script src="/static/js/bundle.js"></script>`
* URL: http://10.1.0.36:3000/static/js/vendors~main.chunk.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script>`

Instances: 3

### Solution

This is an informational alert and so no changes are required.

### Reference




#### Source ID: 3


