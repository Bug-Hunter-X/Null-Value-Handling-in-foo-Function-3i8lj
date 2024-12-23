# JavaScript Bug: Null Value Handling in foo Function

This repository demonstrates a common bug in JavaScript related to handling null values as function arguments. The `foo` function unexpectedly returns when null values are passed without explicitly handling them or raising an error.

## Bug Description
The `foo` function doesn't provide any mechanism to handle null values passed as parameters. This leads to unexpected behavior and can lead to errors further down the call stack.

## Bug Solution
The solution includes explicit checks for null values and either throws an error or assigns default values, making the function's behavior more predictable and robust. The preferred solution depends on the specific context and requirements.
