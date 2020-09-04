---
title: "Mutating Maps"
description: "
  <h2>Mutating Maps</h2>
  
  
  <p>
    Insert or update an element in map <code>m</code>:
  </p>
  

  
  <pre>m[key] = elem</pre>
  

  
  <p>
   "
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -5
collapsible: false
---

  <h2>Mutating Maps</h2>
  
  
  <p>
    Insert or update an element in map <code>m</code>:
  </p>
  

  
  <pre>m[key] = elem</pre>
  

  
  <p>
    Retrieve an element:
  </p>
  

  
  <pre>elem = m[key]</pre>
  

  
  <p>
    Delete an element:
  </p>
  

  
  <pre>delete(m, key)</pre>
  

  
  <p>
    Test that a key is present with a two-value assignment:
  </p>
  

  
  <pre>elem, ok = m[key]</pre>
  

  
  <p>
    If <code>key</code> is in <code>m</code>, <code>ok</code> is <code>true</code>. If not, <code>ok</code> is <code>false</code>.
  </p>
  

  
  <p>
    If <code>key</code> is not in the map, then <code>elem</code> is the zero value for the map's element type.
  </p>
  

  
  <p>
    <b>Note:</b> If <code>elem</code> or <code>ok</code> have not yet been declared you could use a short declaration form:
  </p>
  

  
  <pre>elem, ok := m[key]</pre>
  

	
		
	


                                                