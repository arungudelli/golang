---
title: "Buffered Channels"
description: "
  <h2>Buffered Channels</h2>
  
  
  <p>
    Channels can be <i>buffered</i>.  Provide the buffer length as the second argument to <code>make</code> "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -8
collapsible: false
---

  <h2>Buffered Channels</h2>
  
  
  <p>
    Channels can be <i>buffered</i>.  Provide the buffer length as the second argument to <code>make</code> to initialize a buffered channel:
  </p>
  

  
  <pre>ch := make(chan int, 100)</pre>
  

  
  <p>
    Sends to a buffered channel block only when the buffer is full. Receives block when the buffer is empty.
  </p>
  

  
  <p>
    Modify the example to overfill the buffer and see what happens.
  </p>
  

	
		
	


                                                