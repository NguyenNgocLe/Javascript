var result = 'A' && 'B' && 'C'
console.log(result)
console.log('-----')
var numberOne = 1
var numberTwo = 2
var resultTwo = numberOne < 0 || numberTwo > 0
console.log(resultTwo)
console.log('-----')
// Mặc định lấy giá trị cuối, nếu 1 trong dãy điều kiện
// bị dính phải 6 kiểu là: null, 0, false, NaN, undefine thì lấy giá trì này
// ngược lại thì lấy giá trị cuối cùng!
console.log('A' && 'B' && null && 'D')