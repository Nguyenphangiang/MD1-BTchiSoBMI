//tạo biến lấy chỉ số cân nặng, chiều cao
let weight= Number(prompt("Nhập chỉ số cân nặng:"));
let height= Number(prompt("Nhập chỉ số chiều cao:"))/100;
//tạo biến tính chỉ số bmi
let bmi = weight / (height**2)
//tạo hàm điều kiện if để so sánh
if (bmi < 18.5){
    alert("Underweight");
} else if (bmi < 25.0){
    alert("Normal");
} else if (bmi < 30.0){
    alert("Overweight");
} else
    alert("Obese");
