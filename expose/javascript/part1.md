## `var`

### 1. What is printed by line 9? If the code returns an error, explain why. ^^^^^

line 9 will print `values added: 20` because the add parameter is true, so the result variable is declared with var and assigned the sum of num1 and num2, which are both 10.

### 2. What is printed by line 13? If the code returns an error, explain why.

line 13 will print `final result: 20`. The reason we still get `20` for the `result` is because the `result` variable is declared with `var`, which gives it function scope. This means that it can be accessed anywhere inside the `sumValues()` function, even outside the if block.

## `let`

### 3. What is printed by line 9? If the code returns an error, explain why.

Line 9 will print `values added: 20` because the add parameter is true, so the result variable is declared with let and assigned the sum of num1 and num2, which are both 10.

### 4. What is printed by line 13? If the code returns an error, explain why.
Line 13 will cause an error and print nothing, because the result variable is not accessible outside of the if block where it is defined. The error message will say something like`Uncaught ReferenceError: result is not defined`. The reason we get this error is because the `result` variable is declared with `let`, which gives it block scope. This means that it can only be accessed inside the if block, and not outside of it.

## `const`

### 5. What is printed by line 9? If the code returns an error, explain why.

Line 9 wont reach at all or will cause an error because the `result` variable is declared with const, which means it cannot be reassigned after it is declared. The error message will say something like `Uncaught TypeError: Assignment to constant variable.`

### 6. What is printed by line 13? If the code returns an error, explain why.

It depends on the javascript engine and its environment. Usually, this code will not reach line 13 because line 9 will cause an error. Otherwise, line 13 will cause an error because the result variable is declared with const, which means it cannot be reassigned after it is declared. The error message will say something like `Uncaught TypeError: Assignment to constant variable.` Or could be the error message will say something like `ReferenceError: result is not defined` if the result variable is not accessible outside of the if block where it is defined. The reason we get this error is because the `result` variable is declared with `const`, which gives it block scope. This means that it can only be accessed inside the if block, and not outside of it. It depends on the javascript engine and its environment. The `sumValues` also throw the error.