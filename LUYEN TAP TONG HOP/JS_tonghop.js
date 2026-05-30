let name = "";
let age = "";
while (true) {
    let choice = prompt(`Xin mời bạn chọn:\n1. Nhập tên\n2. Nhập tuổi\n3. In tên và tuổi đã nhập\n4. In bảng cửu chương\n5. Kiểm tra tính chẵn/lẻ của số\n6. Tổng các số từ 1 đến N (N tự nhập)\n7. In các số trong dãy (tự nhập)\n8. Kiểm tra số nguyên tố\n9. In chuỗi đảo ngược đã nhập\n10. Thoát khỏi chương trình`);
    switch (choice) {
        case '1':
            name = prompt('Mời nhập tên:');
            break;
        case '2':
            age = prompt('Mời nhập tuổi:');
            break;
        case '3':
            console.log("Tên:" + name , "Tuổi:" + age);
            break;
        case '4':
            let number= Number(prompt('Mời nhập số:'))
            for (let i = 1; i <= 10; i++) 
                console.log(`${number} x ${i} = ${number * i}`);
            break;
        case '5':
            {
                let n = Number(n)(prompt('Nhập số để kiểm tra chẵn/lẻ:'));
                if (Number.isNaN(n)) 
                    console.log('Giá trị không hợp lệ');
                else console.log(n % 2 === 0 ? n + 'là số chẵn' : n + 'Là số lẻ');
            }
            break;
        case '6':
            {
                let n = Number(prompt('Nhập N:'));
                if (Number.isInteger(n) && n > 0) {
                    let sum = (n * (n + 1)) / 2;
                    console.log(`Tổng từ 1 đến ${n} = ${sum}`);
                } else console.log('N không hợp lệ!');
            }
            break;
        case '7':{
             let number = prompt('Mời nhập dãy số (a, b, c, ...):');
            console.log('Dãy số bạn nhập là:' + number);
        }
            break;
        case '8': {
        let number = Number (prompt('Mời nhập số cần kiểm tra:'));
        let isPrime = true;
       for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0){
            prime = false;
            break;}
        console.log( isPrime? number + " là số nguyên tố" : " Không là số nguyên tố");
    }}
    break
        case '9':
            {
                let s = prompt('Nhập chuỗi của bạn:') || '';
                console.log(s.split('').reverse().join(''));
            }
            break;
        case '10':
            console.log('Thoát chương trình');
            break;
        default:
            console.log('Lựa chọn không hợp lệ');
    }
    if (choice === '10') break;
}