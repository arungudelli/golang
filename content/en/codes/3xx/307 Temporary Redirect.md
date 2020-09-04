---
title: "307 Temporary Redirect"
description: "

   The 307 (Temporary Redirect) status code indicates that the target
   resource resides temporarily under a different URI and the user agent
   MU"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -1
collapsible: false
---


   The 307 (Temporary Redirect) status code indicates that the target
   resource resides temporarily under a different URI and the user agent
   MUST NOT change the request method if it performs an automatic
   redirection to that URI.  Since the redirection can change over time,
   the client ought to continue using the original effective request URI
   for future requests.

   The server SHOULD generate a Location header field in the response
   containing a URI reference for the different URI.  The user agent MAY
   use the Location field value for automatic redirection.  The server's
   response payload usually contains a short hypertext note with a
   hyperlink to the different URI(s).

      Note: This status code is similar to 302 (Found), except that it
      does not allow changing the request method from POST to GET.  This
      specification defines no equivalent counterpart for 301 (Moved
      Permanently) ([], however, defines the status code 308
      (Permanent Redirect) for this purpose).


                                                