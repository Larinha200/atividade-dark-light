 // Aguarda a página carregar
        document.addEventListener('DOMContentLoaded', () => {
            const themeBtn = document.getElementById('themeBtn');
            const htmlElement = document.documentElement;

            themeBtn.addEventListener('click', () => {
                // Alterna a classe 'dark' no HTML
                htmlElement.classList.toggle('dark');
                
                // Verifica se ficou no dark mode ou light mode
                const isDarkMode = htmlElement.classList.contains('dark');
                
                // Altera o atributo data-theme para light ou dark
                htmlElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
                
                // Altera o texto do botão de acordo com o modo atual
                themeBtn.textContent = isDarkMode ? 'Light mode' : 'Dark mode';
            });
        });