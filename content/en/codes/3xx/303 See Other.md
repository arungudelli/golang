---
title: "303 See Other"
description: "

   The 303 (See Other) status code indicates that the server is
   redirecting the user agent to a different resource, as indicated by a
   URI in t"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -4
collapsible: false
---


   The 303 (See Other) status code indicates that the server is
   redirecting the user agent to a different resource, as indicated by a
   URI in the Location header field, which is intended to provide an
   indirect response to the original request.  A user agent can perform
   a retrieval request targeting that URI (a GET or HEAD request if
   using HTTP), which might also be redirected, and present the eventual
   result as an answer to the original request.  Note that the new URI
   in the Location header field is not considered equivalent to the
   effective request URI.

   This status code is applicable to any HTTP method.  It is primarily
   used to allow the output of a POST action to redirect the user agent
   to a selected resource, since doing so provides the information
   corresponding to the POST response in a form that can be separately
   identified, bookmarked, and cached, independent of the original
   request.

   A 303 response to a GET request indicates that the origin server does
   not have a representation of the target resource that can be
   transferred by the server over HTTP.  However, the Location field
   value refers to a resource that is descriptive of the target
   resource, such that making a retrieval request on that other resource
   might result in a representation that is useful to recipients without
   implying that it represents the original target resource.  Note that
   answers to the questions of what can be represented, what
   representations are adequate, and what might be a useful description
   are outside the scope of HTTP.

   Except for responses to a HEAD request, the representation of a 303
   response ought to contain a short hypertext note with a hyperlink to
   the same URI reference provided in the Location header field.












                                                