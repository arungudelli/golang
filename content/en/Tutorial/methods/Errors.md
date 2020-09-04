---
title: "Errors"
description: "
  <h2>Errors</h2>
  
  
  <p>
    Go programs express error state with <code>error</code> values.
  </p>
  

  
  <p>
    The <code>error</code> type"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -7
collapsible: false
---

  <h2>Errors</h2>
  
  
  <p>
    Go programs express error state with <code>error</code> values.
  </p>
  

  
  <p>
    The <code>error</code> type is a built-in interface similar to <code>fmt.Stringer</code>:
  </p>
  

  
  <pre>type error interface {
    Error() string
}</pre>
  

  
  <p>
    (As with <code>fmt.Stringer</code>, the <code>fmt</code> package looks for the <code>error</code> interface when


    printing values.)
  </p>
  

  
  <p>
    Functions often return an <code>error</code> value, and calling code should handle errors


    by testing whether the error equals <code>nil</code>.
  </p>
  

  
  <pre>i, err := strconv.Atoi("42")
if err != nil {
    fmt.Printf("couldn't convert number: %v\n", err)
    return
}
fmt.Println("Converted integer:", i)</pre>
  

  
  <p>
    A nil <code>error</code> denotes success; a non-nil <code>error</code> denotes failure.
  </p>
  

	
		
	


                                                