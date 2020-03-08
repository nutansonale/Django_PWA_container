
     if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            console.log("Will the service worker register?");
       navigator.serviceWorker.register("{% url 'sw.js' %}") .then(function(reg){
           console.log("service worker rigistered");
        
        }).catch(function(err) {
          console.log("service worker didn't", err)
           console.log("err.message:", err.message)
       });        
    });


    }

    
    
