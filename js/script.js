const html = document.documentElement;
const btn = document.getElementById("themeBtn");
const header = document.getElementById("header");
const main = document.getElementById("main");
const checkoutBtn = document.getElementById("checkoutBtn");
const cards = document.querySelectorAll(".card");

btn.addEventListener("click", () => {

    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
        btn.textContent = "Light mode";

        header.classList.replace("bg-white","bg-[#111111]");
        main.classList.replace("bg-[#F3F4F6]","bg-[#090909]");

        btn.classList.replace("bg-[#F3F4F6]","bg-[#1A1A1A]");
        btn.classList.replace("text-[#4B5563]","text-gray-300");
        btn.classList.replace("border-[#E5E7EB]","border-[#2A2A2A]");

        cards.forEach(card => {
            card.classList.replace("bg-white","bg-[#111111]");
            card.classList.replace("border-gray-200","border-[#222222]");
        });

        checkoutBtn.classList.replace("bg-[#111827]","bg-white");
        checkoutBtn.classList.replace("text-white","text-black");

    } else {

        btn.textContent = "Dark mode";

        header.classList.replace("bg-[#111111]","bg-white");
        main.classList.replace("bg-[#090909]","bg-[#F3F4F6]");

        btn.classList.replace("bg-[#1A1A1A]","bg-[#F3F4F6]");
        btn.classList.replace("text-gray-300","text-[#4B5563]");
        btn.classList.replace("border-[#2A2A2A]","border-[#E5E7EB]");

        cards.forEach(card => {
            card.classList.replace("bg-[#111111]","bg-white");
            card.classList.replace("border-[#222222]","border-gray-200");
        });

        checkoutBtn.classList.replace("bg-white","bg-[#111827]");
        checkoutBtn.classList.replace("text-black","text-white");
    }
});