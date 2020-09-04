---
title: "426 Upgrade Required"
description: "

   The 426 (Upgrade Required) status code indicates that the server
   refuses to perform the request using the current protocol but might
   be wil"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -1
collapsible: false
---


   The 426 (Upgrade Required) status code indicates that the server
   refuses to perform the request using the current protocol but might
   be willing to do so after the client upgrades to a different
   protocol.  The server MUST send an Upgrade header field in a 426
   response to indicate the required protocol(s) ().

   Example:

     HTTP/1.1 426 Upgrade Required
     Upgrade: HTTP/3.0
     Connection: Upgrade
     Content-Length: 53
     Content-Type: text/plain

     This service requires use of the HTTP/3.0 protocol.


                                                