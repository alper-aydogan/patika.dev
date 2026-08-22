const radius = Number(process.argv[2]);

if (!radius || radius <= 0) {
  console.log("Lutfen gecerli bir yaricap giriniz.");
  console.log("Ornek kullanim: node index.js 5");
  process.exit(1);
}

const area = Math.PI * radius * radius;

console.log(`Yaricapi ${radius} olan dairenin alani: ${area}`);
