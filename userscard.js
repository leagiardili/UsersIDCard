let list=`<div class="row row-cols-1 row-cols-md-4 g-4">`;
fetch('users.json')
.then(response => response.json())
    .then(json => {
        console.log(json.users); //full array 
        //armo la card
        json.users.forEach(user => {
            list +=`<div class="col">
                        <div class="card">
                            <div class="card-header text-center bg-warning">
                                <h6>User Id Card</h6>
                            </div>
                            <img src="${user.profilePicture}" class="card-img-top" style="height:230px; width: auto;">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text">User Id: ${user.id}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Adress: ${user.liveLocation}</li>
                                <li class="list-group-item">Email: ${user.email}</li>
                                <li class="list-group-item">Password: ${user.password}</li>
                            </ul>
                        </div>
                    </div>`;})
        list+=`</div>`;            
        document.querySelector("#contenedor").innerHTML = list;        
       })