---
title: "Slice defaults"
description: "
  <h2>Slice defaults</h2>
  
  
  <p>
    When slicing, you may omit the high or low bounds to use their defaults instead.
  </p>
  

  
  <p>
    Th"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -17
collapsible: false
---

  <h2>Slice defaults</h2>
  
  
  <p>
    When slicing, you may omit the high or low bounds to use their defaults instead.
  </p>
  

  
  <p>
    The default is zero for the low bound and the length of the slice for the high bound.
  </p>
  

  
  <p>
    For the array
  </p>
  

  
  <pre>var a [10]int</pre>
  

  
  <p>
    these slice expressions are equivalent:
  </p>
  

  
  <pre>a[0:10]
a[:10]
a[0:]
a[:]</pre>
  

	
		
	


                                                