// Function to load HTML content into a specified element
function loadHTML(selector, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Function for page redirection
function redirectToPage(page) {
    window.location.href = page;
}

// Function to handle dropdown hover effect
function handleDropdownHover() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-menu').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-menu').style.display = 'none';
        });
    });
}


// Initialize Bootstrap dropdowns and tooltips
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('#navbar-placeholder', '/partials/navbar.ejs');
    loadHTML('#footer-placeholder', '/partials/footer.ejs');
    handleDropdownHover();
});
