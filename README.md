## Quickstart guide

* Clone or download this Git repo onto your computer.
* Install [Node.js](https://nodejs.org/en/) if you don't have it yet.
* Run `npm install`
* Run `gulp` to run the default Gulp task

**If you have any issues with access to fetch data from origin by CORS policy, please install plugin for your browser ex. Allow CORS: Access-Control-Allow-Origin**

In this proejct, Gulp is configured to run the following functions:

* Compile the SCSS files to CSS
* Autoprefix and minify the CSS file
* Concatenate the JS files
* Uglify the JS files
* Move final CSS and JS files to the `/dist` folder
 


## Task 1

Stwórz banner w formacie 300x250. Wylosuj z pliku JSON cztery oferty. Układ bannera ma być taki jak na załączonym przykładzie (banner.jpg). 

Dodaj animacje "skaczącej ramki" - co dwie sekundy border oferty ma przeskakiwać na następną. Z ostatniej oferty ramka powinna przeskakiwać z powrotem na pierwszą.

Obrazki i cena + waluta powinny być zaczytywane z pliku JSON: http://rekrutacjartb.pl/developer/banner.json
Logo: http://rekrutacjartb.pl/developer/images/logo_rtb.png

## Task 2

Stwórz banner w formacie 160x600. Wylosuj z pliku JSON trzy oferty. Układ bannera ma być taki jak na załączonym przykładzie (banner.jpg). 

Banner powinien być w formie slidera. 

Dane powinny być zaczytywane z pliku JSON: http://rekrutacjartb.pl/developer/banner.json
Logo: http://rekrutacjartb.pl/developer/images/logo_rtb.png

## Task 3.

Zaprogramuj counter, który zlicza ilość czasu pozostałego np. do końca promocji (od dnia dzisiejszego do analogicznej daty tydzień później) w formie "Do końca pozostało: DD-HH-MM".

Dodaj warunki, które wyłączą ilość dni/godzin w momencie kiedy wynoszą 0.
