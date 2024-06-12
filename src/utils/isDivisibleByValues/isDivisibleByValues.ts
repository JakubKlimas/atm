export const isDivisibleByValues = (
  value: number,
  divisors: number[]
): boolean => {
  return divisors.some((divisor) => value % divisor === 0);
};
