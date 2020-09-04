---
title: "Function closures"
description: "
  <h2>Function closures</h2>
  
  
  <p>
    Go functions may be closures. A closure is a function value that references variables from outside its b"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -2
collapsible: false
---

  <h2>Function closures</h2>
  
  
  <p>
    Go functions may be closures. A closure is a function value that references variables from outside its body. The function may access and assign to the referenced variables; in this sense the function is "bound" to the variables.
  </p>
  

  
  <p>
    For example, the <code>adder</code> function returns a closure. Each closure is bound to its own <code>sum</code> variable.
  </p>
  

	
		
	


                                                