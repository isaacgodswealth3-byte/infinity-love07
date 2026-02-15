// Elements
const openingScreen = document.getElementById("openingScreen");
const mainContent = document.getElementById("mainContent");
const crushNameInput = document.getElementById("crushName");
const startButton = document.getElementById("startButton");
const displayName = document.getElementById("displayName");
const messageContainer = document.getElementById("messageContainer");
const nextPageButton = document.getElementById("nextPageButton");
const loveEffect = document.querySelector(".love-effect");

// Messages
const messages = [
  "Happy Valentine’s Day!",
  "Stay here, don’t leave, and accompany me until we grow old together.",
  "You are my destination in both happiness and sorrow.",
  "I can’t imagine how shattered my days would be if you were no longer here.",
  "If you ever feel bored, stay here.",
  "Let me fix everything to make you comfortable and never want to leave for someone else."
];

let currentMessageIndex = 0;

// Typing Effect
function showMessageWithTypingAnimation() {
  if (currentMessageIndex >= messages.length) return;

  const text = messages[currentMessageIndex];
  const messageElement = document.createElement("p");
  messageElement.classList.add("message");
  messageContainer.appendChild(messageElement);

  let charIndex = 0;

  const typing = setInterval(() => {
    if (charIndex < text.length) {
      messageElement.textContent += text.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typing);
      currentMessageIndex++;
      setTimeout(showMessageWithTypingAnimation, 900);
    }
  }, 90);
}

// Start Button
startButton.addEventListener("click", () => {
  const name = crushNameInput.value.trim();

  if (!name) {
    shakeButton();
    return;
  }

  displayName.textContent = name;
  openingScreen.style.display = "none";
  mainContent.style.display = "block";

  currentMessageIndex = 0;
  messageContainer.innerHTML = "";
  showMessageWithTypingAnimation();
});

// Surprise Page
nextPageButton.addEventListener("click", () => {
  window.location.href = "flower.html";
});

// Love Effect
function createLoveEffect() {
  const emojis = ["❤️", "💖", "💕", "💘", "💝"];

  for (let i = 0; i < 50; i++) {
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "%";
    span.style.animationDuration = Math.random() * 3 + 3 + "s";
    loveEffect.appendChild(span);
  }
}

// Button Shake
function shakeButton() {
  startButton.classList.add("shake");
  setTimeout(() => startButton.classList.remove("shake"), 400);
}

createLoveEffect();