// Script for smooth scroll on anchor link clicks
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 60,  // Adjusted for header height
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Script for sticky navigation bar
  const nav = document.querySelector('nav');
  const stickyNav = nav.offsetTop;
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > stickyNav) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
  
  // Script for Back to Top button
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.classList.add('back-to-top');
  document.body.appendChild(backToTopButton);
  
  // Show/Hide Back to Top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Scroll to the top when the Back to Top button is clicked
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Chatbot (placeholder functionality for now)
  const chatbotButton = document.createElement('button');
  chatbotButton.innerHTML = '💬';
  chatbotButton.classList.add('chatbot-button');
  document.body.appendChild(chatbotButton);
  
  // Open a basic chat window when chatbot button is clicked
  chatbotButton.addEventListener('click', function() {
    const chatWindow = document.createElement('div');
    chatWindow.classList.add('chat-window');
    chatWindow.innerHTML = `
      <div class="chat-header">
        <span>Chatbot</span>
        <button class="close-chat">×</button>
      </div>
      <div class="chat-body">
        <p>Hello! How can I assist you today?</p>
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Type your message...">
        <button>Send</button>
      </div>
    `;
  
    document.body.appendChild(chatWindow);
  
    // Close chat window
    chatWindow.querySelector('.close-chat').addEventListener('click', function() {
      chatWindow.remove();
    });
  
    // Add basic interactivity to the chat
    const input = chatWindow.querySelector('input');
    const sendButton = chatWindow.querySelector('button');
  
    sendButton.addEventListener('click', function() {
      const message = input.value.trim();
      if (message) {
        const newMessage = document.createElement('p');
        newMessage.textContent = `You: ${message}`;
        chatWindow.querySelector('.chat-body').appendChild(newMessage);
  
        input.value = '';  // Clear the input field
        chatWindow.querySelector('.chat-body').scrollTop = chatWindow.querySelector('.chat-body').scrollHeight;
      }
    });
  });
  