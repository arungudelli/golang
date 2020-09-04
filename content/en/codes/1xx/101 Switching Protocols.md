---
title: "101 Switching Protocols"
description: "

   The 101 (Switching Protocols) status code indicates that the server
   understands and is willing to comply with the client's request, via
   the"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -1
collapsible: false
---


   The 101 (Switching Protocols) status code indicates that the server
   understands and is willing to comply with the client's request, via
   the Upgrade header field (), for a change in
   the application protocol being used on this connection.  The server








   MUST generate an Upgrade header field in the response that indicates
   which protocol(s) will be switched to immediately after the empty
   line that terminates the 101 response.

   It is assumed that the server will only agree to switch protocols
   when it is advantageous to do so.  For example, switching to a newer
   version of HTTP might be advantageous over older versions, and
   switching to a real-time, synchronous protocol might be advantageous
   when delivering resources that use such features.


                                                