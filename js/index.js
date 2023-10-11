let productsArray = [];
function resetear() {
fetch ('https://japceibal.github.io/japflix_api/movies-data.json')
.then(response => response.json())
.then(data => {
    productsArray = data
});
}

function showProductsList() {
    let htmlContentToAppend = "";

    for (let i = 0; i < productsArray.length; i++) {
        let peli = productsArray[i];

        {
                htmlContentToAppend += `
                
                <div class="row cursor-active text-white">
                <div class="col-3">
                <h6 class="mb-1" style = "color:whitesmoke";>${peli.title}</h6>
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <small class="mb-1" style = "color:grey";> ${peli.tagline}</small>
                    </div>
                </div>
            </div> <hr style= "color:white";>
            `;
        };
        
        document.getElementById("lista").innerHTML = htmlContentToAppend;
    };
};

document.addEventListener("DOMContentLoaded", function(){
    resetear();
  document.getElementById('btnBuscar').addEventListener('click', function() {
    let busqueda = document.getElementById('inputBuscar').value;
    productsArray = productsArray.filter(item => item.title.toLowerCase().includes(busqueda.toLowerCase()));
                
    if (busqueda !== "") {
        showProductsList();
    } else {
        resetear();
    }
});  
})