var content_comment = document.querySelector('.content_comment')
var textarea = document.querySelector('.content_comment textarea')
var send = document.querySelector('.send')
var imgUser = document.querySelector('.img_user img')
var current_comment = document.querySelector('.current_comment')
var main = document.querySelector('.main')
var show = document.querySelector('.show')
var pop_react = document.querySelector('.pop_react')







// // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // 

let arrPostImg = [
    './assets/post/1.png',
    './assets/post/2.png',
    // './assets/post/3.jpg',
    // './assets/post/4.jpg',
    './assets/post/5.jpg',
    './assets/post/6.jpg',
    // './assets/post/7.gif',
]

for (let i = 0; i < arrPostImg.length; i++) {

    if(arrPostImg.length ==1){
        main.innerHTML +=
        `<div class="img1">
            <div class="img">
                <img src="${arrPostImg[0]}" class="full_img">
            </div>
        </div>
        `
        break;  
    }

    if(arrPostImg.length ==2){
        main.innerHTML +=
        `<div class="img2">
            <div class="img">
                <img src="${arrPostImg[0]}" class="full_img">
            </div>
            <div class="img">
                <img src="${arrPostImg[1]}" class="full_img">
            </div>
        </div>
        `
    break;
    }

    if(arrPostImg.length ==3){
        main.innerHTML +=
        `<div class="img3">
            <div class="img">
                <img src="${arrPostImg[0]}" class="full_img">
                <img src="${arrPostImg[2]}" class="full_img">
            </div>
            <div class="img third">
                <img src="${arrPostImg[1]}" class="full_img">
            </div>
        </div>
        `
        break;
    }

    if(arrPostImg.length ==4){
        main.innerHTML +=
        `<div class="img4">
            <div class="img">
                <img src="${arrPostImg[0]}" class="full_img">
            </div>
            <div class="img">
                <img src="${arrPostImg[1]}" class="full_img">
            </div>
            <div class="img">
                <img src="${arrPostImg[2]}" class="full_img">
                </div>
            <div class="img">
                <img src="${arrPostImg[3]}" class="full_img">
            </div>
        </div>
        `
        break;
    }
    
    if(arrPostImg.length >4){
        main.innerHTML +=
        `<div class="img5">
            <div class="img">
                <img src="${arrPostImg[0]}" class="full_img">
            </div>
            <div class="img">
                <img src="${arrPostImg[1]}" class="full_img">
            </div>
            <div class="img">
                <img src="${arrPostImg[2]}" class="full_img">
                </div>
            <div class="img imglast">
                <img src="${arrPostImg[3]}" class="full_img">
                <span>+${arrPostImg.length}</span>
            </div>
        </div>
        `
        break;
    }

}


var arrow_left = document.querySelector('.arrow_left')
var arrow_right = document.querySelector('.arrow_right')

var show_img = document.querySelector('.show_img')
var close_pop = document.querySelector('.close_pop')

var mainImg = document.querySelectorAll('.full_img')
var slideImg = document.querySelector('.slide_img')
var sizeImg = document.querySelector('.show_img .img')

var slideArr = []
var imgNow = ``
mainImg.forEach(img=>{
img.addEventListener('click',()=>{
    show_img.classList.add("active")

     slideImg.src =  img.src

    for (let s = 0; s < mainImg.length; s++) {
        slideArr.push(mainImg[s].src)
        if(slideImg.src === mainImg[s].src){
            imgNow = s
        }
        //  reSize( mainImg[s].src)
    }
    console.log(  slideArr ) 

})})


arrow_right.addEventListener('click',()=>{

    slideImg.src =  slideArr[imgNow+1]
    imgNow++


})


arrow_left.addEventListener('click',()=>{
    slideImg.src =  slideArr[imgNow-1]
    imgNow--
})




// function reSize(index){
//     let myimg = new Image()
//     myimg.onload = function(){
//         let height = myimg.height
//         let width = myimg.width
//         console.log(height+"*"+width)
//     }

//     myimg.src = index

// }


close_pop.onclick=()=>{
    show_img.classList.remove("active")
 slideArr = []

}





























































// // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // 



show.addEventListener('mouseover', ()=>{
    pop_react.classList.add('active')
})
show.addEventListener('mouseout', ()=>{
    pop_react.classList.remove('active')
})
pop_react.addEventListener('mouseover', ()=>{
    pop_react.classList.add('active')
})
pop_react.addEventListener('mouseout', ()=>{
    pop_react.classList.remove('active')
})






// // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // 
var hegitEnter = 0
var heightLength = 0
let height = 0

content_comment.addEventListener('keyup',(event)=>{
    let msgVal = textarea.value

    if (event.keyCode === 13) {
        hegitEnter += 15
    }
    if(msgVal.length < 50){
        heightLength = 30
    }
    if(msgVal.length > 50){
        content_comment.style.height = "50px"
        heightLength = 50
    }
    if(msgVal.length > 120){
        content_comment.style.height = "70px"
        heightLength = 60

    }
    if(msgVal.length > 200){
        content_comment.style.height = "90px"
        heightLength = 80
    }
    if(msgVal.length > 280){
        content_comment.style.height = "110px"
        heightLength = 110
    }
    if(msgVal.length > 350){
        content_comment.style.height = "130px"
        heightLength = 130
    }
    if(msgVal.length > 420){
        content_comment.style.height = "150px"
        heightLength = 150
    }
    if(msgVal.length > 490){
        content_comment.style.height = "170px"
        heightLength = 170
    }

    if(msgVal.length > 560){
        content_comment.style.height = "190px"
        content_comment.style.overflow = "auto"
        heightLength = 190
    }else{
        content_comment.style.overflow = "hidden"
    }

    if(msgVal.length == 0){
        content_comment.style.height = "30px"
    }

height = hegitEnter+heightLength
})

var index = 0
send.addEventListener('click',()=>{
    let getImg =  imgUser.src
    let getMsg =  textarea.value
  
    if(getMsg !==''){
        current_comment.innerHTML += `
            <div class="comment_add">
                <div class="img_user">
                    <img src="${getImg}" class="full_img">
                </div>
                <div class="msg_others">
                    <textarea disabled>${getMsg}</textarea>
                </div>
                <div class="more_option">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </div>
            </div>
        `
            textarea.value = ''
            content_comment.style.overflow = "hidden"
            content_comment.style.height = "40px"
            getSize(height)    

    }else{
        alert("enter your comment")
    }
})

function getSize(height){
var msg_others = document.querySelectorAll(`.comment_add .msg_others textarea`)[index]
    msg_others.style.height = height + "px"
    // msg_others.style.height += "40px"
    msg_others.style.overflow = "hidden"
    index++
     hegitEnter = 0
     heightLength = 0
     height = 0
}