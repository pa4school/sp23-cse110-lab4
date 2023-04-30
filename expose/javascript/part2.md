```javascript
function discountPrices(prices, discount) {
	var discounted = [];
	var finalPrice = 0;
	
    for (var i = 0; i < prices.length; i++) {
		var discountedPrice = prices[i] * (1 - discount);
		finalPrice = Math.round(discountedPrice * 100) / 100;
		discounted.push(finalPrice);
	}
	
    // console.log(i);
	// console.log(discountedPrice);
	console.log(finalPrice);
	
    return discounted;
}

discountPrices([100, 200, 300], 0.5);
```


## `var`

### 1. What is printed by line 12? If the code returns an error, explain why.

Line 12 will print `3`. Since `i` is declared using the `var` keyword within the `for` loop, it has function scope. This means that it can be accessed anywhere inside the function it is defined in. In this case, after the `for` loop has completed, the value of `i` will be equal to the length of the prices array. So, the value logged to the console will be the length of the prices array. With the arguments [100, 200, 300] and 0.5, the value logged to the console will be `3`, which is the `length` of the `prices` array.

### 2. What is printed by line 13? If the code returns an error, explain why.

Line 13 will log the value of `discountedPrice` to the console. Since `discountedPrice` is declared using the `var` keyword within the `for` loop, it has function scope. This means that it can be accessed anywhere inside the function it is defined in. In this case, after the `for` loop has completed, the value of `discountedPrice` will be equal to the last calculated value of `discountedPrice` within the loop. So, when the function is called with the arguments `[100, 200, 300]` and `0.5`, the value logged to the console will be `150`, which is the last calculated value of `discountedPrice` within the loop. This is derived from the web page context. Is there anything else you would like to know?

### 3. What is printed by line 14? If the code returns an error, explain why.

Line 14 will log the value of `finalPrice` to the console. Since `finalPrice` is declared using the `var` keyword within the `for` loop, it has function scope. This means that it can be accessed anywhere inside the function it is defined in. In this case, after the `for` loop has completed, the value of `finalPrice` will be equal to the last calculated value of `finalPrice` within the loop. So, when the function is called with the arguments `[100, 200, 300]` and `0.5`, the value logged to the console will be `150`, which is the last calculated value of `finalPrice` within the loop. This is derived from the web page context. Is there anything else you would like to know?

### 4. ^^^ What is returned by the function? If the code returns an error, explain why. ^^^

The `discountPrices` function will return an array of discounted prices. The function takes in two arguments: an array of prices and a discount value. The function calculates the discounted price for each price in the input array by multiplying the price by `(1 - discount)`. The discounted price is then rounded to two decimal places using `Math.round(discountedPrice * 100) / 100` and pushed into the `discounted` array. Finally, the function returns the `discounted` array. Therefore, the function is called with an array of prices `[100, 200, 300]` and a discount value of `0.5`. The function will return an array of discounted prices `[50, 100, 150]`.


## `let`

### 5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

Line 12 will cause an error because `i` is declared using the `let` keyword within the `for` loop. This means that it has block scope. This means that it can only be accessed within the block it is defined in. In this case, `i` can only be accessed within the `for` loop. So, when the function is called with the arguments `[100, 200, 300]` and `0.5`, the value logged to the console will be `ReferenceError: i is not defined`. Since the `console.log(i)` statement is outside of the `for` loop block, it will throw a ReferenceError stating that `i` is niot defined.

### 6. ^^^ What will happen at line 13 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

Line 13 will cause an error because `discountedPrice` is declared using the `let` keyword within the `for` loop. This means that it has block scope. This means that it can only be accessed within the block it is defined in. In this case, `discountedPrice` can only be accessed within the `for` loop. So, when the function is called with the arguments `[100, 200, 300]` and `0.5`, the value logged to the console will be `ReferenceError: discountedPrice is not defined`. This is derived from the web page context. Is there anything else you would like to know?

### 7. ^^^ What will happen at line 14 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

The `console.log(finalPrice)` statement will log the value of `finalPrice` to the console. In this case, it will log the value of `finalPrice` after the `for` loop has completed. The `finalPrice` variable is declared with the `let` keyword at the beginning of the function, which means it has block scope and can be accessed within the block it is defined in. Since the `console.log(finalPrice)` statement is within the same block as the `finalPrice` variable declaration, it can access and log its value without causing an error.

In the example provided, where the function is called with an array of prices `[100, 200, 300]` and a discount value of `0.5`, the `console.log(finalPrice)` statement will log the value `150` to the console. This is because after the `for` loop has completed, the value of `finalPrice` is equal to the last calculated discounted price, which is `300 * (1 - 0.5) = 150`.

8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

