const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')



// i will also use an object to maintain the value of count of all 3 buttons.
// uske liye i will use class in html file which will wrap all the 3 buttons .
// 


let countObj = {
    'expression' : 0, 
    'arrow' :0 , 
    'declaration' :0 
}

// button 1 using expression
// function ko pehle assign krne pdega variable ko ; uske baad hi use kr skte hain

const expression = function(){
    countObj['expression'] += 1;
    button1.innerText = `button 1 (expression format) count : ${countObj.expression}`
}
button1.onclick = expression;



// button 2 counter using arrow function

button2.onclick = () => {
    countObj['arrow'] += 1; 
    // countObj.arrow.valueOf += 1;
    button2.innerText = `button 2 (Arrow Format) count : ${countObj.arrow}`
}



// button 3 using declaration

function declaration() {
    countObj['declaration'] += 1;
    button3.innerText = `button 3 (declaration Format) count : ${countObj.declaration}`
}

button3.onclick = declaration    // function call jo aage banayenge 
