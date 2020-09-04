---
title: "Pointer receivers"
description: "
  <h2>Pointer receivers</h2>
  
  
  <p>
    You can declare methods with pointer receivers.
  </p>
  

  
  <p>
    This means the receiver type has"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -22
collapsible: false
---

  <h2>Pointer receivers</h2>
  
  
  <p>
    You can declare methods with pointer receivers.
  </p>
  

  
  <p>
    This means the receiver type has the literal syntax <code>*T</code> for some type <code>T</code>.


    (Also, <code>T</code> cannot itself be a pointer such as <code>*int</code>.)
  </p>
  

  
  <p>
    For example, the <code>Scale</code> method here is defined on <code>*Vertex</code>.
  </p>
  

  
  <p>
    Methods with pointer receivers can modify the value to which the receiver


    points (as <code>Scale</code> does here).


    Since methods often need to modify their receiver, pointer receivers are more


    common than value receivers.
  </p>
  

  
  <p>
    Try removing the <code>*</code> from the declaration of the <code>Scale</code> function on line 16


    and observe how the program's behavior changes.
  </p>
  

  
  <p>
    With a value receiver, the <code>Scale</code> method operates on a copy of the original


    <code>Vertex</code> value.


    (This is the same behavior as for any other function argument.)


    The <code>Scale</code> method must have a pointer receiver to change the <code>Vertex</code> value


    declared in the <code>main</code> function.
  </p>
  

	
		
	


                                                