//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops
const img =document.querySelectorAll("img");
img.forEach((image, index) => {
    if (index % 2 === 0) {
      image.style.border = '2px solid red'; // Even index, red border
    } else {
      image.style.border = '2px solid blue'; // Odd index, blue border
    }
  });