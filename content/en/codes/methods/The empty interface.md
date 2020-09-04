---
title: "The empty interface"
description: "
  <h2>The empty interface</h2>
  
  
  <p>
    The interface type that specifies zero methods is known as the <i>empty interface</i>:
  </p>
  

  
 "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -12
collapsible: false
---

  <h2>The empty interface</h2>
  
  
  <p>
    The interface type that specifies zero methods is known as the <i>empty interface</i>:
  </p>
  

  
  <pre>interface{}</pre>
  

  
  <p>
    An empty interface may hold values of any type.


    (Every type implements at least zero methods.)
  </p>
  

  
  <p>
    Empty interfaces are used by code that handles values of unknown type.


    For example, <code>fmt.Print</code> takes any number of arguments of type <code>interface{}</code>.
  </p>
  

	
		
	


                                                