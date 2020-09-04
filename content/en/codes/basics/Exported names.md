---
title: "Exported names"
description: "
  <h2>Exported names</h2>
  
  
  <p>
    In Go, a name is exported if it begins with a capital letter.


    For example, <code>Pizza</code> is an e"
date: 03-09-2020T23:19:47
lastmod: 03-09-2020T23:19:47
draft: false
weight: -14
collapsible: false
---

  <h2>Exported names</h2>
  
  
  <p>
    In Go, a name is exported if it begins with a capital letter.


    For example, <code>Pizza</code> is an exported name, as is <code>Pi</code>, which is exported from


    the <code>math</code> package.
  </p>
  

  
  <p>
    <code>pizza</code> and <code>pi</code> do not start with a capital letter, so they are not exported.
  </p>
  

  
  <p>
    When importing a package, you can refer only to its exported names.


    Any "unexported" names are not accessible from outside the package.
  </p>
  

  
  <p>
    Run the code. Notice the error message.
  </p>
  

  
  <p>
    To fix the error, rename <code>math.pi</code> to <code>math.Pi</code> and try it again.
  </p>
  

	
		
	


                                                