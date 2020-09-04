---
title: "Images"
description: "
  <h2>Images</h2>
  
"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -2
collapsible: false
---

  <h2>Images</h2>
  
  
  <p>
    <a href="https://golang.org/pkg/image/#Image" target="_blank">Package image</a> defines the <code>Image</code> interface:
  </p>
  

  
  <pre>package image

type Image interface {
    ColorModel() color.Model
    Bounds() Rectangle
    At(x, y int) color.Color
}</pre>
  

  
  <p>
    <b>Note</b>: the <code>Rectangle</code> return value of the <code>Bounds</code> method is actually an


    <a href="https://golang.org/pkg/image/#Rectangle" target="_blank"><code>image.Rectangle</code></a>, as the


    declaration is inside package <code>image</code>.
  </p>
  

  
  <p>
    (See <a href="https://golang.org/pkg/image/#Image" target="_blank">the documentation</a> for all the details.)
  </p>
  

  
  <p>
    The <code>color.Color</code> and <code>color.Model</code> types are also interfaces, but we'll ignore that by using the predefined implementations <code>color.RGBA</code> and <code>color.RGBAModel</code>. These interfaces and types are specified by the <a href="https://golang.org/pkg/image/color/" target="_blank">image/color package</a>
  </p>
  

	
		
	


                                                