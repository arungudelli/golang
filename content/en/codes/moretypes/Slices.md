---
title: "Slices"
description: "
  <h2>Slices</h2>
  
  
  <p>
    An array has a fixed size.


    A slice, on the other hand, is a dynamically-sized,


    flexible view into the e"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -20
collapsible: false
---

  <h2>Slices</h2>
  
  
  <p>
    An array has a fixed size.


    A slice, on the other hand, is a dynamically-sized,


    flexible view into the elements of an array.


    In practice, slices are much more common than arrays.
  </p>
  

  
  <p>
    The type <code>[]T</code> is a slice with elements of type <code>T</code>.
  </p>
  

  
  <p>
    A slice is formed by specifying two indices, a low and


    high bound, separated by a colon:
  </p>
  

  
  <pre>a[low : high]</pre>
  

  
  <p>
    This selects a half-open range which includes the first


    element, but excludes the last one.
  </p>
  

  
  <p>
    The following expression creates a slice which includes


    elements 1 through 3 of <code>a</code>:
  </p>
  

  
  <pre>a[1:4]</pre>
  

	
		
	


                                                