let Button = document.getElementById('wishButton')
let Message = document.getElementById('message')
let username = document.getElementById('user')


// input ki value ko lena hai aur message mai display krna hai


Button.onclick = () => {
    let userInput = username.value.trim();

    if(userInput.length > 3){
        Message.innerText = `Hi ${username.value} Welcome to Hoshang's Assignment`;
    }
    else{
        Message.innerText = `Enter name with more than 3 characters !!`;
        alert("Please Enter name with more than 3 characters !! ")  
        // isse screen pe dialogue box ayega. 
    }
}