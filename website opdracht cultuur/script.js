
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
