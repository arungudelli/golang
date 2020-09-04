---
title: "406 Not Acceptable"
description: "

   The 406 (Not Acceptable) status code indicates that the target
   resource does not have a current representation that would be
   acceptable to "
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -10
collapsible: false
---


   The 406 (Not Acceptable) status code indicates that the target
   resource does not have a current representation that would be
   acceptable to the user agent, according to the proactive negotiation
   header fields received in the request (), and the server
   is unwilling to supply a default representation.

   The server SHOULD generate a payload containing a list of available
   representation characteristics and corresponding resource identifiers
   from which the user or user agent can choose the one most
   appropriate.  A user agent MAY automatically select the most
   appropriate choice from that list.  However, this specification does
   not define any standard for such automatic selection, as described in
   .


                                                