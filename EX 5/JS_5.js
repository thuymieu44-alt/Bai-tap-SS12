let money= Number(prompt('Mời nhập số tiền gốc( VND): '));
let month= Number(prompt('Mời nhập số tháng:'));
let r= Number(prompt('Mời nhập lãi suất hàng tháng:'));
for (let i = 1; i <= month; i++) {
    let r1 = r / 100;
    money = money * Math.pow(1+r1, i);
console.log ('Số tiền sau ' + i + ' tháng là: ' + money.toFixed(3) + ' VND');
}
