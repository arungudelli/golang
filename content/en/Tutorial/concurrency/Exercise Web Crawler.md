---
title: "Exercise Web Crawler"
description: "
  <h2>Exercise: Web Crawler</h2>
  
  
  <p>
    In this exercise you'll use Go's concurrency features to parallelize a web crawler.
  </p>
  

  
  "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -1
collapsible: false
---

  <h2>Exercise: Web Crawler</h2>
  
  
  <p>
    In this exercise you'll use Go's concurrency features to parallelize a web crawler.
  </p>
  

  
  <p>
    Modify the <code>Crawl</code> function to fetch URLs in parallel without fetching the same URL twice.
  </p>
  

  
  <p>
    <i>Hint</i>: you can keep a cache of the URLs that have been fetched on a map, but maps alone are not


    safe for concurrent use!
  </p>
  

	
		
	


                                                