function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value;
  
    if (message.trim() !== "") {
      const chatMessages = document.getElementById("chat-messages");
      const newMessage = document.createElement("div");
      newMessage.classList.add("message");
      newMessage.innerText = message;
      chatMessages.appendChild(newMessage);
  
      userInput.value = "";
      userInput.focus();
    }
  }
  