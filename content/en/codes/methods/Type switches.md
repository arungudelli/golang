---
title: "Type switches"
description: "
  <h2>Type switches</h2>
  
  
  <p>
    A <i>type switch</i> is a construct that permits several type assertions in series.
  </p>
  

  
  <p>
    "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -10
collapsible: false
---

  <h2>Type switches</h2>
  
  
  <p>
    A <i>type switch</i> is a construct that permits several type assertions in series.
  </p>
  

  
  <p>
    A type switch is like a regular switch statement, but the cases in a type


    switch specify types (not values), and those values are compared against


    the type of the value held by the given interface value.
  </p>
  

  
  <pre>switch v := i.(type) {
case T:
    // here v has type T
case S:
    // here v has type S
default:
    // no match; here v has the same type as i
}</pre>
  

  
  <p>
    The declaration in a type switch has the same syntax as a type assertion <code>i.(T)</code>,


    but the specific type <code>T</code> is replaced with the keyword <code>type</code>.
  </p>
  

  
  <p>
    This switch statement tests whether the interface value <code>i</code>


    holds a value of type <code>T</code> or <code>S</code>.


    In each of the <code>T</code> and <code>S</code> cases, the variable <code>v</code> will be of type


    <code>T</code> or <code>S</code> respectively and hold the value held by <code>i</code>.


    In the default case (where there is no match), the variable <code>v</code> is


    of the same interface type and value as <code>i</code>.
  </p>
  

	
		
	


                                                