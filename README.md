# Aseel Bawazir - Personal Portfolio (Assignment 2)

## Project Description
An interactive, modern personal portfolio web application built to showcase my academic projects and technical skills as a Software Engineering student. This iteration introduces dynamic content, persistent data handling, smooth CSS animations, and custom user feedback.

## User Guide (How to Use)
This portfolio includes several interactive features designed for a seamless user experience:
1. **Dynamic Greeting:** The main header will automatically update to say "Good Morning," "Good Afternoon," or "Good Evening" based on your local time.
2. **Dark/Light Mode:** Click the Moon/Sun icon in the navigation bar to toggle themes. Your preference is saved to your browser, so if you refresh or return to the page later, your chosen theme will persist.
3. **Interactive Project Cards:** Hover over the project cards (e.g., Program Testing & Coverage, Event Management System) to see a smooth elevation and shadow animation.
4. **Form Error Handling:** Try submitting the Contact form with fewer than 10 characters in the message box to see the custom red error feedback. Enter a valid, longer message to see the animated green success confirmation.

## Setup Instructions
To run this project locally on your machine:
1. Clone the repository to your local machine:
   `git clone https://github.com/your-username/your-id-aseelbawazir-assignment2.git`
2. Navigate into the project folder:
   `cd your-id-aseelbawazir-assignment2`
3. Open the `index.html` file in your preferred web browser. 
   *Note: For the best development experience, open the folder in VS Code and use the "Live Server" extension.*

## Technical Details
* **Frontend Technologies:** HTML5, CSS3, Vanilla JavaScript (ES6).
* **Styling Architecture:** Utilizes CSS Custom Properties (`:root` variables) for scalable theme management, ensuring maintainable code.
* **Data Handling:** Implements the Web Storage API (`localStorage`) to persist user UI preferences across browser sessions without needing a backend database.
* **DOM Manipulation:** Uses standard DOM methods (`getElementById`, `createElement`, `appendChild`) to dynamically generate and remove user feedback messages on the client side, preventing full page reloads via `e.preventDefault()`.
* **Accessibility:** Form inputs are explicitly linked to `<label>` elements to ensure proper semantic structure and maintainability.

## AI Usage Summary
AI tools (Gemini) were utilized as a pair-programming assistant to help structure JavaScript logic, design CSS variable architecture, and debug client-side form validation. A detailed breakdown of the tools used, the prompts provided, and the specific edits made to the AI's output (including challenges and benefits) can be found in `docs/ai-usage-report.md`.

