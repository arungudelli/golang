---
title: "Readers"
description: "
  <h2>Readers</h2>
  
  
  <p>
    The <code>io</code> package specifies the <code>io.Reader</code> interface,


    which represents the read end of"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -5
collapsible: false
---

  <h2>Readers</h2>
  
  
  <p>
    The <code>io</code> package specifies the <code>io.Reader</code> interface,


    which represents the read end of a stream of data.
  </p>
  

  
  <p>
    The Go standard library contains <a href="https://golang.org/search?q=Read#Global" target="_blank">many implementations</a> of these interfaces, including files, network connections, compressors, ciphers, and others.
  </p>
  

  
  <p>
    The <code>io.Reader</code> interface has a <code>Read</code> method:
  </p>
  

  
  <pre>func (T) Read(b []byte) (n int, err error)</pre>
  

  
  <p>
    <code>Read</code> populates the given byte slice with data and returns the number of bytes


    populated and an error value. It returns an <code>io.EOF</code> error when the stream


    ends.
  </p>
  

  
  <p>
    The example code creates a


    <a href="//golang.org/pkg/strings/#Reader" target="_self"><code>strings.Reader</code></a>


    and consumes its output 8 bytes at a time.
  </p>
  

	
		
	


                                                