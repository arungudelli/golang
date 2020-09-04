---
title: "Basic types"
description: "
  <h2>Basic types</h2>
  
  
  <p>
    Go's basic types are
  </p>
  

  
  <pre>bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint3"
date: 03-09-2020T23:19:47
lastmod: 03-09-2020T23:19:47
draft: false
weight: -6
collapsible: false
---

  <h2>Basic types</h2>
  
  
  <p>
    Go's basic types are
  </p>
  

  
  <pre>bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32
     // represents a Unicode code point

float32 float64

complex64 complex128</pre>
  

  
  <p>
    The example shows variables of several types,


    and also that variable declarations may be "factored" into blocks,


    as with import statements.
  </p>
  

  
  <p>
    The <code>int</code>, <code>uint</code>, and <code>uintptr</code> types are usually 32 bits wide on 32-bit systems and 64 bits wide on 64-bit systems.


    When you need an integer value you should use <code>int</code> unless you have a specific reason to use a sized or unsigned integer type.
  </p>
  

	
		
	


                                                