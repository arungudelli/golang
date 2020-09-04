---
title: "Slice length and capacity"
description: "
  <h2>Slice length and capacity</h2>
  
  
  <p>
    A slice has both a <i>length</i> and a <i>capacity</i>.
  </p>
  

  
  <p>
    The length of a "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -16
collapsible: false
---

  <h2>Slice length and capacity</h2>
  
  
  <p>
    A slice has both a <i>length</i> and a <i>capacity</i>.
  </p>
  

  
  <p>
    The length of a slice is the number of elements it contains.
  </p>
  

  
  <p>
    The capacity of a slice is the number of elements in the underlying array,


    counting from the first element in the slice.
  </p>
  

  
  <p>
    The length and capacity of a slice <code>s</code> can be obtained using the expressions


    <code>len(s)</code> and <code>cap(s)</code>.
  </p>
  

  
  <p>
    You can extend a slice's length by re-slicing it,


    provided it has sufficient capacity.


    Try changing one of the slice operations in the example program to extend it


    beyond its capacity and see what happens.
  </p>
  

	
		
	


                                                