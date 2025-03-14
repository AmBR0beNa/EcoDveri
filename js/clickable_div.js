document.querySelectorAll(".under_category").forEach(div => {
    div.addEventListener("click", () => {
        window.location.href = div.getAttribute("data-url");
    });
});