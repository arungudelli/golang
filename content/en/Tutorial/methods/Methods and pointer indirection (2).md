---
title: "Methods and pointer indirection (2)"
description: "
  <h2>Methods and pointer indirection (2)</h2>
  
  
  <p>
    The equivalent thing happens in the reverse direction.
  </p>
  

  
  <p>
    Functio"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -19
collapsible: false
---

  <h2>Methods and pointer indirection (2)</h2>
  
  
  <p>
    The equivalent thing happens in the reverse direction.
  </p>
  

  
  <p>
    Functions that take a value argument must take a value of that specific type:
  </p>
  

  
  <pre>var v Vertex
fmt.Println(AbsFunc(v))  // OK
fmt.Println(AbsFunc(&amp;v)) // Compile error!</pre>
  

  
  <p>
    while methods with value receivers take either a value or a pointer as the


    receiver when they are called:
  </p>
  

  
  <pre>var v Vertex
fmt.Println(v.Abs()) // OK
p := &amp;v
fmt.Println(p.Abs()) // OK</pre>
  

  
  <p>
    In this case, the method call <code>p.Abs()</code> is interpreted as <code>(*p).Abs()</code>.
  </p>
  

	
		
	


                                                