---
title: "Exercise Images"
description: "
  <h2>Exercise: Images</h2>
  
  
  <p>
    Remember the <a href=/moretypes/18 target=_self>picture generator</a> you wrote earlier? Let's write "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -1
collapsible: false
---

  <h2>Exercise: Images</h2>
  
  
  <p>
    Remember the <a href="/moretypes/18" target="_self">picture generator</a> you wrote earlier? Let's write another one, but this time it will return an implementation of <code>image.Image</code> instead of a slice of data.
  </p>
  

  
  <p>
    Define your own <code>Image</code> type, implement <a href="https://golang.org/pkg/image/#Image" target="_blank">the necessary methods</a>, and call <code>pic.ShowImage</code>.
  </p>
  

  
  <p>
    <code>Bounds</code> should return a <code>image.Rectangle</code>, like <code>image.Rect(0, 0, w, h)</code>.
  </p>
  

  
  <p>
    <code>ColorModel</code> should return <code>color.RGBAModel</code>.
  </p>
  

  
  <p>
    <code>At</code> should return a color; the value <code>v</code> in the last picture generator corresponds to <code>color.RGBA{v, v, 255, 255}</code> in this one.
  </p>
  

	
		
	


                                                