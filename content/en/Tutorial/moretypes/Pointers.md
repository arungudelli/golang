---
title: "Pointers"
description: "
  <h2>Pointers</h2>
  
  
  <p>
    Go has pointers.


    A pointer holds the memory address of a value.
  </p>
  

  
  <p>
    The type <code>*T</"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -26
collapsible: false
---

  <h2>Pointers</h2>
  
  
  <p>
    Go has pointers.


    A pointer holds the memory address of a value.
  </p>
  

  
  <p>
    The type <code>*T</code> is a pointer to a <code>T</code> value. Its zero value is <code>nil</code>.
  </p>
  

  
  <pre>var p *int</pre>
  

  
  <p>
    The <code>&amp;</code> operator generates a pointer to its operand.
  </p>
  

  
  <pre>i := 42
p = &amp;i</pre>
  

  
  <p>
    The <code>*</code> operator denotes the pointer's underlying value.
  </p>
  

  
  <pre>fmt.Println(*p) // read i through the pointer p
*p = 21         // set i through the pointer p</pre>
  

  
  <p>
    This is known as "dereferencing" or "indirecting".
  </p>
  

  
  <p>
    Unlike C, Go has no pointer arithmetic.
  </p>
  

	
		
	


                                                