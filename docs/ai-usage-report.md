# AI Usage Report

## Overview
For Assignment 2, I utilized AI (Gemini) as a pair-programming assistant to implement interactivity, enhance my UI/UX with modern CSS, and ensure my HTML structure met strict accessibility standards.

## Tools Used
* **Gemini:** Used for JavaScript logic generation, CSS architecture suggestions, and code review/refinement.

## Specific Implementations & Modifications

### 1. Persistent Theme Toggle (`localStorage`)
* **Prompt/Intent:** I needed to build a dark mode toggle that saves the user's preference across browser sessions.
* **AI Assistance:** The AI provided the core logic for the Web Storage API (`localStorage.setItem` and `getItem`) and suggested using CSS Custom Properties (`:root` variables) for cleaner theme switching.
* **My Modifications:** I edited the AI's output to match my specific color palette. I also customized the JavaScript to target my exact DOM IDs (`#theme-toggle` and `#theme-icon`) and update the moon/sun emojis dynamically.

### 2. Client-Side Form Validation & Accessibility
* **Prompt/Intent:** I wanted to provide clear, custom user feedback when the contact form is submitted, and ensure the form was structurally sound.
* **AI Assistance:** The AI initially suggested a basic browser `alert()` for form submission. It also helped me review my HTML structure.
* **My Modifications:** I rejected the `alert()` suggestion as it provides poor UX. Instead, I prompted the AI to help me write a DOM-manipulation script that creates a specific, styled `<p>` tag (success or error message) that appears below the form and automatically disappears after 4 seconds. I also manually added `<label>` tags with `for` attributes to my inputs to improve form accessibility and maintainability.

## Benefits of AI Use
* **Rapid Prototyping:** AI significantly sped up writing boilerplate JavaScript, such as setting up event listeners and Date/Time logic for the dynamic greeting.
* **Discovering Best Practices:** The AI introduced me to using CSS variables for theme management, making the codebase much more scalable than writing individual dark-mode classes for every single element.

## Challenges & Learning
* **Context Loss:** Initially, the AI generated generic code that didn't match my HTML structure. I had to learn how to prompt more effectively, providing my exact class names so the generated JavaScript would integrate properly.
* **UX/UI Refinement:** I realized AI often suggests the *easiest* technical solution (like an `alert()`), not the *best* user experience. I had to actively challenge the AI's output and write custom logic to ensure the portfolio met modern web standards.