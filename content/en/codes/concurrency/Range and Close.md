---
title: "Range and Close"
description: "
  <h2>Range and Close</h2>
  
  
  <p>
    A sender can <code>close</code> a channel to indicate that no more values will be sent. Receivers can test"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -7
collapsible: false
---

  <h2>Range and Close</h2>
  
  
  <p>
    A sender can <code>close</code> a channel to indicate that no more values will be sent. Receivers can test whether a channel has been closed by assigning a second parameter to the receive expression: after
  </p>
  

  
  <pre>v, ok := &lt;-ch</pre>
  

  
  <p>
    <code>ok</code> is <code>false</code> if there are no more values to receive and the channel is closed.
  </p>
  

  
  <p>
    The loop <code>for i := range c</code> receives values from the channel repeatedly until it is closed.
  </p>
  

  
  <p>
    <b>Note:</b> Only the sender should close a channel, never the receiver. Sending on a closed channel will cause a panic.
  </p>
  

  
  <p>
    <b>Another note:</b> Channels aren't like files; you don't usually need to close them. Closing is only necessary when the receiver must be told there are no more values coming, such as to terminate a <code>range</code> loop.
  </p>
  

	
		
	


                                                