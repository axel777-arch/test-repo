// Browser-side interactions for the Week 3 model project.
const themeButton = document.querySelector("#themeButton");
const greetButton = document.querySelector("#greetButton");
const greeting = document.querySelector("#greeting");
const goalForm = document.querySelector("#goalForm");
const goalInput = document.querySelector("#goalInput");
const goalList = document.querySelector("#goalList");
const formMessage = document.querySelector("#formMessage");
const contactForm = document.querySelector("#contactForm");
const contactFeedback = document.querySelector("#contactFeedback");

// Toggle a CSS class; CSS defines the visual theme.
themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.textContent = isDark ? "Switch to light" : "Switch theme";
});

// A click event updates text in the DOM.
greetButton.addEventListener("click", () => {
  greeting.textContent = "Hello! Thanks for visiting my learning profile.";
});

// Form submission creates a new list item.
goalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const goalText = goalInput.value.trim();
  if (goalText === "") {
    formMessage.textContent = "Please enter a goal before adding it.";
    return;
  }
  
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const text = document.createElement("span");
  checkbox.type = "checkbox";
  text.textContent = goalText;
  label.append(checkbox, text);
  item.append(label);
  goalList.append(item);
  goalInput.value = "";
  formMessage.textContent = "Goal added. Keep making progress!";
  goalInput.focus();
});

// Event delegation handles checkboxes, including newly created ones.
goalList.addEventListener("change", (event) => {
  if (event.target.matches('input[type="checkbox"]')) {
    event.target.closest("li").classList.toggle("is-complete", event.target.checked);
  }
});

// Demonstration only: validate locally; no message is sent.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    contactFeedback.textContent = "Please complete each field with a valid email address.";
    contactForm.reportValidity();
    return;
  }
  const data = new FormData(contactForm);
  const senderName = data.get("name").trim();
  contactFeedback.textContent = `Thanks, ${senderName}. The form is valid, but this demo does not send messages.`;
  contactForm.reset();
});
