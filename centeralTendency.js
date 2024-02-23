function centeralTendency(array) {
  let mean = 0;
  let median = [];
  let mode = {};
  let accesedMedian;
  let maxCount = 0;
  let maxProperty = 0;

  for (let i = 0; i < array.length; i++) {
    mean += array[i];
  }

  mean = mean / array.length;
  resultOfCenteralTendency.mean = mean;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (mode[element]) {
      mode[element] = mode[element] + 1;
    } else {
      mode[element] = 1;
    }

    if (mode[element] > maxCount) {
      maxCount = mode[element];
      maxProperty = element;
    }
  }

  resultOfCenteralTendency.mode = maxProperty;
  if (array.length % 2 === 0) {
    accesedMedian = array.length / 2 - 1;
    median = array[accesedMedian];
    for (let i = accesedMedian + 1; i < array.length; i++) {
      median += array[i];
      break;
    }
    median = median / 2
  } else if (array.length % 2 === 1) {
    accesedMedian = array.length / 2 - 0.5;
    median[median.length] = array[accesedMedian];
  }
  resultOfCenteralTendency.median = median;
  return resultOfCenteralTendency;
}

let resultOfCenteralTendency = {};
let array = [1, 0, 1, 5, 2, 8];
console.log(centeralTendency(array));
