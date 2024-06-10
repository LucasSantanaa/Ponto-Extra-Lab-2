document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const infoButtons = document.querySelectorAll('.add-info');
    const addDestinationButton = document.getElementById('add-destination');

    // Função para mostrar a descrição ao passar o mouse nas imagens da galeria
    galleryItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            if (!item.querySelector('.image-description')) {
                const description = document.createElement('div');
                description.classList.add('image-description');
                description.textContent = item.alt; // Usa o texto do atributo alt da imagem
                item.appendChild(description);
            }
        });

        item.addEventListener('mouseout', () => {
            const description = item.querySelector('.image-description');
            if (description) {
                description.remove();
            }
        });
    });

    // Função para exibir alerta de "Imagem meramente ilustrativa"
    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert("Imagens meramente ilustrativas");
        });
    });

    // Função para exibir alerta de "Mande uma mensagem pelo contato para novos destinos"
    addDestinationButton.addEventListener('click', () => {
        alert("Mande uma mensagem pelo contato para novos destinos");
    });
});
