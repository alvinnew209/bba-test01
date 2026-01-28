# Lession 4: Java Script nâng cao
## Phạm vi của biến:

1. Block scope (khối): được khai báo trong cặp ngoặc nhọn
- Var: không bị giới hạn trong cặp ngoặc nhọn.
- let / const: bị giới hạn trong cặp ngoặc nhọn. Ra ngoài bị undefined.

2. Function scope (hàm): biến được khai báo trong một hàm
- Cả let/var/const ra ngoài hàm đều bị undefined

3. Toàn cục (global): biến được khai báo ở một dòng code tự do, không nằm trong khối hay hàm

## break và continue

### break: dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.
// Ví dụ thực tế: Tìm phần tử đầu tiên
`const numbers = [1, 3, 8, 7, 9, 11];`

`let firstEven = null;`

`for (let num of numbers) {`

    if (num % 2 === 0) {

    firstEven = num;`

    break; // Dừng ngay khi tìm thấy

`}`

`}`

### continue: dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.

`// Bỏ qua số chẵn`

`for (let i = 0; i < 10; i++) {`

`if (i % 2 === 0) {`

`continue; // Bỏ qua số chẵn`

`}`

`console.log(i);`

`}`

`// Output: 1, 3, 5, 7, 9`

## Câu diều kiện nâng cao:

### If...else: Thực thi code khác nhau cho trường hợp true và false.

`let score = 75;`

`if (score >= 60) {`

    console.log("bạn đã qua môn");

`} else {`
    console.log("bạn cần học lại");

`}`

### If...else if:
`let score = 75;`

`if (score >= 90) {`
    
    console.log("Xuất sắc");

`} else if (score >= 80) {`

    console.log("Giỏi");

`} else if (score >= 70) {`

    console.log("Khá");

`} else if (score >= 60) {`

    console.log("Trung bình");

`} else {`

    console.log("Yếu");

`}`

### Ternary operator (toán tử điều kiện): Cách viết ngắn gọn cho if...else đơn giản

VD1:

`let age = 20;`

`let status = (age >= 18) ? "Người lớn" : "Trẻ em";`

`console.log(status); // "Người lớn"`

VD2:

// Có thể lồng nhau (nên cẩn thận với độ phức tạp)

`let score = 75;`

`let grade = score >= 90 ? "A" :`

`score >= 80 ? "B" :`

`score >= 70 ? "C" :`

`score >= 60 ? "D" : "F";`

## Vòng lặp nâng cao:

### for...in Loop: Dùng để duyệt qua các thuộc tính (properties) của một object.

1.  Với object:

`const persion = {`

    name: "John",
    age: 30,
    city: "Ha Noi"

`}`;

`for (let key in person) {`
    
    console.log(key +": " + person[key]);
    
`}`

// Output:

// name: John

// age: 30

// city: Hanoi

2. Với Array (không khuyến khích)

`const colors = ["red", "green", "blue"];`

`for (let index in colors) {`

`console.log(index + ": " + colors[index]);`

`}`

// Output:

// 0: red

// 1: green

// 2: blue

### forEach Method

Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng break hoặc continue.

`const numbers = [1, 2, 3, 4, 5];`

`numbers.forEach(function(value) {`

`console.log(value);`

`});`

## Utils function
Utils = tiện ích

Utils function là các hàm có sẵn của JavaScript, giúp việc code trở nên
nhanh hơn, gọn hơn.

### String utils: các hàm xử lý chuỗi


1/ Trim: bỏ khoảng trắng

- trim(): bỏ khoảng trắng 2 đầu

- trimStart(): bỏ khoảng trắng bên trái

- trimEnd(): bỏ khoảng trắng bên phải

VD:

`let text = "   Hello World   ";`

`console.log(text.trimStart());` // "Hello World   "

2. toUpperCase / toLowerCase: Chuyển đổi hoa thường

`let str = "JavaScript";`

`console.log(str.toUpperCase());` // "JAVASCRIPT"

3. includes: kiểm tra có bao gồm chuỗi con không

`let text = "Hello World";`

`console.log(text.includes("World"));` // true

`console.log(text.includes("world"));` // false => phân biệt hoa thường

4. split: cắt chuỗi

`let email = "user@gmail.com";`

`email.split("@");` // ["user", "gmail.com"]

`let date = "2024-01-25";`

`date.split("-");` // ["2024", "01", "25"]

5. replace: thay thế chuỗi con bằng chuỗi khác

`let text = "Hello World";`

`console.log(text.replace("World","JavaScript"));` // "Hello JavaScript"

6. Thêm các String utils function:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

### Array utils: các hàm xử lý mảng

`let arr = [1, 2, 3];`

1. `arr.push(4);` // thêm 4 vào cuối mảng 

2. `arr.unshift(0);` // thêm 0 vào đầu mảng

3. `arr.splice(2, 0, 1.5)`; // vị trí index số 2 (0, 1, 2, 3, 4 -> 2), thêm vào 0 -> không xóa gì, thêm 1.5 vào trước phần tử 2.

`let arr = [1, 2, 3, 4, 5];`

4. `arr.pop();` // xóa phần tử cuối => [1, 2, 3, 4]

5. `arr.shift;` // xóa phần tử đầu => [2, 3, 4]

6. `arr.splice(1, 1);` // xóa 1 phần tử ở vị trí index 1 => [2, 4]

`const numbers = [5, 12, 8, 130, 44];`

7. `let first = numbers.find(num => num > 10);` // Trả về phần tử đầu tiên > 10

`console.log(first);`// 12

8. `let all = numbers.filter(num => num > 10);` // Trả về tất cả phần tử > 10

`console.log(all);`// [12, 130, 44]

9. map: Biến đổi mảng: Tạo mảng mớibằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài

`let numbers = [1, 2, 3, 4, 5];`

`let doubled = numbers.map(num => num * 2);` // Nhân mỗi phần tử với 2

`console.log(doubled);` // [2, 4, 6, 8, 10]

10. sort: Sắp xếp mảng

`let numbers = [40, 100, 1, 5, 25, 10];`

`numbers.sort((a, b) => a - b);` // Sắp xếp tăng dần

`console.log(numbers);` // [1, 5, 10, 25, 40, 100]

`numbers.sort((a, b) => b - a);` // Sắp xếp giảm dần

`console.log(numbers);`// [100, 40, 25, 10, 5, 1]`

11. Thêm các Array utils function:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array