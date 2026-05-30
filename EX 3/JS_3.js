let cardinal = 0; // Đếm số nguyên tố đã tìm được
let number = 2;

while (cardinal < 20) {
    let prime = true;

    // Kiểm tra number có phải số nguyên tố không
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            prime = false;
            break; 
        }
    }
    if (prime) {
        console.log(number);
        cardinal++; //Tăng biến đếm
    }

    number++;
}