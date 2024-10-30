function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const isDropdownVisible = dropdownMenu.style.display === "block";

    // Toggle display of dropdown
    dropdownMenu.style.display = isDropdownVisible ? "none" : "block";

    // If the dropdown is now visible, add a listener to close it when clicking outside
    if (!isDropdownVisible) {
        document.addEventListener("click", closeDropdownOnClickOutside);
    }
}

function closeDropdownOnClickOutside(event) {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const menuButton = document.querySelector(".menu");

    // Check if the click is outside both the dropdown and the menu button
    if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
        dropdownMenu.style.display = "none";
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
}
