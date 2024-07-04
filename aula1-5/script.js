window.onload = function() {
    document.getElementById('val2').addEventListener('focusout', function() {
        val1 = document.getElementById("val1").value;
        val2 = document.getElementById("val2").value;
    
        document.getElementById('result1').value = parseInt(val1) + parseInt(val2);
    })

    document.getElementById('val4').addEventListener("focusout", function() {
        val3 = document.getElementById("val3").value;
        val4 = document.getElementById("val4").value;

        document.getElementById('result2').value = parseInt(val3) - parseInt(val4);
    })

    document.getElementById('val6').addEventListener("focusout", function() {
        val5 = document.getElementById("val5").value;
        val6 = document.getElementById("val6").value;

        document.getElementById('result3').value = parseInt(val5) * parseInt(val6);
    })

    document.getElementById('val8').addEventListener("focusout", function() {
        val7 = document.getElementById("val7").value;
        val8 = document.getElementById("val8").value;

        document.getElementById('result4').value = parseInt(val7) / parseInt(val8);
    })



    elemento = document.getElementById('val1');
    elemento.addEventListener("click", function() {
        elemento.value = "";
    })
}