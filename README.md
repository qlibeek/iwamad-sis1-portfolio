# Alibek Burakhanov — Portfolio

Live Pages URL: https://qlibeek.github.io/iwamad-sis1-portfolio/

Repository: https://github.com/qlibeek/iwamad-sis1-portfolio

## About the site

This is my personal portfolio as an ITM student learning web development.
It includes an introduction, three projects from my IWAMAD practice and a contact form that validates input without sending anything.
I built this page with HTML, CSS and vanilla JavaScript, including a light/dark theme and a layout that changes for smaller screens.

## Three design decisions

1. I chose a dark background with a warm orange accent because I liked the contrast in my reference design, and I used the same accent for important links and buttons.
2. I kept the mobile layout in one column so the project descriptions and contact form stay easy to read, while the desktop layout uses more space with columns.
3. I defined my colours, type sizes and spacing in CSS variables so the page feels consistent and the light theme can change the whole interface.

## Run locally

Open `index.html` in a browser. There is no build step and no dependency installation.

## Contact form and accessibility

The form uses custom JavaScript validation with different messages for an empty name, email or message and for an invalid email format.
Nothing is sent or stored. Labels, error descriptions, keyboard focus styles, a skip link and live status messages help make the page accessible.

## Publishing

The Pages URL above becomes available after this new repository is pushed and GitHub Pages is enabled from **main → / (root)**.
Before submission, open the live URL in a private browser window and check all three sections, the theme toggle and form validation.

See `SETUP_RU.md` for the quick publishing steps.
