function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the clicked section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}
function toggleForm(formType) {
        document.getElementById("loginForm").style.display = formType === "login" ? "block" : "none";
        document.getElementById("createAccountForm").style.display = formType === "create" ? "block" : "none";
    }

    // Handle login form submission
    function handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        if (username === "" || password === "") {
            alert("Please fill out both fields.");
        } else {
            alert(`Welcome back, ${username}!`);
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        }
        document.getElementById("loginForm").reset();
    }
    function handleCreateAccount(event) {
        event.preventDefault();
    
        const fullName = document.getElementById("fullName").value.trim();
        const age = document.getElementById("age").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const country = document.getElementById("country").value.trim();
        const region = document.getElementById("region").value.trim();
        const town = document.getElementById("town").value.trim();
        const healthProblem = document.getElementById("healthProblem").value.trim();
        const service = document.getElementById("service").value.trim();
        const birthDate = document.getElementById("birthDate").value.trim();
        const preferredTime = document.getElementById("time").value.trim();
        const email = document.getElementById("email").value.trim();
        const pass = document.getElementById("pass").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
    
        if (!fullName || !age || !phone || !country || !region || !town || !service || !birthDate || !preferredTime || !email || !pass || !confirmPassword) {
            alert("Please fill out all required fields.");
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format. Please enter a valid email address.");
            return;
        }
        if (pass.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        if (pass !== confirmPassword) {
            alert("Your passwords don't match. Please try again.");
            return;
        }
    
        alert(`Congratulations! Your account has been created for ${fullName}. Saved successfully!`);
        
        const confirmationMessage = `
            Your Confirmation Letter:
            
            Dear ${fullName},
            
            Thank you for registering with our clinical appointment service.
            
            Here are your details:
            
            1. Age: ${age}
            2. Phone: ${phone}
            3. Country: ${country}
            4. Region: ${region}
            5. Town: ${town}
            6. Health Problem: ${healthProblem || "Not Provided"}
            7. Service: ${service}
            8. Birth Date: ${birthDate}
            9. Preferred Time: ${preferredTime}
            10. Email: ${email}
            
            We look forward to serving you.
            
            Best Regards,
            The Clinical Appointment Team
        `;
    
        alert(confirmationMessage);
    
        // Reset the form after submission
        event.target.reset();
    }
    
    
    // Add this to your scripts.js file
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) { // Show the button after scrolling down 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    }

    // Function to scroll to the bottom of the page
    function scrollToBottom() {
        window.scrollTo({
           top: document.body.scrollHeight,
            behavior: 'smooth' // Smooth scrolling
        });
    }
 
   