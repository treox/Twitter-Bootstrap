sectKon = document.getElementById('sect-kon');
let kontakter = '';

fetch('adressbok-1.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(adresser) {

        for (i=0 ; i<adresser.length; i++) {
        kontakter += '<p> Kontakt: ' + adresser[i].firstname + ' ' + adresser[i].lastname + ' | Email: ' + adresser[i].email + ' | Tlf.: ' + adresser[i].phone + ' </p>';
        sectKon.innerHTML = kontakter;
        }
    })
    .catch(err => console.log(JSON.stringify(err)))
