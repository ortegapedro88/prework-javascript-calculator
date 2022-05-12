// get the buttons:
const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btnAdd = document.getElementById('add');
const btnSub = document.getElementById('sub');
const btnMul = document.getElementById('mul');
const btnDiv = document.getElementById('div');
const btnEqu = document.getElementById('equ');
const btnClear = document.getElementById('clear');


const result = document.getElementById('result');

let preview = "";



btn1.onclick = ()=>{
    preview += "1"
    showResult()
}

btn2.onclick = ()=>{
    preview += "2"
  
    showResult()
}
btn3.onclick = ()=>{
    preview += "3"
  
    showResult()
}
btn4.onclick = ()=>{
    preview += "4"
  
    showResult()
}
btn5.onclick = ()=>{
    preview += "5"
    showResult()
}
btn6.onclick = ()=>{
    preview += "6"
    showResult()
}
btn7.onclick = ()=>{
    preview += "7"
    showResult()
}
btn8.onclick = ()=>{
    preview += "8"
    showResult()
}
btn9.onclick = ()=>{
    preview += "9"
    showResult()
}
btn0.onclick = ()=>{
    preview += "0"
    showResult()
}
btnAdd.onclick = ()=>{
    preview += "+"
    showResult()
}
btnSub.onclick = ()=>{
    preview += "-"
    showResult()
}
btnMul.onclick = ()=>{
    preview += "*"
    showResult()
}
btnDiv.onclick = ()=>{
    preview += "/"
    showResult()
}

btnEqu.onclick = ()=>{
    preview = eval(preview)
    showResult()
    preview = ""
}
btnClear.onclick = ()=>{
    preview = ""
    showResult()
   
}

function showResult(){
    result.innerText = preview
    
}




