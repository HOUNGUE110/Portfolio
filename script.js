document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const messageContainer = document.getElementById('confirmationMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        messageContainer.textContent = "✅ Message reçu !.";
        
        messageContainer.style.color = "#00bcd4";
        messageContainer.style.fontWeight = "bold";

        setTimeout(() => {
            messageContainer.textContent = "";
            messageContainer.style.color = "";
            messageContainer.style.fontWeight = "";
        }, 3000);

        form.reset();
    });
});