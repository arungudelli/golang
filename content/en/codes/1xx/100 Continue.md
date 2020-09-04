---
title: "100 Continue"
description: "

   The 100 (Continue) status code indicates that the initial part of a
   request has been received and has not yet been rejected by the
   server. "
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -2
collapsible: false
---


   The 100 (Continue) status code indicates that the initial part of a
   request has been received and has not yet been rejected by the
   server.  The server intends to send a final response after the
   request has been fully received and acted upon.

   When the request contains an Expect header field that includes a
   100-continue expectation, the 100 response indicates that the server
   wishes to receive the request payload body, as described in
   .  The client ought to continue sending the request and
   discard the 100 response.

   If the request did not contain an Expect header field containing the
   100-continue expectation, the client can simply discard this interim
   response.


                                                