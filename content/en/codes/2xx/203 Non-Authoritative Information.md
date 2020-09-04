---
title: "203 Non-Authoritative Information"
description: "

   The 203 (Non-Authoritative Information) status code indicates that
   the request was successful but the enclosed payload has been modified
   fr"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -3
collapsible: false
---


   The 203 (Non-Authoritative Information) status code indicates that
   the request was successful but the enclosed payload has been modified
   from that of the origin server's 200 (OK) response by a transforming
   proxy ().  This status code allows the
   proxy to notify recipients when a transformation has been applied,
   since that knowledge might impact later decisions regarding the
   content.  For example, future cache validation requests for the
   content might only be applicable along the same request path (through
   the same proxies).

   The 203 response is similar to the Warning code of 214 Transformation
   Applied (), which has the advantage of being
   applicable to responses with any status code.









   A 203 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   ).


                                                