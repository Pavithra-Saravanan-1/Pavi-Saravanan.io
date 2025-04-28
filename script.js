// Function to toggle navigation menu visibility
function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('visible');
}

// Function to filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Function to validate contact form
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;
    if (!name) {
        valid = false;
        alert('Name field is required!');
    }
    if (!email || !email.includes('@')) {
        valid = false;
        alert('Please enter a valid email address!');
    }
    if (!message) {
        valid = false;
        alert('Message field is required!');
    }

    if (valid) {
        alert('Form submitted successfully!');
        document.querySelector('form').submit();
    }
}

// Add event listener to form submission
document.querySelector('form').addEventListener('submit', validateForm);
