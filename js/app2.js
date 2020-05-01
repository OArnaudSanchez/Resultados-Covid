const formulario = document.getElementById('generar-resultados');
formulario.addEventListener('submit', CargarDatos);

function CargarDatos(e){
    e.preventDefault();
    //Obtener el pais seleccionado
    const pais = document.getElementById('paises');
    const paisSeleccionado = pais.options[pais.selectedIndex].value;

    let url = 'https://coronavirus-19-api.herokuapp.com/countries/';

    if(paisSeleccionado !== '' && paisSeleccionado !== null){
        url += `${paisSeleccionado}`;
    }
    
    //Realizando la peticion usando fetch
    fetch(url)
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(pais){
            let template = '';
            template += `
                <ul class="lista">
                    <li><strong>Pais:</strong> ${pais.country}</li>
                    <li><strong>Casos Nuevos:</strong> ${pais.todayCases}</li>
                    <li><strong>Muertes Nuevas:</strong> ${pais.todayDeaths}</li>


                    <li><strong>Total Casos Confirmados:</strong> ${pais.cases}</li>
                    <li><strong>Total Muertes Confirmadas:</strong> ${pais.deaths}</li>

                    <li><strong>Total Recuperados:</strong> ${pais.recovered}</li>

                    <li><strong>Casos Por Millon:</strong> ${pais.casesPerOneMillion}</li>
                    <li><strong>Muertes Por Millon:</strong> ${pais.deathsPerOneMillion}</li>

                    <li><strong>Total Pruebas Realizadas:</strong> ${pais.totalTests}</li>
                </ul>
            `;
            document.getElementById('resultado').innerHTML = template; 

        });
}

document.getElementById('Limpiar').addEventListener('click',function(e){
    e.preventDefault();
    formulario.reset();
    document.getElementById('resultado').textContent = '';
});