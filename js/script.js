var menu = document.getElementById("menuToggler");
var nav__links = document.getElementById("nav__links");

menu.addEventListener("click", function () {
    if (nav__links.classList.contains("active__navLinks")) {
        nav__links.classList.remove("active__navLinks");
    } else {
        nav__links.classList.add("active__navLinks");
    }
});





















                                             //   payment and appointment js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission behavior
    
    // Get form data
    const appointmentType = document.querySelector('select[name="appointmentType"]').value;
    const serviceType = document.querySelector('select[name="serviceType"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const time = document.querySelector('input[name="time"]').value;
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mobile = document.querySelector('input[name="mobile"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const additionalInfo = document.querySelector('textarea[name="additionalInfo"]').value;

    // Get the selected payment method
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Construct the message
    let message = `*Appointment Details:*\n`;
    message += `Appointment Type: ${appointmentType}\n`;
    message += `Service Type: ${serviceType}\n`;
    message += `Date: ${date}\n`;
    message += `Time: ${time}\n\n`;
    message += `*Personal Details:*\n`;
    message += `Name: ${firstName} ${lastName}\n`;
    message += `Email: ${email}\n`;
    message += `Mobile: ${mobile}\n`;
    message += `Age: ${age}\n\n`;
    message += `*Additional Info:*\n${additionalInfo}\n\n`;
    message += `*Payment Method:*\n${paymentMethod}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);

    // Replace with your WhatsApp number (include country code without +)
    const whatsappNumber = "+923006302137"; // Replace with your WhatsApp number

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappURL, '_blank');
});
                                           //   payment and appointment js ends Here














                                               //   contact us  js Here

                                           function sendToWhatsApp() {
                                            // Replace with your WhatsApp number
                                            const phoneNumber = "+923006302137"; 
                                            
                                            // Get user input values
                                            const name = document.getElementById("name").value;
                                            const email = document.getElementById("email").value;
                                            const phone = document.getElementById("phone").value;
                                            const service = document.getElementById("service").value;
                                            const message = document.getElementById("message").value;
                                            
                                            // Validate inputs
                                            if (!name || !email || !phone || !service || !message) {
                                                alert("Please fill out all fields.");
                                                return;
                                            }
                                        
                                            // Construct WhatsApp message
                                            const whatsappMessage = `Hello!%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
                                            
                                            // Redirect to WhatsApp
                                            const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
                                            window.location.href = whatsappURL;
                                        }
                                                         //   contact us  js ends Here  
