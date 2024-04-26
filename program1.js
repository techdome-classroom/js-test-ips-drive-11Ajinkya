function smallestMissingPositiveInteger(nums) {
  const numsSet = new Set(nums);
  let smallestPositive = 1;

  while (numsSet.has(smallestPositive)) {
      smallestPositive++;
  }

  return smallestPositive;
}

module.exports = smallestMissingPositiveInteger;