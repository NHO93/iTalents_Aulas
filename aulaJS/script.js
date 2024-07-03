window.onload = function() {
    document.getElementById('azul').addEventListener("mouseover", function() {
        document.getElementById('titulo').style.color = 'blue';
    })

    document.getElementById('vermelho').addEventListener("mouseout", function() {
        document.getElementById('titulo').style.color = 'red';
    })
    document.getElementById('verde').addEventListener("mouseup", function() {
        document.getElementById('titulo').style.color = 'green';
    })
    document.getElementById('amarelo').addEventListener('click', function() {
        document.getElementById('titulo').style.color = 'yellow';
    })
}