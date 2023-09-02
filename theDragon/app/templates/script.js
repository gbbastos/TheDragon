document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-class');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedClass = button.id;
            // Envie a seleção da classe para o backend
            fetch('/select_class', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ class: selectedClass }),
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message); // Exiba uma mensagem ao jogador
            });
        });
    });
});
