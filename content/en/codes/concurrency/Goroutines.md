---
title: "Goroutines"
description: "
  <h2>Goroutines</h2>
  
  
  <p>
    A <i>goroutine</i> is a lightweight thread managed by the Go runtime.
  </p>
  

  
  <pre>go f(x, y, z)</pre>
"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -10
collapsible: false
---

  <h2>Goroutines</h2>
  
  
  <p>
    A <i>goroutine</i> is a lightweight thread managed by the Go runtime.
  </p>
  

  
  <pre>go f(x, y, z)</pre>
  

  
  <p>
    starts a new goroutine running
  </p>
  

  
  <pre>f(x, y, z)</pre>
  

  
  <p>
    The evaluation of <code>f</code>, <code>x</code>, <code>y</code>, and <code>z</code> happens in the current goroutine and the execution of <code>f</code> happens in the new goroutine.
  </p>
  

  
  <p>
    Goroutines run in the same address space, so access to shared memory must be synchronized. The <a href="https://golang.org/pkg/sync/" target="_blank"><code>sync</code></a> package provides useful primitives, although you won't need them much in Go as there are other primitives. (See the next slide.)
  </p>
  

	
		
	


                                                