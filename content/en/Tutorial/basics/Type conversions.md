---
title: "Type conversions"
description: "
  <h2>Type conversions</h2>
  
  
  <p>
    The expression <code>T(v)</code> converts the value <code>v</code> to the type <code>T</code>.
  </p>
  
"
date: 03-09-2020T23:19:47
lastmod: 03-09-2020T23:19:47
draft: false
weight: -4
collapsible: false
---

  <h2>Type conversions</h2>
  
  
  <p>
    The expression <code>T(v)</code> converts the value <code>v</code> to the type <code>T</code>.
  </p>
  

  
  <p>
    Some numeric conversions:
  </p>
  

  
  <pre>var i int = 42
var f float64 = float64(i)
var u uint = uint(f)</pre>
  

  
  <p>
    Or, put more simply:
  </p>
  

  
  <pre>i := 42
f := float64(i)
u := uint(f)</pre>
  

  
  <p>
    Unlike in C, in Go assignment between items of different type requires an


    explicit conversion.


    Try removing the <code>float64</code> or <code>uint</code> conversions in the example and see what happens.
  </p>
  

	
		
	


                                                