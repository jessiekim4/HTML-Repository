/* A list which stores the class names of all slides */
let slideClass = ["lobcorp_slides", "lor_slides", "stardew_slides", "freezeria_slides"];
/* A list which stores the current index of their respective slide class in the above list. For example, slideIndex[0] shows the current
slide index of lobcorp_slides */
let slideIndex = [1, 1, 1, 1];

window.onload = main();

function main () {
    /* Loads the first slide of each slide class */
    showSlides(1, 0);
    showSlides(1, 1);
    showSlides(1, 2);
    showSlides(1, 3);
}

/* 
showSlides 

A function that shows the slide based on the slide class given and the image index for that slide class given.
For example: showSlides (1,1) shows the 1st slide of the lor_slides class.
*/
function showSlides (img_index, slide_class_index) {
    /* An index var for a for loop later */
    let i;

    // Gets the slides from the slideId using the slideid_index parameter
    var slides = document.getElementsByClassName(slideClass[slide_class_index]);
    // If the img_index parameter is is greater than the length of the slides, assigns it back to 1 (we use slide_class_index because that index also corresponds to its slide_index
    if (img_index > slides.length) {
        slideIndex[slide_class_index] = 1;
    }
    // If img_index is less then 1, assigns it to the length of the slides to move to the end of the slides
    if (img_index < 1) {
        slideIndex[slide_class_index] = slides.length;
    }
    
    /* Sets all images to not display */
    for (i = 0; i < slides.length; i ++) {
        slides[i].style.display = "none";  
    }

    // Have the slide at the index to display
    slides[slideIndex[slide_class_index] - 1].style.display = "block";  
}

/* 
plusSlide

A function that increases/decreases the current slide's index by add_img_index amount of times
*/
function plusSlide (add_img_index, slide_class_index) {
    // Increase the index in the slideIndex[slide_class_index] using the add_img_index parameter
    slideIndex[slide_class_index] += add_img_index;
    
    // Call showSlides on the slide's new image index and the slide_class_index itself
    showSlides(slideIndex[slide_class_index], slide_class_index);
}
