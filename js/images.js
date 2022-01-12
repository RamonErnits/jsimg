//console.log("hello from script ");
const myButton =  document.querySelector('button');
const myImage = document.querySelector('.image');
const srcs = ['images/image1.jpg','images/image2.jpg','images/image3.jpg'];
//console.log(myButton)



let name ='Ramon Ernits';

console.log(`Hello, ${name} `)


myButton.addEventListener('click', changePic);
 
 var lastIndex = -1

function changePic() {
    let rnd = Math.floor(Math.random() * srcs.length);
    while (lastIndex === rnd){
        rnd = Math.floor(Math.random() * srcs.length);
    }
    lastIndex=rnd
    console.log(rnd);
    myImage.setAttribute('src', srcs[rnd])


}
