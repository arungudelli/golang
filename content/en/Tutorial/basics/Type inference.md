---
title: "Type inference"
description: "
  <h2>Type inference</h2>
  
  
  <p>
    When declaring a variable without specifying an explicit type (either by using the <code>:=</code> syntax o"
date: 03-09-2020T23:19:47
lastmod: 03-09-2020T23:19:47
draft: false
weight: -3
collapsible: false
---

  <h2>Type inference</h2>
  
  
  <p>
    When declaring a variable without specifying an explicit type (either by using the <code>:=</code> syntax or <code>var =</code> expression syntax), the variable's type is inferred from the value on the right hand side.
  </p>
  

  
  <p>
    When the right hand side of the declaration is typed, the new variable is of that same type:
  </p>
  

  
  <pre>var i int
j := i // j is an int</pre>
  

  
  <p>
    But when the right hand side contains an untyped numeric constant, the new variable may be an <code>int</code>, <code>float64</code>, or <code>complex128</code> depending on the precision of the constant:
  </p>
  

  
  <pre>i := 42           // int
f := 3.142        // float64
g := 0.867 + 0.5i // complex128</pre>
  

  
  <p>
    Try changing the initial value of <code>v</code> in the example code and observe how its type is affected.
  </p>
  

	
		
	


                                                