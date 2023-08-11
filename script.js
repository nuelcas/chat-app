const emojis = ["😄", "😍", "🥳", "🎉", "👋", "❤️", "😂", "😎", "🙌", "🐱"];

// Emoji logic
function openEmojiPicker() {
  const emojiPicker = document.getElementById("emoji-picker");
  emojiPicker.style.display = "block";
}

// Select an emoji from the picker
function selectEmoji(emoji) {
  const messageInput = document.getElementById("message-input");
  messageInput.value += emoji;

  // Hide the emoji picker
  const emojiPicker = document.getElementById("emoji-picker");
  emojiPicker.style.display = "none";
}

// Initialize emoji picker
function initializeEmojiPicker() {
  const emojiPicker = document.createElement("div");
  emojiPicker.id = "emoji-picker";
  emojiPicker.style.display = "none";

  emojis.forEach((emoji) => {
    const emojiButton = document.createElement("button");
    emojiButton.className = "emoji-button";
    emojiButton.textContent = emoji;
    emojiButton.addEventListener("click", () => selectEmoji(emoji));
    emojiPicker.appendChild(emojiButton);
  });

  document.querySelector(".iphone").appendChild(emojiPicker); // Append to .iphone class
}

// Call the initialization function when the script loads
initializeEmojiPicker();
// Camera logic
function accessCamera() {
  const constraints = { video: true };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      const videoElement = document.createElement("video");
      videoElement.id = "camera-stream";
      videoElement.autoplay = true;
      videoElement.srcObject = stream;

      const cameraContainer = document.getElementById("camera-container");
      cameraContainer.innerHTML = ""; // Clear previous content
      cameraContainer.appendChild(videoElement);
    })
    .catch((error) => {
      console.error("Error accessing camera:", error);
    });
}

// Message sending logic
function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value.trim();

  if (message !== "") {
    const messageContainer = document.getElementById("message-container");
    const newMessage = document.createElement("div");
    newMessage.className = "message";
    newMessage.textContent = message;
    messageContainer.appendChild(newMessage);

    // Clear the input field
    messageInput.value = "";
  }
}

// Attach event listener to the message input field for Enter key press
document
  .getElementById("message-input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

// Image uploading logic
function uploadImage() {
  const fileInput = document.getElementById("file-input");

  fileInput.click(); // Trigger the file input click event
}

// Handle selected image file
function handleImageUpload() {
  const fileInput = document.getElementById("file-input");
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    // You can implement your image upload logic here
    // For demonstration purposes, let's assume the file is processed
    alert(`Uploading image: ${selectedFile.name}`);
  }
}

// Attach event listener to the file input element
document
  .getElementById("file-input")
  .addEventListener("change", handleImageUpload);
