const backColor = document.getElementById('background')
const colorInput = document.getElementById('colorInput')

const button1 = document.createElement('button')
button1.textContent = ` I a Button 1`
document.body.appendChild(button1)

const button2 = document.createElement('button')
button2.textContent = 'I am button 2'
document.body.appendChild(button2) 

const colors = []   // created an empty array to storethe input color.. 

/// button1 ke kaam :
            // array (colors) ko display krna


button1.onclick = () => {
    // Iterate over the colors array
    colors.forEach(color => {
        // Create a new button for each color
        const colorButton = document.createElement('button');
        colorButton.textContent = color;  // Set the text as the color value

        // Add a click event to remove the button when clicked
        colorButton.onclick = () => {
            document.body.removeChild(colorButton); // Remove this color button from the page
        };

        // Append the color button to the page
        document.body.appendChild(colorButton);
    })
}


// button2 ke two kaam: 
        // 1: input array se input leke array mai store krna 
        // 2: new button element banana with color = array element
button2.onclick = () =>{

    document.body.style.backgroundColor = colorInput.value
    // inout leke array mai store kara
    colors.push(colorInput.value)

    // new button created
    const button3 = document.createElement('button')
    button3.textContent = `${colorInput.value}`
    document.body.appendChild(button3)

    button3.onclick = () => {
        document.body.style.backgroundColor = colorInput.value;
    }

}