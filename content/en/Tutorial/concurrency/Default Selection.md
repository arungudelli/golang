---
title: "Default Selection"
description: "
  <h2>Default Selection</h2>
  
  
  <p>
    The <code>default</code> case in a <code>select</code> is run if no other case is ready.
  </p>
  

  
 "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -5
collapsible: false
---

  <h2>Default Selection</h2>
  
  
  <p>
    The <code>default</code> case in a <code>select</code> is run if no other case is ready.
  </p>
  

  
  <p>
    Use a <code>default</code> case to try a send or receive without blocking:
  </p>
  

  
  <pre>select {
case i := &lt;-c:
    // use i
default:
    // receiving from c would block
}</pre>
  

	
		
	


                                                