
    const footer = document.createElement("footer");
    footer.innerHTML = "<p>Gemaakt door Jayden & Dewish – PV1302</p>";
    footer.style.textAlign = "center";
    footer.style.padding = "20px";
    footer.style.backgroundColor = "rgba(0, 62, 128, 0.9)";
    footer.style.color = "#fff";
    document.getElementById("footer-container").appendChild(footer);


    // header
    fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });






const knop = document.getElementById('knop');
const donatieInput = document.getElementById('donatie');
const weergave = document.getElementById('weergave');
const progressBar = document.getElementById('progress-bar');

let totaal = 3500;
const doel = 5000;


weergave.textContent = `€${totaal}`;
updateProgress();

knop.addEventListener('click', function(event) {
    event.preventDefault();

    const waarde = Number(donatieInput.value);
    if (isNaN(waarde) || waarde <= 0) {
        alert("Voer een geldig donatiebedrag in!");
        return;
    }

    totaal += waarde;
    weergave.textContent = `€${totaal}`;
    donatieInput.value = "";

    updateProgress();

    if (totaal >= doel) {
        alert("Gefeliciteerd! Het donatiedoel is bereikt!");
    }
});

function updateProgress() {
    const percentage = Math.min((totaal / doel) * 100, 100); 
    progressBar.style.width = percentage + "%";
    progressBar.textContent = Math.floor(percentage) + "%";
}



