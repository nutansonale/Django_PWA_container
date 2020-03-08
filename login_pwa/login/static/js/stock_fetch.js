function getdata(){

    fetch('http://127.0.0.1:8000/stock_fetch')
    .then(response => response.json())
    .then( data =>{
         var dat=JSON.stringify(data);
         
         dat1=data['result'];
         var bod=document.getElementById("body");
         var tb=document.getElementById("tbl");
         for(let i=0;i<dat1.length;i++){
         var tr=document.createElement('tr');
         var td=document.createElement('td');
         td.innerHTML=dat1[i].id;
         tr.appendChild(td);
         tb.appendChild(tr);
         var td=document.createElement('td');
         td.innerHTML=dat1[i].item;
         tr.appendChild(td);
         tb.appendChild(tr);
         var td=document.createElement('td');
         td.innerHTML=dat1[i].qnt;
         tr.appendChild(td);
         tb.appendChild(tr);
    
         }
         setTimeout(function () {
              var table = document.getElementById("tbl");
    
         while (table.rows.length > 1) {
         table.deleteRow(1);
         }
     
         },2000);
     
    
    
        
    });
    
    }
    getdata();
    setInterval(()=> getdata(),2015);
    