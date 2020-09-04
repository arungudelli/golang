---
title: "Methods and pointer indirection"
description: "
  <h2>Methods and pointer indirection</h2>
  
  
  <p>
    Comparing the previous two programs, you might notice that


    functions with a pointer "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -20
collapsible: false
---

  <h2>Methods and pointer indirection</h2>
  
  
  <p>
    Comparing the previous two programs, you might notice that


    functions with a pointer argument must take a pointer:
  </p>
  

  
  <pre>var v Vertex
ScaleFunc(v, 5)  // Compile error!
ScaleFunc(&amp;v, 5) // OK</pre>
  

  
  <p>
    while methods with pointer receivers take either a value or a pointer as the


    receiver when they are called:
  </p>
  

  
  <pre>var v Vertex
v.Scale(5)  // OK
p := &amp;v
p.Scale(10) // OK</pre>
  

  
  <p>
    For the statement <code>v.Scale(5)</code>, even though <code>v</code> is a value and not a pointer,


    the method with the pointer receiver is called automatically.


    That is, as a convenience, Go interprets the statement <code>v.Scale(5)</code> as


    <code>(&amp;v).Scale(5)</code> since the <code>Scale</code> method has a pointer receiver.
  </p>
  

	
		
	


                                                