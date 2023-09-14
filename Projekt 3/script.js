// Responsive nav

const menuIcon = document.querySelector(".hamburger")
const menuList = document.querySelector(".nav-menu")
const hamburgerIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark")
    hamburgerIcon.classList.remove("fa-bars")
    menuList.style.display = "block"
   
    } else {
    hamburgerIcon.classList.add("fa-bars")
    hamburgerIcon.classList.remove("fa-xmark")
    menuList.style.display = "none"
   
    }
    });
  
 


// Password matching

function passwordConfirmation(event) {
    event.preventDefault();

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var messageContainer = document.getElementById("message-container");

    if (password == "") {
        messageContainer.innerHTML = "Please fill in the password" ;
    } else if (password == confirmPassword) {
        messageContainer.innerHTML ="Registration successful!";
    } else {
        messageContainer.innerHTML = "Passwords don´t match!";
    }
    return false;
}

// Section scroll to top

function toggleScrollToTop() {
    var scrollToTop = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.display = "none";
    }
  }
  
 
  window.onscroll = function() {
    toggleScrollToTop();
  };
  
  
  document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  // dark mode


const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");


theme.href = "desktop.css"; 


function handleClick() {
  if (theme.getAttribute("href") === "dark-theme.css") {
    theme.href = "desktop.css"; 
  } else {
    theme.href = "dark-theme.css";
  }

  
}


btn.addEventListener("click", handleClick);







