---
title: "Informational 1xx"
description: "

   The 1xx (Informational) class of status code indicates an interim
   response for communicating connection status or request progress
   prior to"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -3
collapsible: false
---


   The 1xx (Informational) class of status code indicates an interim
   response for communicating connection status or request progress
   prior to completing the requested action and sending a final
   response. 1xx responses are terminated by the first empty line after
   the status-line (the empty line signaling the end of the header
   section).  Since HTTP/1.0 did not define any 1xx status codes, a
   server MUST NOT send a 1xx response to an HTTP/1.0 client.

   A client MUST be able to parse one or more 1xx responses received
   prior to a final response, even if the client does not expect one.  A
   user agent MAY ignore unexpected 1xx responses.

   A proxy MUST forward 1xx responses unless the proxy itself requested
   the generation of the 1xx response.  For example, if a proxy adds an
   "Expect: 100-continue" field when it forwards a request, then it need
   not forward the corresponding 100 (Continue) response(s).


                                                