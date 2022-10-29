let list=`<div class="row row-cols-1 row-cols-md-4 g-4">`;
fetch('mascotas.json')
.then(response => response.json())
    .then(json => {
        //console.log(json); //full array 
        //armo la card
        json.forEach(animal => {
            list +=`<div class="col">
                        <div class="card">
                            <img src="${animal.img}" class="card-img-top" style="height:230px; width: auto;">
                            <div class="card-body">
                                <h5 class="card-title">${animal.nombre}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Tipo: ${animal.tipo}</li>
                                <li class="list-group-item">Raza: ${animal.raza}</li>
                                <li class="list-group-item">Edad: ${animal.edad_aprox}</li>
                            </ul>
                        </div>
                    </div>`;})
        list+=`</div>`;            
        document.querySelector("#contenedor").innerHTML = list;        
       })