## Fibonacci's Button
![fib](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fibonacci_spiral_34.svg/220px-Fibonacci_spiral_34.svg.png)

The Fibonacci Sequence is an integer sequence commonly used in places where increasing sequences are needed, like login throttling or coding interview questions :smile:. Formally it's defined as:

```
fib(n) = fib(n-1) + fib(n-2)
```

For this exercise we'll use the following base cases:
```
fib(0) = 0
fib(1) = 1
```


### What do I do?

This is a simple test of basic CS fundamentals as well as basic Angular knowledge. The spec is as follows:

- [ ] A single page that contains two buttons, `Reset` and `Next Fib`, as well as the current value of the sequence interpolated above it, starting at 0.
- [ ] When the `Next Fib` button is clicked, we will update the view to display the next step of the sequence.
- [ ] Clicking the `Reset` button will reset the sequence to the base case
- The buttons and text should be styled similarly to the screenshot below:
![screen](screenshot.png)

### For consideration:

- Don't worry too much about dependency management. Including angular in a `<script>` tag is fine for this example.
- Performance is important here. Make sure to watch how frequently you're evaluating a `fib()` function such that you're only running it as needed.
- Update the last section of this `README.md` with any thoughts or explanations you may have.
- You can choose to use recursion or iteration for your implementation, but please let us know why you chose the one you did in the README.

### Extra Credit

- Two `Next Fib` buttons, one that uses an iterative Fibonacci algorithm, and another that uses a recursive one, labeled appropriately.
- Automated tests included for the project. Use your framework of choice for testing and include dependencies such that we can run the tests here.


### Solution Discussion:
Initially I chose to tackle this problem using a recursive Fibonacci algorithm because it was very simple and clean. O dodn't realize how much more performant the iterative method was until I implemented it. Because of this I made it the default method.

With the iterative method, I keep track of the previous Fibonacci numbers by appending numbers to an array. Given the step based scope of this app, we could make this even more performant by referring to this array rather than iterating over n steps.
