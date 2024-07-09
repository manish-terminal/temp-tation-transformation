
document.getElementById('sbmt').onclick = converter;
document.getElementById('reset').onclick = reset;

function converter() {
    var temperature = parseFloat(document.getElementById("temp").value);
    if (document.getElementById('CTF').checked) {
        if (document.getElementById("temp").value=="")

        document.getElementById('result').textContent = "Enter valid Temperature";

        else{
        var contemp = ((temperature * 1.8) + 32);
        console.log(contemp);
        var result = contemp + " F";
        document.getElementById('result').textContent = result;
    } }else if (document.getElementById('FTC').checked) {
        if (document.getElementById("temp").value=="")

        document.getElementById('result').textContent = "Enter valid Temperature";
        else{
        var contemp = ((temperature - 32) * (5.0 / 9));
        console.log(contemp);
        var result = contemp + " °C";
        document.getElementById('result').textContent = result;
    }}
}

function reset() {
    window.location.reload();
}
