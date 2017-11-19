let sum = 0;
let array = process.argv;
for (let index = 2; index < array.length; index++) {
    sum = sum + Number(array[index]);
}
console.log(sum);
