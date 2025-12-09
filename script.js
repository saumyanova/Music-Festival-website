/*1. LIVE DATE & TIME */
function updateDateTime() {
  const now = new Date();
  document.getElementById("dateTime").innerText =
    now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();


/*2. FAQ Toggle */
const faqs = document.querySelectorAll('.faq-q');
faqs.forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === 'block' ? 'none' : 'block';
  });
});

/*navigation holder*/
const navItems = document.querySelectorAll("nav ul li a");

navItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.color = "#ff007f";
    item.style.transform = "scale(1.1)";
  });

  item.addEventListener("mouseout", () => {
    item.style.color = "";
    item.style.transform = "scale(1)";
  });

  item.addEventListener("click", () => {
    alert("Navigating to " + item.innerText + " page!");
  });
});


/*4. WINDOW RESIZE EVENT*/
window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    document.body.style.background = "#fff3fa";
  } else {
    document.body.style.background = "white";
  }
});


/*5. FORM SUBMISSION + VALIDATION */
document.getElementById("ticketForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const qty = document.getElementById("tickets").value;

  const resultBox = document.getElementById("formResult");

  if (name === "" || email === "" || qty === "") {
    alert("❌ Please fill in all fields!");
    fadeMessage(resultBox, "❌ Error: Fields cannot be empty!");
    return;
  }

  const submittedData = `
      Name: ${name}  
      Email: ${email}  
      Number of Tickets: ${qty}
  `;

  fadeMessage(resultBox, `🎉 Ticket Booked Successfully! 🎟️\n${submittedData}`);
});


/*6. RESET FORM*/
document.getElementById("resetBtn")?.addEventListener("click", () => {
  document.getElementById("ticketForm").reset();
  document.getElementById("formResult").innerText = "";
});


/*7. IMAGE SLIDER / CAROUSEL*/
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".slide");

  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500);
}
showSlides();


/*8. FADE IN / OUT NOTIFICATION*/
function fadeMessage(element, message) {
  element.style.opacity = 0;
  element.innerText = message;

  // Fade in
  let fadeIn = setInterval(() => {
    if (element.style.opacity < 1) {
      element.style.opacity = parseFloat(element.style.opacity) + 0.1;
    } else clearInterval(fadeIn);
  }, 50);

  // Fade out after 3 seconds
  setTimeout(() => {
    let fadeOut = setInterval(() => {
      if (element.style.opacity > 0) {
        element.style.opacity = parseFloat(element.style.opacity) - 0.1;
      } else clearInterval(fadeOut);
    }, 50);
  }, 3000);
}
