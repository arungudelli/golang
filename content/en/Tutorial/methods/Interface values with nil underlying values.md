---
title: "Interface values with nil underlying values"
description: "
  <h2>Interface values with nil underlying values</h2>
  
  
  <p>
    If the concrete value inside the interface itself is nil,


    the method wil"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -14
collapsible: false
---

  <h2>Interface values with nil underlying values</h2>
  
  
  <p>
    If the concrete value inside the interface itself is nil,


    the method will be called with a nil receiver.
  </p>
  

  
  <p>
    In some languages this would trigger a null pointer exception,


    but in Go it is common to write methods that gracefully handle being called


    with a nil receiver (as with the method <code>M</code> in this example.)
  </p>
  

  
  <p>
    Note that an interface value that holds a nil concrete value is itself non-nil.
  </p>
  

	
		
	


                                                