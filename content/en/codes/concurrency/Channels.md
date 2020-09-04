---
title: "Channels"
description: "
  <h2>Channels</h2>
  
  
  <p>
    Channels are a typed conduit through which you can send and receive values with the channel operator, <code>&lt;-"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -9
collapsible: false
---

  <h2>Channels</h2>
  
  
  <p>
    Channels are a typed conduit through which you can send and receive values with the channel operator, <code>&lt;-</code>.
  </p>
  

  
  <pre>ch &lt;- v    // Send v to channel ch.
v := &lt;-ch  // Receive from ch, and
           // assign value to v.</pre>
  

  
  <p>
    (The data flows in the direction of the arrow.)
  </p>
  

  
  <p>
    Like maps and slices, channels must be created before use:
  </p>
  

  
  <pre>ch := make(chan int)</pre>
  

  
  <p>
    By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks or condition variables.
  </p>
  

  
  <p>
    The example code sums the numbers in a slice, distributing the work between two goroutines.


    Once both goroutines have completed their computation, it calculates the final result.
  </p>
  

	
		
	


                                                