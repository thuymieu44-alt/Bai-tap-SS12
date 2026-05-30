let a = Number(prompt("Mời nhập vào só a: "));
let b = Number(prompt("Mời nhập vào số b: "));
if (a % b === 0 && b !== 0) {
    console.log(`Số ${ a} chia hết cho số ${ b}.`);
} else if ((a % b !== 0 && b !== 0)) {
    console.log(`Số ${a} không chia hết cho số ${b}.`);
}
else {
    console.log('Mời nhập lại!');
}