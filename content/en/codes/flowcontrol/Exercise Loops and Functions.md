---
title: "Exercise Loops and Functions"
description: "
  <h2>Exercise: Loops and Functions</h2>
  
  
  <p>
    As a way to play with functions and loops, let's implement a square root function: given a n"
date: 03-09-2020T23:19:48
lastmod: 03-09-2020T23:19:48
draft: false
weight: -6
collapsible: false
---

  <h2>Exercise: Loops and Functions</h2>
  
  
  <p>
    As a way to play with functions and loops, let's implement a square root function: given a number x, we want to find the number z for which z² is most nearly x.
  </p>
  

  
  <p>
    Computers typically compute the square root of x using a loop.


    Starting with some guess z, we can adjust z based on how close z² is to x,


    producing a better guess:
  </p>
  

  
  <pre>z -= (z*z - x) / (2*z)</pre>
  

  
  <p>
    Repeating this adjustment makes the guess better and better


    until we reach an answer that is as close to the actual square root as can be.
  </p>
  

  
  <p>
    Implement this in the <code>func Sqrt</code> provided.


    A decent starting guess for z is 1, no matter what the input.


    To begin with, repeat the calculation 10 times and print each z along the way.


    See how close you get to the answer for various values of x (1, 2, 3, ...)


    and how quickly the guess improves.
  </p>
  

  
  <p>
    Hint: To declare and initialize a floating point value,


    give it floating point syntax or use a conversion:
  </p>
  

  
  <pre>z := 1.0
z := float64(1)</pre>
  

  
  <p>
    Next, change the loop condition to stop once the value has stopped


    changing (or only changes by a very small amount).


    See if that's more or fewer than 10 iterations.


    Try other initial guesses for z, like x, or x/2.


    How close are your function's results to the <a href="https://golang.org/pkg/math/#Sqrt" target="_blank">math.Sqrt</a> in the standard library?
  </p>
  

  
  <p>
    (<b>Note:</b> If you are interested in the details of the algorithm, the z² − x above


    is how far away z² is from where it needs to be (x), and the division by 2z is the derivative


    of z², to scale how much we adjust z by how quickly z² is changing.


    This general approach is called <a href="https://en.wikipedia.org/wiki/Newton%27s_method" target="_blank">Newton's method</a>.


    It works well for many functions but especially well for square root.)
  </p>
  

	
		
	


                                                