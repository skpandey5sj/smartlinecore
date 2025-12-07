// --- AOS animations ---
AOS.init({ once: false, duration: 800, easing: 'ease-out-cubic' });



// // --- Theme Toggle ---
// const themeToggle = document.getElementById('themeToggle');
// const userTheme = localStorage.getItem('site-theme');
// if (userTheme === 'dark') document.documentElement.classList.add('dark');

// themeToggle?.addEventListener('click', () => {
//   const isDark = document.documentElement.classList.toggle('dark');
//   localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
// });



// Buttons
const themeBtnDesktop = document.getElementById("themeToggle");
const themeBtnMobile = document.getElementById("mobileDarkToggle");

// Toggle Function
function toggleTheme() {
  document.documentElement.classList.toggle("dark");

  // Save theme mode
  const mode = document.documentElement.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);

  // Update Icons (Desktop)
  const moonIcon = document.getElementById("moonIcon");
  if (moonIcon) {
    moonIcon.style.transform = mode === "dark" ? "rotate(180deg)" : "rotate(0deg)";
  }

  // Update Icons (Mobile)
  const mobileMoonIcon = document.getElementById("mobileMoonIcon");
  if (mobileMoonIcon) {
    mobileMoonIcon.style.transform = mode === "dark" ? "rotate(180deg)" : "rotate(0deg)";
  }
}

// Attach Events
themeBtnDesktop?.addEventListener("click", toggleTheme);
themeBtnMobile?.addEventListener("click", toggleTheme);

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}





// --- Mobile Menu Toggle ---
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMobileMenu');

mobileMenuBtn?.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  setTimeout(() => {
    mobileMenu.classList.remove('-translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    document.body.style.overflow = "hidden"; //
  }, 10);
});

closeMenu?.addEventListener('click', () => {
  mobileMenu.classList.add('-translate-x-full');
  mobileMenu.classList.remove('translate-x-0');
  document.body.style.overflow = ""; // Unlock scroll
  setTimeout(() => {
    mobileMenu.classList.add('hidden');
  }, 300);
});



// MOBILE DROPDOWNS ACCORDION
document.querySelectorAll(".mobile-dd-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const box = btn.nextElementSibling;
    const icon = btn.querySelector("svg");

    // Close other dropdowns
    document.querySelectorAll(".mobile-dd-box").forEach((b) => {
      if (b !== box) {
        b.style.maxHeight = "0px";
        b.previousElementSibling.querySelector("svg").style.transform = "rotate(0deg)";
      }
    });

    // Toggle current
    if (box.style.maxHeight === "0px" || box.style.maxHeight === "") {
      box.style.maxHeight = box.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    } else {
      box.style.maxHeight = "0px";
      icon.style.transform = "rotate(0deg)";
    }
  });
});



function callNow() {
  window.location.href = "tel:+15164178110";
}



// contact form 



 const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Stop page reload

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      successMessage.classList.remove("hidden");
      form.reset();

      // Hide message after 4 seconds
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 4000);
    } else {
      alert("Something went wrong! Please try again.");
    }
  });



  //  we work script

    const tilt = document.getElementById("tiltImage");

  tilt.addEventListener("mousemove", (e) => {
    const rect = tilt.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12; 
    const rotateY = ((x - centerX) / centerX) * 12; 

    tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  tilt.addEventListener("mouseleave", () => {
    tilt.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });




  // why schoose us 

  const tiltImg = document.getElementById("tiltWhyUs");

tiltImg.addEventListener("mousemove", (e) => {
  const rect = tiltImg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;

  tiltImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
});

tiltImg.addEventListener("mouseleave", () => {
  tiltImg.style.transform = "rotateX(0) rotateY(0) scale(1)";
});