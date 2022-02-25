

console.log("hello");

const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener ("click", () => {
        hamburger.classList.remove("active");
       navMenu. classList.remove("active");}))


       const submitGo=document.querySelector('.submitgo');

       submitGo.addEventListener('click',()=>{
        var pickup = document.getElementById('pickup').value;  
           alert(`thnx for searching! we'll update you soon-- Your Pickup Address is: ${pickup} `);
            
       })


function save(p1, p2) {
    alert("oops! not designed yet");
  }

const footerSubmit=document.querySelector('.footersubmit');

footerSubmit.addEventListener('click',()=>{
    alert("you're now added to weekly email list");
})

