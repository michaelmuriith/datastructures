# Problem: Sign of the Product of an Array

[Sign of the Product of an Array](https://leetcode.com/problems/sign-of-the-product-of-an-array/)

There is a function signFunc(x) that returns:

```json
1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
```

You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

```yaml
#Example 1:
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1
```

```yaml
#Example 2:
Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0
```

```yaml
#Example 3:

Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1
 ```

## Solution

To solve this problem, we need to:-

1. check if the array if there is a zero in the array if there is a zero return 0

2. Count the number of negative numbers in the array if the number of negative numbers is odd return -1 else return 1

```js
    var arraySign = function(nums) {
    //initialize a variable to hold the countof negative numbers
        let count = 0;
        //loop through the array
        for(let i = 0; i < nums.length; i++){
            //if the number is 0, return 0
            if(nums[i] === 0){
                return 0;
            }
            //if the number is negative, increment the count
            if(nums[i] < 0){
                count++;
            }
        }

        //if the count is odd, return -1
        if(count % 2 !== 0){
            return -1;
        }else{
            //if the count is even, return 1
            return 1;
        }
    }
```
