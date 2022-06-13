export const collatzMethod = (number) => {
  let result = number;
  let step = 0;
  let intermediateValues = [];
  while (result !== 1) {
    if (result % 2 == 0) {
      //Es par
      result = result / 2;
      step += 1;
      intermediateValues.push(result);
    } else {
      //Es impar
      result = result * 3 + 1;
      step += 1;
      intermediateValues.push(result);
    }
  }
  return { result, step, intermediateValues };
};
