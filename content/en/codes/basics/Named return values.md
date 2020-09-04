---
title: "Named return values"
description: "
  <h2>Named return values</h2>
  
  
  <p>
    Go's return values may be named. If so, they are treated as variables defined at the top of the functi"
date: 03-09-2020T23:19:47
lastmod: 03-09-2020T23:19:47
draft: false
weight: -10
collapsible: false
---

  <h2>Named return values</h2>
  
  
  <p>
    Go's return values may be named. If so, they are treated as variables defined at the top of the function.
  </p>
  

  
  <p>
    These names should be used to document the meaning of the return values.
  </p>
  

  
  <p>
    A <code>return</code> statement without arguments returns the named return values. This is known as a "naked" return.
  </p>
  

  
  <p>
    Naked return statements should be used only in short functions, as with the example shown here. They can harm readability in longer functions.
  </p>
  

	
		
	


                                                