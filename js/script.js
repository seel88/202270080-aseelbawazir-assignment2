document.addEventListener('DOMContentLoaded', () => {
    const greetingEl = document.getElementById('greeting');
    const hour = new Date().getHours();
    let text = (hour < 12) ? "Good Morning" : (hour < 18) ? "Good Afternoon" : "Good Evening";
    
    if (greetingEl) {
        greetingEl.textContent = `${text}, I'm Aseel Bawazir`;
    }

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        themeIcon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = form.querySelector('input[type="text"]').value.trim();
            const emailInput = form.querySelector('input[type="email"]').value.trim();
            const messageInput = form.querySelector('textarea').value.trim();
            
            let existingFeedback = document.getElementById('form-feedback-msg');
            if (existingFeedback) existingFeedback.remove();

            const feedbackMsg = document.createElement('p');
            feedbackMsg.id = 'form-feedback-msg';
            feedbackMsg.style.marginTop = "1rem";
            feedbackMsg.style.fontWeight = "bold";
            feedbackMsg.style.animation = "slideDownFade 0.4s ease forwards"; 

            if (messageInput.length < 10) {
                feedbackMsg.textContent = "Oops! Your message is too short. Please add a few more details (at least 10 characters).";
                feedbackMsg.style.color = "#dc3545";
            } else {
                feedbackMsg.textContent = "Success! Thanks for reaching out. Your message has been sent.";
                feedbackMsg.style.color = "#28a745";
                form.reset();
            }

            form.appendChild(feedbackMsg);
            
            setTimeout(() => {
                if (feedbackMsg.parentElement) {
                    feedbackMsg.remove();
                }
            }, 4000);
        });
    }
});