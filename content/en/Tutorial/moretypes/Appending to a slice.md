---
title: "Appending to a slice"
description: "
  <h2>Appending to a slice</h2>
  
  
  <p>
    It is common to append new elements to a slice, and so Go provides a built-in


    <code>append</cod"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -12
collapsible: false
---

  <h2>Appending to a slice</h2>
  
  
  <p>
    It is common to append new elements to a slice, and so Go provides a built-in


    <code>append</code> function. The <a href="https://golang.org/pkg/builtin/#append" target="_blank">documentation</a>


    of the built-in package describes <code>append</code>.
  </p>
  

  
  <pre>func append(s []T, vs ...T) []T</pre>
  

  
  <p>
    The first parameter <code>s</code> of <code>append</code> is a slice of type <code>T</code>, and the rest are


    <code>T</code> values to append to the slice.
  </p>
  

  
  <p>
    The resulting value of <code>append</code> is a slice containing all the elements of the


    original slice plus the provided values.
  </p>
  

  
  <p>
    If the backing array of <code>s</code> is too small to fit all the given values a bigger


    array will be allocated. The returned slice will point to the newly allocated


    array.
  </p>
  

  
  <p>
    (To learn more about slices, read the <a href="https://blog.golang.org/go-slices-usage-and-internals" target="_blank">Slices: usage and internals</a> article.)
  </p>
  

	
		
	


                                                