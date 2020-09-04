---
title: "Pointers to structs"
description: "
  <h2>Pointers to structs</h2>
  
  
  <p>
    Struct fields can be accessed through a struct pointer.
  </p>
  

  
  <p>
    To access the field <c"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -23
collapsible: false
---

  <h2>Pointers to structs</h2>
  
  
  <p>
    Struct fields can be accessed through a struct pointer.
  </p>
  

  
  <p>
    To access the field <code>X</code> of a struct when we have the struct pointer <code>p</code> we could


    write <code>(*p).X</code>.


    However, that notation is cumbersome, so the language permits us instead to


    write just <code>p.X</code>, without the explicit dereference.
  </p>
  

	
		
	


                                                