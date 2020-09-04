---
title: "Exercise Equivalent Binary Trees"
description: "
  <h2>Exercise: Equivalent Binary Trees</h2>
  
  
  <p>
    There can be many different binary trees with the same sequence of values stored in it. "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -4
collapsible: false
---

  <h2>Exercise: Equivalent Binary Trees</h2>
  
  
  <p>
    There can be many different binary trees with the same sequence of values stored in it. For example, here are two binary trees storing the sequence 1, 1, 2, 3, 5, 8, 13.
  </p>
  

  <img src="/content/img/tree.png">

  
  <p>
    A function to check whether two binary trees store the same sequence is quite complex in most languages. We'll use Go's concurrency and channels to write a simple solution.
  </p>
  

  
  <p>
    This example uses the <code>tree</code> package, which defines the type:
  </p>
  

  
  <pre>type Tree struct {
    Left  *Tree
    Value int
    Right *Tree
}</pre>
  

  
  <p>
    Continue description on <a href="javascript:click('.next-page')" target="_self">next page</a>.
  </p>
  


                                                