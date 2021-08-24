const burger = document.getElementsByClassName('burger')[0]
    const line1 = document.getElementsByClassName("line1")[0]
    const line2 = document.getElementsByClassName("line2")[0]
    const line3 = document.getElementsByClassName("line3")[0]
    const ul = document.getElementsByClassName('ul')[0]
    const lines = document.getElementsByClassName("line")
    const nav = document.getElementsByClassName("nav")[0]
    burger.addEventListener("click", ()=>{
        for (let i = 0; i < lines.length; i++) {
            const element = lines[i];
            element.classList.toggle("line_onClick")
        }
        line1.classList.toggle("line1_Class")
        line2.classList.toggle("line2_Class")
        line3.classList.toggle("line3_Class")
        ul.classList.toggle("ul_Class")
        nav.classList.toggle("nav_Class")
        burger.classList.toggle("burger_Class")
    })
    
    const links = document.getElementsByClassName("links")
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.addEventListener("click", () => {
            for (let i = 0; i < lines.length; i++) {
                const element = lines[i];
                element.classList.toggle("line_onClick")
            }
            line1.classList.toggle("line1_Class")
        line2.classList.toggle("line2_Class")
        line3.classList.toggle("line3_Class")
            ul.classList.toggle("ul_Class")
            nav.classList.toggle("nav_Class")
            burger.classList.toggle("burger_Class")
        })
    }

// window.addEventListener("scroll", () => {
//     if (window.pageYOffset >= 20) {
//         nav.classList.toggle("fixed_nav")
//     } 
// })



setInterval(() => {
    const active = document.getElementsByClassName("swiper-slide-active")[0]
    const data = active.getAttribute("data")
    const img = document.getElementsByClassName('truck_timeLine_img')[0]
    img.style.left = `${data}%`

    const label = document.getElementsByClassName("label")

    if(data == 0){label[0].style.opacity = "1" }else{label[0].style.opacity = "0"}
    if(data == 10){label[1].style.opacity = "1"}else{label[1].style.opacity = "0"}
    if(data == 20){label[2].style.opacity = "1"}else{label[2].style.opacity = "0"}
    if(data == 30){label[3].style.opacity = "1"}else{label[3].style.opacity = "0"}
    if(data == 40){label[4].style.opacity = "1"}else{label[4].style.opacity = "0"}
    if(data == 50){label[5].style.opacity = "1"}else{label[5].style.opacity = "0"}
    if(data == 60){label[6].style.opacity = "1"}else{label[6].style.opacity = "0"}
    if(data == 70){label[7].style.opacity = "1"}else{label[7].style.opacity = "0"}
    if(data == 80){label[8].style.opacity = "1"}else{label[8].style.opacity = "0"}
    if(data == 90){label[9].style.opacity = "1"}else{label[9].style.opacity = "0"}
    if(data == 100){label[10].style.opacity = "1"}else{label[10].style.opacity = "0"}
    
}, 500);




const navbar = document.getElementsByClassName("nav")[0]
const home = document.getElementsByClassName("home")[0]

const NavTop = 100;

function fixnavbar(){
  if(window.scrollY >= NavTop){
      navbar.classList.add("fixed-nav");
}else {
    navbar.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixnavbar);


function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current + "+";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

 




animateValue("value1", 0, 25, 2000);
animateValue("value2", 0, 340, 2000);
animateValue("value3", 11500, 12000, 10); 

const fetchData = (state) =>{
    console.log(state)
    const slides = document.getElementsByClassName('mySwiper2')
    const activeMenu = document.getElementsByClassName('active_menu')
    for (let i = 0; i < slides.length; i++) {
      const e = slides[i];
      e.classList.add("d_none")
    }
    for (let i = 0; i < activeMenu.length; i++) {
      const e2 = activeMenu[i];
      e2.classList.add("d_none2")
    }
    const target = document.getElementsByClassName(state)[0]
    const targetHeading = document.getElementById(state)
    console.log(target)
    target.classList.remove("d_none")
    targetHeading.classList.remove("d_none2")
    
  } 