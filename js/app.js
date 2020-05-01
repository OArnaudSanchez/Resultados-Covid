const formulario = document.getElementById('generar-resultados');
formulario.addEventListener('submit', CargarDatos);

function CargarDatos(e){
    e.preventDefault();
    //Obtener el pais seleccionado
    const pais = document.getElementById('paises');
    const paisSeleccionado = pais.options[pais.selectedIndex].value;

    let url = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/';

    let id = 0;

    switch(paisSeleccionado){
        case 'Afghanistan':
            id = 0;
            break;
        case 'Argentina':
            id = 6;
            break;
        case 'Australia':
            id = 8;
            break;   
        case 'Austria':
            id = 16;
            break; 
        case 'Bolivia':
            id = 26;
            break; 
        case 'Brazil':
            id = 28;
            break; 
        case 'Bulgaria':
            id = 30;
            break; 
        case 'Canada':
            id = 35;
            break; 
        case 'Chile':
            id = 48;
            break; 
        case 'China':
            id = 49;
            break; 
        case 'Colombia':
            id = 82;
            break; 
        case 'Costa Rica':
            id = 85;
            break; 
        case 'Cuba':
            id = 89;
            break; 
        case 'Dominican Republic':
            id = 96;
            break; 
        case 'Ecuador':
                id = 97;
                break; 
        case 'Egypt':
                id = 98;
                break; 
        case 'El Salvador':
                id = 99;
                break; 
        case 'France':
                id = 107;
                break; 
        case 'Guatemala':
                id = 123;
                break; 
        case 'Honduras':
                id = 128;
                break; 
        case 'Hungary':
                id = 129;
                break; 
        case 'India':
                id = 131;
                break; 
        case 'Indonesia':
                id = 132;
                break; 
        case 'Iran':
                id = 133;
                break; 
        case 'Iraq':
                id = 134;
                break; 
        case 'Ireland':
                id = 135;
                break;
        case 'Israel':
                id = 136;
                break; 
        case 'Italy':
                id = 137;
                break; 
        case 'Jamaica':
                id = 138;
                break; 
        case 'Japan':
                id = 139;
                break; 
        case 'Korea, South':
                id = 143;
                break; 
        case 'Mexico':
                id = 158;
                break; 
        case 'Nicaragua':
                id = 171;
                break; 
        case 'Nigeria':
                id = 172;
                break; 
        case 'Pakistan':
                id = 177;
                break;
        case 'Panama':
                id = 178;
                break; 
        case 'Paraguay':
                id = 180;
                break; 
        case 'Peru':
                id = 181;
                break; 
        case 'Russia':
                id = 187;
                break; 
        case 'Saudi Arabia':
                id = 192;
                break;
        case 'Serbia':
                id = 194;
                break;
        case 'Singapore':
                id = 196;
                break;
        case 'Somalia':
                id = 199;
                break;
        case 'South Africa':
                id = 200;
                break;
        case 'Spain':
                id = 201;
                break;
        case 'Uruguay':
                id = 224;
                break;
        case 'US':
                id = 225;
                break;
        case 'Venezuela':
                id = 227;
                break;
        case 'Vietnam':
                id = 228;
                break;

    }

    if(paisSeleccionado !== '' && paisSeleccionado !== null){
        url += `${id}`;
    }
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);

    xhr.onload = function (){
        if(this.status === 200){
            const pais = JSON.parse(this.responseText);
            let template = '';

            template += `
                <ul>
                    <li><strong>Pais:</strong> ${pais.location.country}</li>
                    <li><strong>Codigo Pais:</strong> ${pais.location.country_code}</li>
                    <li><strong>Ultima Actualizacion:</strong> ${pais.location.last_updated}</li>
                    <li><strong>Casos Confirmados:</strong> ${pais.location.latest.confirmed}</li>
                    <li><strong>Muertes:</strong> ${pais.location.latest.deaths}</li>
                </ul>
            `;
            document.getElementById('resultados').innerHTML = template;     
        }
    }
    xhr.send();
}

document.getElementById('Limpiar').addEventListener('click',function(e){
    e.preventDefault();
    formulario.reset();
    document.getElementById('resultados').textContent = '';
});