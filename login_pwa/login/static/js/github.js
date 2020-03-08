    
function gitdata(){

    var url='https://api.github.com/users/'+document.getElementById('text_input').value;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        var gi= document.getElementById('para');
        gi.innerHTML=JSON.stringify(data);
    console.log(JSON.stringify(data)); // Prints result from `response.json()` in getRequest
    
    })

    .catch(function(response){
        return response.status;
        console.log(response.status);
    });
    
}

