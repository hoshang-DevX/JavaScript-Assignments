
const buttonCount = document.getElementById('buttonCount')
const generate = document.getElementById('generate')
const output = document.getElementById('output')
// first of all we want to create n number of dynamic buttons 

// user se input lenge
// abb ek functio banayenge jo generate krega buttons

const countObj = {} // empty object banaya to store how many times each button is clicked

 generate.onclick = () => {
    const inputNumber = buttonCount.value;
    for( let i = 0; i < inputNumber; i++){
        const buttonKey = `button${i+1}`
        countObj[buttonKey] = 0 // initially uski value in object should be 0

        const button = document.createElement('button')
        button.textContent =  `Button ${i+1}`
        button.classList.add('btn') // jo bhi buttons bnege woh iss classList mai add honge
        document.body.appendChild(button) // jo buttons banaye woh body mai daaale..

        button.onclick =() =>{
            countObj[buttonKey] += 1;   // increment the count value in object
            button.textContent =  `Button${i+1}  count : ${countObj[buttonKey]}`
        }

    }
}

//////////////////////////////////////

// abb btn class ke sab buttons ka onclick count increment krna hai. aur usi mai display
// all buutons are in same class so ek object bana deta hun to contain all the values of counts
// and wohi values ko button pe display kar dunga .
 
//////////////////////////////////////

// tally krne ke liye bhi ek button banaya
const tallyButton = document.createElement('button')
tallyButton.textContent = `Click to summ all button counts.`
document.body.appendChild(tallyButton)

// ab jab talllybutton press hoga toh countObj mai har buttonKey ki value ko add kr lenge 
// we can use forEach 

tallyButton.onclick = () =>{
    let totalCount = 0
    // iterate over each button in countObj and add the values to totalCount.. 
    Object.keys(countObj).forEach(buttonKey =>
        totalCount += countObj[buttonKey] 
    )
    output.innerText = `summ of all button clicks is : ${totalCount}`
}





