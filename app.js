//Fehlermeldungen anzeigen
'use strict';

//Variable deklarieren
const switcher = document.querySelector('.btn');

//Click ereignis (Aktivierung von Hell oder Dunkel hintergrund)
switcher-addEventListener('click', function()   {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    //Variable deklarieren und mit einer If abfrage den Hintergrund ändern
    const className = document.body.className;
    if(className == "dark-theme") {
    this.textContent = "Dark";
    }
    else {
    this.textContent = "Light";
    }

    //Ausgabe Konsole (welchen hintergrund aktiviert ist
    console.log('current class name: ' + className);
});