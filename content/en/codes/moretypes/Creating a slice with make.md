---
title: "Creating a slice with make"
description: "
  <h2>Creating a slice with make</h2>
  
  
  <p>
    Slices can be created with the built-in <code>make</code> function;


    this is how you creat"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -14
collapsible: false
---

  <h2>Creating a slice with make</h2>
  
  
  <p>
    Slices can be created with the built-in <code>make</code> function;


    this is how you create dynamically-sized arrays.
  </p>
  

  
  <p>
    The <code>make</code> function allocates a zeroed array


    and returns a slice that refers to that array:
  </p>
  

  
  <pre>a := make([]int, 5)  // len(a)=5</pre>
  

  
  <p>
    To specify a capacity, pass a third argument to <code>make</code>:
  </p>
  

  
  <pre>b := make([]int, 0, 5) // len(b)=0, cap(b)=5

b = b[:cap(b)] // len(b)=5, cap(b)=5
b = b[1:]      // len(b)=4, cap(b)=4</pre>
  

	
		
	


                                                