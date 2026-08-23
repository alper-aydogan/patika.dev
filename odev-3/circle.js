const circleArea = (radius) => {
  const area = Math.PI * radius * radius;
  console.log(`Yaricapi ${radius} olan dairenin alani: ${area}`);
};

const circleCircumference = (radius) => {
  const circumference = 2 * Math.PI * radius;
  console.log(`Yaricapi ${radius} olan dairenin cevresi: ${circumference}`);
};

module.exports = {
  circleArea,
  circleCircumference,
};
