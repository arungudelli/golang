---
title: "Packages"
description: "
  <h2>Packages</h2>
  
  
  <p>
    Every Go program is made up of packages.
  </p>
  

  
  <p>
    Programs start running in package <code>main</co"
date: 03-09-2020T23:19:47
lastmod: 03-09-2020T23:19:47
draft: false
weight: -16
collapsible: false
---

  <h2>Packages</h2>
  
  
  <p>
    Every Go program is made up of packages.
  </p>
  

  
  <p>
    Programs start running in package <code>main</code>.
  </p>
  

  
  <p>
    This program is using the packages with import paths <code>"fmt"</code> and <code>"math/rand"</code>.
  </p>
  

  
  <p>
    By convention, the package name is the same as the last element of the import path. For instance, the <code>"math/rand"</code> package comprises files that begin with the statement <code>package rand</code>.
  </p>
  

  
  <p>
    <b>Note:</b> The environment in which these programs are executed is


    deterministic, so each time you run the example program


    <code>rand.Intn</code> will return the same number.
  </p>
  

  
  <p>
    (To see a different number, seed the number generator; see <a href="https://golang.org/pkg/math/rand/#Seed" target="_blank"><code>rand.Seed</code></a>.


    Time is constant in the playground, so you will need to use something else as the seed.)
  </p>
  

	
		
	


                                                