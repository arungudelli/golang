---
title: "Switch evaluation order"
description: "
  <h2>Switch evaluation order</h2>
  
  
  <p>
    Switch cases evaluate cases from top to bottom, stopping when a case succeeds.
  </p>
  

  
  <p>"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -4
collapsible: false
---

  <h2>Switch evaluation order</h2>
  
  
  <p>
    Switch cases evaluate cases from top to bottom, stopping when a case succeeds.
  </p>
  

  
  <p>
    (For example,
  </p>
  

  
  <pre>switch i {
case 0:
case f():
}</pre>
  

  
  <p>
    does not call <code>f</code> if <code>i==0</code>.)
  </p>
  

  
  <p>
    <b>Note:</b> Time in the Go playground always appears to start at


    2009-11-10 23:00:00 UTC, a value whose significance is left as an


    exercise for the reader.
  </p>
  

	
		
	


                                                