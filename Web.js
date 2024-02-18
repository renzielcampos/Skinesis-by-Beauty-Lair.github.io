function validateLoginForm() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const messageElement = document.getElementById("message");
  
    if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
      messageElement.textContent = "Please enter both username and password.";
      messageElement.classList.remove("hidden");
      return false;
    }
  
    messageElement.textContent = "";
    messageElement.classList.add("hidden");
    return true;
  }