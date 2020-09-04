---
title: "Exercise Errors"
description: "
  <h2>Exercise: Errors</h2>
  
  
  <p>
    Copy your <code>Sqrt</code> function from the <a href=/flowcontrol/8 target=_self>earlier exercise</a"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -6
collapsible: false
---

  <h2>Exercise: Errors</h2>
  
  
  <p>
    Copy your <code>Sqrt</code> function from the <a href="/flowcontrol/8" target="_self">earlier exercise</a> and modify it to return an <code>error</code> value.
  </p>
  

  
  <p>
    <code>Sqrt</code> should return a non-nil error value when given a negative number, as it doesn't support complex numbers.
  </p>
  

  
  <p>
    Create a new type
  </p>
  

  
  <pre>type ErrNegativeSqrt float64</pre>
  

  
  <p>
    and make it an <code>error</code> by giving it a
  </p>
  

  
  <pre>func (e ErrNegativeSqrt) Error() string</pre>
  

  
  <p>
    method such that <code>ErrNegativeSqrt(-2).Error()</code> returns <code>"cannot Sqrt negative number: -2"</code>.
  </p>
  

  
  <p>
    <b>Note:</b> A call to <code>fmt.Sprint(e)</code> inside the <code>Error</code> method will send the program into an infinite loop. You can avoid this by converting <code>e</code> first: <code>fmt.Sprint(float64(e))</code>. Why?
  </p>
  

  
  <p>
    Change your <code>Sqrt</code> function to return an <code>ErrNegativeSqrt</code> value when given a negative number.
  </p>
  

	
		
	


                                                