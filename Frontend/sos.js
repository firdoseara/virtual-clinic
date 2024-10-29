function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

document.getElementById("start-consultation").addEventListener("click", function() {
    alert("Starting the consultation...");
});
