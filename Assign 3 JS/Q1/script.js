const sliderDiv = document.getElementById("slider");

const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

const adder = async () => {
  const response = await fetch("data.json");
  const slidesData = await response.json(); // slidesData = [slideData1 ,slideData2, slideData3, slideData4  ]

  
  // ab slidedata mai map krenge aur forEach image ek div element banayenge
  slidesData.forEach((slideData, index) => {
    const slide = document.createElement("div");        // create a div
    slide.classList.add('slide')

    if (index === 0) {            // ab agar toh woh slide is pehli ( by looking at the index ).. toh usko active class mai dalege/
      slide.classList.add('active');
    }
    
    // ab uss div mai image aani chahiye
    const image = document.createElement("img");
    image.src = slideData.url;
    image.alt = slideData.name;

    console.log("Adding image:", image.src);

    slide.appendChild(image);        // image ko display krenge uss div element mai
    sliderDiv.appendChild(slide);
    });
    
};

// noow i want this adder function to get invokes when the DOM cokntent loads
//uske liye ek event Listerner hoga jo DOMCONTENTLOAD event pe adder ko invoke krega

document.addEventListener("DOMContentLoaded", adder);

const mover = (event) => {
  const activeSlide = document.querySelector(".active");
  let newSlide;

  // ab jo event hua uski class is next toh
  if (event.target.classList.contains("next")) {
    console.log(activeSlide)
    newSlide = activeSlide.nextElementSibling;
    if (!newSlide) {
      newSlide = sliderDiv.firstElementChild;
    }
  }
  if (event.target.classList.contains("previous")) {
    newSlide = activeSlide.previousElementSibling;
    if (!newSlide) {
      newSlide = sliderDiv.lastElementChild;
    }
  }

  //remove the active class from the current slide
  activeSlide.classList.remove("active");

  // add the active class to newSlide
  newSlide.classList.add("active");
};

nextBtn.addEventListener("click", mover);
prevBtn.addEventListener("click", mover);
