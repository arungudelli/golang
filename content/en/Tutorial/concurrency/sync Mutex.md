---
title: "sync Mutex"
description: "
  <h2>sync.Mutex</h2>
  
  
  <p>
    We've seen how channels are great for communication among goroutines.
  </p>
  

  
  <p>
    But what if we do"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -2
collapsible: false
---

  <h2>sync.Mutex</h2>
  
  
  <p>
    We've seen how channels are great for communication among goroutines.
  </p>
  

  
  <p>
    But what if we don't need communication? What if we just want to make sure only


    one goroutine can access a variable at a time to avoid conflicts?
  </p>
  

  
  <p>
    This concept is called <i>mutual exclusion</i>, and the conventional name for the data structure that provides it is <i>mutex</i>.
  </p>
  

  
  <p>
    Go's standard library provides mutual exclusion with


    <a href="https://golang.org/pkg/sync/#Mutex" target="_blank"><code>sync.Mutex</code></a> and its two methods:
  </p>
  

  <ul>
  
    <li><code>Lock</code></li>
  
    <li><code>Unlock</code></li>
  
  </ul>

  
  <p>
    We can define a block of code to be executed in mutual exclusion by surrounding it


    with a call to <code>Lock</code> and <code>Unlock</code> as shown on the <code>Inc</code> method.
  </p>
  

  
  <p>
    We can also use <code>defer</code> to ensure the mutex will be unlocked as in the <code>Value</code> method.
  </p>
  

	
		
	


                                                