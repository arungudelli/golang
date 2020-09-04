---
title: "For"
description: "
  <h2>For</h2>
  
  
  <p>
    Go has only one looping construct, the <code>for</code> loop.
  </p>
  

  
  <p>
    The basic <code>for</code> loop "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -13
collapsible: false
---

  <h2>For</h2>
  
  
  <p>
    Go has only one looping construct, the <code>for</code> loop.
  </p>
  

  
  <p>
    The basic <code>for</code> loop has three components separated by semicolons:
  </p>
  

  <ul>
  
    <li>the init statement: executed before the first iteration</li>
  
    <li>the condition expression: evaluated before every iteration</li>
  
    <li>the post statement: executed at the end of every iteration</li>
  
  </ul>

  
  <p>
    The init statement will often be a short variable declaration, and the


    variables declared there are visible only in the scope of the <code>for</code>


    statement.
  </p>
  

  
  <p>
    The loop will stop iterating once the boolean condition evaluates to <code>false</code>.
  </p>
  

  
  <p>
    <b>Note:</b> Unlike other languages like C, Java, or JavaScript there are no parentheses


    surrounding the three components of the <code>for</code> statement and the braces <code>{ }</code> are


    always required.
  </p>
  

	
		
	


                                                