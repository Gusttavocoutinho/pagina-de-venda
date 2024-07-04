function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY;
  
  for (let num of nums) {
    if (num > max_num) {
      max_num += num;
    }
  }
  console.log(max_num)
  return max_num
}

find_max([1,2,3,4,5,6])