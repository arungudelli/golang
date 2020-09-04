---
title: "408 Request Timeout"
description: "

   The 408 (Request Timeout) status code indicates that the server did
   not receive a complete request message within the time that it was
   prep"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -9
collapsible: false
---


   The 408 (Request Timeout) status code indicates that the server did
   not receive a complete request message within the time that it was
   prepared to wait.  A server SHOULD send the "close" connection option
   () in the response, since 408 implies that
   the server has decided to close the connection rather than continue
   waiting.  If the client has an outstanding request in transit, the
   client MAY repeat that request on a new connection.


                                                