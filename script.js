const closeBtn = document.querySelector(".close-btn");
const discountContainer = document.querySelector(".discount-container");

closeBtn.addEventListener("click", () => {
    discountContainer.style.display = "none";
    setCookie("discountClosed", "true", 24); // Store cookie to hide banner for 24 hours
});

const setCookie = (name, value, hours) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

// Set the target time (12 AM the next day)
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

const countdownDate = tomorrow.getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".days").textContent = days.toString().padStart(2, '0');
    document.querySelector(".hours").textContent = hours.toString().padStart(2, '0');
    document.querySelector(".minutes").textContent = minutes.toString().padStart(2, '0');
    document.querySelector(".seconds").textContent = seconds.toString().padStart(2, '0');
}, 1000);
