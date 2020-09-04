---
title: "Exercise rot13Reader"
description: "
  <h2>Exercise: rot13Reader</h2>
  
  
  <p>
    A common pattern is an "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -3
collapsible: false
---

  <h2>Exercise: rot13Reader</h2>
  
  
  <p>
    A common pattern is an <a href="https://golang.org/pkg/io/#Reader" target="_blank">io.Reader</a> that wraps another <code>io.Reader</code>, modifying the stream in some way.
  </p>
  

  
  <p>
    For example, the <a href="https://golang.org/pkg/compress/gzip/#NewReader" target="_blank">gzip.NewReader</a> function takes an <code>io.Reader</code> (a stream of compressed data) and returns a <code>*gzip.Reader</code> that also implements <code>io.Reader</code> (a stream of the decompressed data).
  </p>
  

  
  <p>
    Implement a <code>rot13Reader</code> that implements <code>io.Reader</code> and reads from an <code>io.Reader</code>, modifying the stream by applying the <a href="https://en.wikipedia.org/wiki/ROT13" target="_blank">rot13</a> substitution cipher to all alphabetical characters.
  </p>
  

  
  <p>
    The <code>rot13Reader</code> type is provided for you.


    Make it an <code>io.Reader</code> by implementing its <code>Read</code> method.
  </p>
  

	
		
	


                                                