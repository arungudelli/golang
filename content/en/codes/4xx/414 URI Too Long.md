---
title: "414 URI Too Long"
description: "

   The 414 (URI Too Long) status code indicates that the server is
   refusing to service the request because the request-target (
   ) is longer th"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -4
collapsible: false
---


   The 414 (URI Too Long) status code indicates that the server is
   refusing to service the request because the request-target (
   ) is longer than the server is willing to interpret.
   This rare condition is only likely to occur when a client has
   improperly converted a POST request to a GET request with long query
   information, when the client has descended into a "black hole" of
   redirection (e.g., a redirected URI prefix that points to a suffix of
   itself) or when the server is under attack by a client attempting to
   exploit potential security holes.







   A 414 response is cacheable by default; i.e., unless otherwise
   indicated by the method definition or explicit cache controls (see
   ).


                                                