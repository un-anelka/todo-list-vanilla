console.log(12345
    )

const class3=document.querySelector('.class3')
const class2=document.querySelector('.class2')
const daynight=document.querySelector('.class1 img')
daynight.addEventListener('click', toogleclasses=>{
    
    daynight.classList.toggle("classes")
    console.log("Hello World")
    class2.classList.toggle("classes2")
    class3.classList.toggle("classes3")
})