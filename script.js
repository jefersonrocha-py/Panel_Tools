// Alternar Dark Mode
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "20px";
    toggleButton.style.left = "20px";
    toggleButton.style.zIndex = "1000";
  
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });
  
    document.body.appendChild(toggleButton);
  
    // Carregar tema salvo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
    }
  });
  
  // Filtro de busca
  function filterCards() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const cardText = card.textContent.toLowerCase();
      card.style.display = cardText.includes(searchTerm) ? '' : 'none';
    });
  }
  