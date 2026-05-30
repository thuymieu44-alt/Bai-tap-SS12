let a= Number(prompt('Mời nhập hệ số a:'));
let b= Number(prompt('Mời nhập hệ số b:'));
let c= Number(prompt('Mời nhập hệ số c:'));
let denta= Math.pow(b,2) - 4 * a * c;
if (a !== 0 && denta === 0) {
    let x = -b / (2 * a);
    console.log('Phương trình có nghiệm kép x1 = x2 = ' + x );
} else if (denta > 0 && a !== 0) {
    let x1= (-b + Math.sqrt(denta)) / ( 2 * a);
    let x2 = (-b - Math.sqrt(denta)) / ( 2 * a);
    console.log(`Phương trình có 2 nghiệm là: x1 = ${x1}, x2 = ${x2}`);
} else if (denta < 0 && a !== 0){
    console.log('Phương trình vô nghiệm.');
} else {
    console.log('Mời nhập lại, đây không phải phương trình bậc 2!');
}