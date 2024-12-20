/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Nafees Nori Nastaleeq', cursive, Arial, sans-serif;
    background-color: #f4f7fa;
    color: #333;
    line-height: 1.6;
}

/* Global Color Scheme */
:root {
    --primary-color: #2c3e50;
    --secondary-color: #f39c12;
    --accent-color: #2980b9;
    --background-color: #ecf0f1;
    --white-color: #fff;
    --dark-color: #34495e;
}

/* Hamburger Menu */
.hamburger {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    margin: 20px;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 100;
}

.hamburger div {
    background-color: var(--white-color);
    height: 5px;
    width: 100%;
    border-radius: 5px;
    transition: transform 0.3s ease;
}

/* Navigation Bar */
nav {
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--primary-color);
    width: 250px;
    height: 100%;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 50;
}

nav.open {
    transform: translateX(0);
}

nav ul {
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

nav ul li a {
    color: var(--white-color);
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: var(--secondary-color);
}

/* Social Media Icons */
.social-media {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 10px;
}

.social-media a {
    color: var(--white-color);
    text-decoration: none;
    font-size: 18px;
}

.social-media a:hover {
    color: var(--secondary-color);
}

/* Overlay effect when menu is open */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    transition: opacity 0.3s ease;
    z-index: 40;
}

.overlay.open {
    display: block;
}

/* Welcome Section */
.welcome-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('your-background-image.jpg'); 
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    opacity: 1;
    transition: opacity 1s ease-in-out;
}

.welcome-text {
    text-align: center;
    color: var(--white-color);
    font-size: 2.5rem;
    font-weight: bold;
}

.quote {
    font-style: italic;
    color: var(--secondary-color);
    font-size: 1.2rem;
}

/* Popup Styling */
.popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--white-color);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    z-index: 100;
    width: 60%;
    text-align: center;
}

.popup.active {
    display: block;
}

.popup button {
    background-color: var(--primary-color);
    color: var(--white-color);
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.popup button:hover {
    background-color: var(--secondary-color);
}

/* Close Button for Welcome Screen */
.welcome-close-btn {
    background-color: var(--secondary-color);
    color: var(--dark-color);
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    position: absolute;
    bottom: 20px;
    transition: background-color 0.3s;
}

.welcome-close-btn:hover {
    background-color: #e67e22;
}

/* Home Section */
.home-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 20px;
    background: linear-gradient(145deg, #5b5ea6, #ff6a00);
    color: var(--white-color);
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.home-section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.home-section p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.home-section:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Poetry Card Styling */
.poetry-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 40px;
    justify-content: center;
    animation: fadeIn 1s ease-out;
}

.poetry-card {
    background-color: var(--white-color);
    border-radius: 15px;
    padding: 20px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.poetry-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.poetry-card h3 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: var(--primary-color);
}

.poetry-card p {
    font-size: 1.1rem;
    color: var(--dark-color);
    font-style: italic;
}

/* Fade-in Animation */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Footer */
footer {
    background-color: var(--primary-color);
    color: var(--white-color);
    text-align: center;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
    font-size: 14px;
}

footer a {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: bold;
}

footer a:hover {
    color: var(--accent-color);
}
