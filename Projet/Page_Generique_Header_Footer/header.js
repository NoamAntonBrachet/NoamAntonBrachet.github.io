let header = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="header.css">
    <title>Document</title>
</head>
<body>
    <header>
        <section class="header-top">
        <div>
            <a href="aceuil.html"><img src="logo-econocom.png" alt="Econocome live tech"></a>
        </div>

        <nav class="main-nav">
            <div class="dropdown">
                <button class="nav-btn"> <h2>&#9662 Nos services</h2></button>
                <div class="dropdown-menu">
                    <a href="cybersecurite.html">Cyber Sécurité</a>
                    <hr>
                    <a href="app-cloud-data.html">Ap. Cloud & Data</a>
                    <hr>
                    <a href="environnement-utilisateur.html">Environement Utilisateur</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="nav-btn"><h2>&#9662 Secteurs d'activités</h2></button>
                <div class="dropdown-menu">
                    <a href="e-education.html">e‑education</a>
                    <hr>
                    <a href="transformation-numerique.html">Transformation Numérique</a>
                    <hr>
                    <a href="equipement-informatique.html">Équipement Informatique</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="nav-btn"><h2>&#9662 Nous contacter</h2></button>
                <div class="dropdown-menu">
                    <a href="nous-rejoindre.html">Nous Rejoindre</a>
                    <hr>
                    <a href="contact.html">Contact</a>
                    <hr>
                    <a href="faq.html">FAQ</a>
                </div>
            </div>
        </nav>
        </section>
        <section class="header-title">
            <h1>Titre section</h1>
        </section>
    </header>
</body>
</html>`;
document.getElementById("header").innerHTML = header;
