import { formatCurrency } from "../script/utils/money.js";


console.log("money module testing");
console.log("Works with normal values");
if(formatCurrency(2095)==='20.95'){
    console.log('Passed');
}
else{
    console.log("failed");
}

console.log("Works with round cases");
if(formatCurrency(2000.5)==='20.1'){
    console.log('Passed');
}
else{
    console.log('failed');
}

console.log("Works with zeroes");
if(formatCurrency(0)==='0.00'){
    console.log('Passed');
}
else{
    console.log('failed');
}