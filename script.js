function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    const chatBody = document.getElementById("chat-body");

    // Display user message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBody.appendChild(userMessage);

    // Clear input
    document.getElementById("user-input").value = "";

    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = generateBotResponse(userInput);
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

function generateBotResponse(input) {
    // Example bot responses
    const responses = {
        "oi": "Olá! Como posso ajudar você?",
        "como está?": "Estou aqui para ajudar! E você?",
        "obrigado": "De nada! Sempre à disposição.",
    };

    return responses[input.toLowerCase()] || "Desculpe, não entendi. Pode reformular?";
}
