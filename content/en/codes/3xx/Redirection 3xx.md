---
title: "Redirection 3xx"
description: "

   The 3xx (Redirection) class of status code indicates that further
   action needs to be taken by the user agent in order to fulfill the
   reques"
date: 11-07-2020T23:32:08
lastmod: 11-07-2020T23:32:08
draft: false
weight: -8
collapsible: false
---


   The 3xx (Redirection) class of status code indicates that further
   action needs to be taken by the user agent in order to fulfill the
   request.  If a Location header field () is provided, the
   user agent MAY automatically redirect its request to the URI
   referenced by the Location field value, even if the specific status
   code is not understood.  Automatic redirection needs to done with
   care for methods not known to be safe, as defined in ,
   since the user might not wish to redirect an unsafe request.

   There are several types of redirects:

   1.  Redirects that indicate the resource might be available at a
       different URI, as provided by the Location field, as in the
       status codes 301 (Moved Permanently), 302 (Found), and 307
       (Temporary Redirect).

   2.  Redirection that offers a choice of matching resources, each
       capable of representing the original request target, as in the
       300 (Multiple Choices) status code.

   3.  Redirection to a different resource, identified by the Location
       field, that can represent an indirect response to the request, as
       in the 303 (See Other) status code.

   4.  Redirection to a previously cached result, as in the 304 (Not
       Modified) status code.

      Note: In HTTP/1.0, the status codes 301 (Moved Permanently) and
      302 (Found) were defined for the first type of redirect
      ().  Early user agents split on whether the
      method applied to the redirect target would be the same as the







      original request or would be rewritten as GET.  Although HTTP
      originally defined the former semantics for 301 and 302 (to match
      its original implementation at CERN), and defined 303 (See Other)
      to match the latter semantics, prevailing practice gradually
      converged on the latter semantics for 301 and 302 as well.  The
      first revision of HTTP/1.1 added 307 (Temporary Redirect) to
      indicate the former semantics without being impacted by divergent
      practice.  Over 10 years later, most user agents still do method
      rewriting for 301 and 302; therefore, this specification makes
      that behavior conformant when the original request is POST.

   A client SHOULD detect and intervene in cyclical redirections (i.e.,
   "infinite" redirection loops).

      Note: An earlier version of this specification recommended a
      maximum of five redirections ().  Content
      developers need to be aware that some clients might implement such
      a fixed limitation.


                                                