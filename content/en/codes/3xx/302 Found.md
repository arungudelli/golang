---
title: "302 Found"
description: "

   The 302 (Found) status code indicates that the target resource
   resides temporarily under a different URI.  Since the redirection
   might be a"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -5
collapsible: false
---


   The 302 (Found) status code indicates that the target resource
   resides temporarily under a different URI.  Since the redirection
   might be altered on occasion, the client ought to continue to use the
   effective request URI for future requests.











   The server SHOULD generate a Location header field in the response
   containing a URI reference for the different URI.  The user agent MAY
   use the Location field value for automatic redirection.  The server's
   response payload usually contains a short hypertext note with a
   hyperlink to the different URI(s).

      Note: For historical reasons, a user agent MAY change the request
      method from POST to GET for the subsequent request.  If this
      behavior is undesired, the 307 (Temporary Redirect) status code
      can be used instead.


                                                