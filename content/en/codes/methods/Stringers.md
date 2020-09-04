---
title: "Stringers"
description: "
  <h2>Stringers</h2>
  
  
  <p>
    One of the most ubiquitous interfaces is"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -9
collapsible: false
---

  <h2>Stringers</h2>
  
  
  <p>
    One of the most ubiquitous interfaces is <a href="//golang.org/pkg/fmt/#Stringer" target="_self"><code>Stringer</code></a> defined by the <a href="//golang.org/pkg/fmt/" target="_self"><code>fmt</code></a> package.
  </p>
  

  
  <pre>type Stringer interface {
    String() string
}</pre>
  

  
  <p>
    A <code>Stringer</code> is a type that can describe itself as a string. The <code>fmt</code> package


    (and many others) look for this interface to print values.
  </p>
  

	
		
	


                                                