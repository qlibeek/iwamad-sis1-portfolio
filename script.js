const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const themeIcon = document.getElementById('theme-icon');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isLight = theme === 'light';
  themeLabel.textContent = isLight ? 'Dark mode' : 'Light mode';
  themeIcon.textContent = isLight ? '☾' : '☀';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  themeToggle.setAttribute('aria-pressed', String(isLight));
}

let savedTheme = 'dark';
try {
  const stored = localStorage.getItem('portfolio-theme');
  if (stored === 'light' || stored === 'dark') savedTheme = stored;
} catch {
  // Keep the default theme if storage is unavailable.
}
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  try {
    localStorage.setItem('portfolio-theme', nextTheme);
  } catch {
   
  }
});


const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const fields = ['name', 'email', 'message'];

function validateField(fieldId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(`${fieldId}-error`);
  const value = field.value.trim();
  let errorMessage = '';

  if (value === '') {
    const emptyMessages = {
      name: 'Please enter your name.',
      email: 'Please enter your email address.',
      message: 'Please write a message.'
    };
    errorMessage = emptyMessages[fieldId];
  } else if (fieldId === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errorMessage = 'Please enter a valid email address, such as name@example.com.';
  }

  error.textContent = errorMessage;
  field.setAttribute('aria-invalid', String(errorMessage !== ''));
  return errorMessage === '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // This demo never sends a network request.
  formStatus.textContent = '';
  let firstInvalidField = null;

  fields.forEach((fieldId) => {
    if (!validateField(fieldId) && firstInvalidField === null) {
      firstInvalidField = document.getElementById(fieldId);
    }
  });

  if (firstInvalidField) {
    firstInvalidField.focus();
    return;
  }

  const name = document.getElementById('name').value.trim();
  formStatus.textContent = `Thanks, ${name}! Your message passed validation. This is a demo, so nothing was sent.`;
  form.reset();
});

// After a failed submission, update an error as the user fixes that field.
fields.forEach((fieldId) => {
  const field = document.getElementById(fieldId);
  field.addEventListener('input', () => {
    formStatus.textContent = '';
    if (field.getAttribute('aria-invalid') === 'true') validateField(fieldId);
  });
});
