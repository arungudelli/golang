---
title: "Type assertions"
description: "
  <h2>Type assertions</h2>
  
  
  <p>
    A <i>type assertion</i> provides access to an interface value's underlying concrete value.
  </p>
  

  
 "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -11
collapsible: false
---

  <h2>Type assertions</h2>
  
  
  <p>
    A <i>type assertion</i> provides access to an interface value's underlying concrete value.
  </p>
  

  
  <pre>t := i.(T)</pre>
  

  
  <p>
    This statement asserts that the interface value <code>i</code> holds the concrete type <code>T</code>


    and assigns the underlying <code>T</code> value to the variable <code>t</code>.
  </p>
  

  
  <p>
    If <code>i</code> does not hold a <code>T</code>, the statement will trigger a panic.
  </p>
  

  
  <p>
    To <i>test</i> whether an interface value holds a specific type,


    a type assertion can return two values: the underlying value


    and a boolean value that reports whether the assertion succeeded.
  </p>
  

  
  <pre>t, ok := i.(T)</pre>
  

  
  <p>
    If <code>i</code> holds a <code>T</code>, then <code>t</code> will be the underlying value and <code>ok</code> will be true.
  </p>
  

  
  <p>
    If not, <code>ok</code> will be false and <code>t</code> will be the zero value of type <code>T</code>,


    and no panic occurs.
  </p>
  

  
  <p>
    Note the similarity between this syntax and that of reading from a map.
  </p>
  

	
		
	


                                                