The `discountPrices` function will return an array of discounted prices. The function takes in two arguments: an array of prices and a discount value. The function calculates the discounted price for each price in the input array by multiplying the price by `(1 - discount)`. The discounted price is then rounded to two decimal places using `Math.round(discountedPrice * 100) / 100` and pushed into the `discounted` array. Finally, the function returns the `discounted` array.

In the example provided, where the function is called with an array of prices `[100, 200, 300]` and a discount value of `0.5`, the function will return an array of discounted prices `[50, 100, 150]`.


## `const`

### 9. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

The `console.log(i)` statement will cause an error. This is because the variable `i` is declared with the `let` keyword inside the `for` loop block, which means it has block scope and can only be accessed within the block it is defined in. Since the `console.log(i)` statement is outside of the `for` loop block, it will throw a ReferenceError stating that `i` is not defined.

### 10. ^^^ What will happen at line 13 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

Print length of array, which is `3`


### 11. ^^^ What will happen at line 14 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

The line 14 will return the `[ 150, 150, 150 ]` because the `discounted` array is declared with the `const` keyword, which means it has block scope and can only be accessed within the block it is defined in. Since the `console.log(discounted)` statement is within the same block as the `discounted` array declaration, it can access and log its value without causing an error. And sill can access the value of `discounted` array.

### 12.

```js
A. student.name

B. student['Grad Year']

C. student.greeting()

D. student['Favorite Teacher'].name

E. student.courseLoad[0]
```

## Basic Operators & Type Conversion 

### 13. Arithmetic
A. '3' + 2 = '32' when adding, the number 2 is converted to a string and then concatenated with the other string.

B. '3' - 2 = 1 , when subtracting, the string '3' is converted to a number and then the subtraction is performed.

C. 3 + null = 3 because null is converted to 0 when used in a numeric operation.

D. '3' + null = '3null' because when a string and null are added, null is converted to a string and then concatenated with the other string.

E. true + 3 = 4 because true is converted to 1 when used in a numeric operation.

F. false + null = 0 because false and null are both converted to 0 when used in a numeric operation.

G. '3' + undefined = '3undefined' because when a string and undefined are added, undefined is converted to a string and then concatenated with the other string.

H. '3' - undefined = NaN because when a string and undefined are subtracted, undefined is converted to NaN (Not a Number) which makes the result NaN as well.

### 14. Comparison

A. '2' > 1 = true because when a string and a number are compared, the string is converted to a number and then the comparison is performed.

B. '2' < '12' = false because when two strings are compared, they are compared lexicographically (i.e., character by character). Since '2' comes after '1' in the Unicode character set, '2' is considered greater than '12'.

C. 2 == '2' = true because when a number and a string are compared using the == operator, the string is converted to a number and then the comparison is performed.

D. 2 === '2' = false because when a number and a string are compared using the === operator (strict equality), no type conversion is performed. Since the two operands are of different types (number and string), the result is false.

E. true == 2 = false because when a boolean and a number are compared using the == operator, the boolean is converted to a number (true becomes 1 and false becomes 0) and then the comparison is performed.

F. true === Boolean(2) = true because when a boolean and a number are compared using the === operator (strict equality), no type conversion is performed. However, in this case, Boolean(2) explicitly converts the number 2 to a boolean value (true) before the comparison is performed. Since both operands are now of the same type (boolean) and have the same value (true), the result is true.

### 15. Explain the difference between the == and === operators.

In javascript, the `==` operator is used to compare two values. It will return `true` if the two values are equal and `false` otherwise. The `===` operator is used to compare two values and their types. It will return `true` if the two values are equal and have the same type and `false` otherwise.


## Loops


### 17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 

We defines two functions: `modifyArray` and `doSomething`. The `modifyArray` function takes in two arguments: an array and a callback function. It creates a new empty array called `newArr`, then iterates through each element of the input array using a for loop. Inside the loop, it calls the callback function with the current element of the input array as an argument, then pushes the result to `newArr`. After the loop is finished, it returns `newArr`.

The `doSomething` function takes in a single argument, `num`, and returns the result of multiplying it by 2.

When `modifyArray` is called with `[1, 2, 3]` as the first argument and `doSomething` as the second argument, it iterates through each element of `[1, 2, 3]` and calls `doSomething` with that element as an argument. Since `doSomething` multiplies its input by 2, this results in `[1*2, 2*2, 3*2]`, which is `[2, 4, 6]`. Therefore, calling `console.log(modifyArray([1, 2, 3], doSomething))` logs `[2, 4, 6]` to the console.


## 19. What is the output of the above code? (This should be in your part2.md)

The function `printNums` logs the numbers 1 and 4 to the console synchronously. The `setTimeout` functions are asynchronous and are added to the event queue to be executed later. The second `setTimeout` logs 3 to the console after all synchronous code has finished executing, while the first `setTimeout` logs 2 to the console after a delay of 1 second. So, the final order of numbers logged is: 1, 4, 3, 2.