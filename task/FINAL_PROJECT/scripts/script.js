
const menuIcon = document.getElementById("burger-icon");
const nav = document.getElementById("nav");

const logoClick = document.getElementById("logo")
logoClick.addEventListener("click", function() {
    alert("Welcome to Edex")
})




const bUp = document.getElementById("button-up")
bUp.addEventListener("click", function() {
    window.scrollTo(0, 0)
})






// КАРУСЕЛЬ COURSES 
let offeset = 0; //зміщення від лівого края по дефолту//
const sliderLine= document.querySelector(".courses-slider")

document.querySelector(".courses-next").addEventListener("click", function() {
    offeset = offeset + 335;//ширина картинки//
    if (offeset > 670) {
        offeset = 0;
    }
    sliderLine.style.left = -offeset + "px";
    
    
})
document.querySelector(".courses-prev").addEventListener("click", function() {
    offeset = offeset - 335;//ширина картинки//
    if (offeset < 0) {
        offeset = 670;
    }
    sliderLine.style.left = -offeset + "px";
    
})














function handleClick() {
    menuIcon.classList.toggle('active');
    nav.classList.toggle('active');
}

menuIcon.addEventListener("click", handleClick);



async function getResponse() {
    let response = await fetch("https://sashafedirko.github.io/itca/server.json")    //response - відповідати
    let content = await response.json()
   
    
    ourCategorys(content) //виводимо нашу функцію і додаємо аргумент джейсона
    ourCourses(content)

}
//Крок 2 - створення div в баді

const myId = document.getElementById("categories-group")
const courseId = document.getElementById("course-wrapper")


//Крок 3 - перебрати масив з джейсона
function ourCategorys(obj) {
    const Category = obj.categorys

    for(const block of Category) {
        const categoryBlock = document.createElement("div")
        categoryBlock.classList.add("category-block")

        const iconTitle = document.createElement("div")
        iconTitle.classList.add("category-icon")
        

        
        
        const myImages = document.createElement("img") 
        const myP = document.createElement("figcaption")
        const myLogo = document.createElement("img")
        

        myImages.src = block.images 
        myP.textContent = block.title
        myLogo.src = block.logo

        iconTitle.appendChild(myImages)
        iconTitle.appendChild(myP)
        

        categoryBlock.appendChild(iconTitle)
        categoryBlock.appendChild(myLogo)

        

        


        myId.appendChild(categoryBlock)
        
        
    }
}
function ourCourses(object) {
    const courses = object.courses
    

    for(const courseBlock of courses) {
        const mainCoursesBlock = document.createElement("div")
        mainCoursesBlock.classList.add("course-block")

        const priceBlock = document.createElement("div")
        priceBlock.classList.add("price")



        const courseMainImg = document.createElement("img")
        const courseTitle = document.createElement("p") 
        const Comment = document.createElement("p")
        const coursePrice = document.createElement("p")
        const courseLogo = document.createElement("img")
        const courseDirection = document.createElement("p")
        
    



        courseMainImg.src = courseBlock.images
        courseTitle.textContent = courseBlock.title
        
        Comment.textContent = courseBlock.titleComment
        coursePrice.textContent = courseBlock.price
        courseLogo.src = courseBlock.cLogo
        courseDirection.textContent = courseBlock.direction
        courseDirection.classList.add("direction")


    

        mainCoursesBlock.appendChild(courseMainImg)
        mainCoursesBlock.appendChild(courseTitle)
       
        mainCoursesBlock.appendChild(priceBlock)
        mainCoursesBlock.appendChild(courseDirection)

        priceBlock.appendChild(coursePrice)
        priceBlock.appendChild(courseLogo)







        courseId.appendChild(mainCoursesBlock)


       
        





    }
}

//Зірочки




getResponse()

    





