+++
title = "Convert a String To Byte Array or Slice in Go"
date = "2020-11-05T14:09:21+09:00"
description = "To convert a string to byte array or slice in Go language use []byte(string)"
draft = "false"
link = "convert string to byte array"
+++

To convert a string to byte array or slice in Go language use the below one liner code.

```
[]byte(string)
```

We can use byte array to store a collection of binary data, for example, the contents of a file.

The above code to convert string to byte slice is very useful while using `ioutil.WriteFile` function, which accepts a bytes slice as its parameter:

```
WriteFile func(filename string, data []byte, perm os.FileMode) error
```

We will go through an example to understand it further.

## string to byte array example

I created a file named 'convert-string-to-byte-array.go'.

```
package main

import (
	"fmt"
)

func main() {

	var str string

	str = "string to byte array or slice"

	// converting and printing Byte array
	fmt.Println([]byte(str))

}
```

Now run the Go program

```
go run convert-string-to-byte-array.go

output:
[115 116 114 105 110 103 32 116 111 32 98 121 116 101 32 97 114 114 97 121 32 111 114 32 115 108 105 99 101]
```

## byte array with ioutil.WriteFile

As explained above, converting a string to byte array/slice is very useful while creating files using `ioutil.WriteFile` function.

The below code creates a new file called `hello.txt` using byte array.

```
package main

import (
	"io/ioutil"
	"log"
)

func main() {
	message := []byte("Hello, World!")
	err := ioutil.WriteFile("hello", message, 0644)
	if err != nil {
		log.Fatal(err)
	}
}
```
