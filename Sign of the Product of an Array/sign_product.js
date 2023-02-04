/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    //initialize a variable to hold the count of negative numbers
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
};