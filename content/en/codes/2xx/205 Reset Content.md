---
title: "205 Reset Content"
description: "

   The 205 (Reset Content) status code indicates that the server has
   fulfilled the request and desires that the user agent reset the
   document"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -1
collapsible: false
---


   The 205 (Reset Content) status code indicates that the server has
   fulfilled the request and desires that the user agent reset the
   "document view", which caused the request to be sent, to its original
   state as received from the origin server.

   This response is intended to support a common data entry use case
   where the user receives content that supports data entry (a form,
   notepad, canvas, etc.), enters or manipulates data in that space,







   causes the entered data to be submitted in a request, and then the
   data entry mechanism is reset for the next entry so that the user can
   easily initiate another input action.

   Since the 205 status code implies that no additional content will be
   provided, a server MUST NOT generate a payload in a 205 response.  In
   other words, a server MUST do one of the following for a 205
   response: a) indicate a zero-length body for the response by
   including a Content-Length header field with a value of 0; b)
   indicate a zero-length payload for the response by including a
   Transfer-Encoding header field with a value of chunked and a message
   body consisting of a single chunk of zero-length; or, c) close the
   connection immediately after sending the blank line terminating the
   header section.


                                                