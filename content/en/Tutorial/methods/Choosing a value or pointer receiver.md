---
title: "Choosing a value or pointer receiver"
description: "
  <h2>Choosing a value or pointer receiver</h2>
  
  
  <p>
    There are two reasons to use a pointer receiver.
  </p>
  

  
  <p>
    The first is"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -18
collapsible: false
---

  <h2>Choosing a value or pointer receiver</h2>
  
  
  <p>
    There are two reasons to use a pointer receiver.
  </p>
  

  
  <p>
    The first is so that the method can modify the value that its receiver points to.
  </p>
  

  
  <p>
    The second is to avoid copying the value on each method call.


    This can be more efficient if the receiver is a large struct, for example.
  </p>
  

  
  <p>
    In this example, both <code>Scale</code> and <code>Abs</code> are with receiver type <code>*Vertex</code>,


    even though the <code>Abs</code> method needn't modify its receiver.
  </p>
  

  
  <p>
    In general, all methods on a given type should have either value or pointer


    receivers, but not a mixture of both.


    (We'll see why over the next few pages.)
  </p>
  

	
		
	


                                                