function calculator(num1,num2,operation) {
    switch (operation) {
        case "+":
            return num1+num2
            break;
        case "-":
            return num1-num2
            break;
        case "*":
            return num1*num2
            break;
        case "/":
            return num1/num2
            break;
        case "%":
            return num1%num2
            break;
        default:
            return "pick an operation"
            break;
    }
}
console.log(calculator(1,2,"/"));