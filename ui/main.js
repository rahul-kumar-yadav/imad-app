// Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function()
{
     
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readystate==XMLHttpRequest.DONE) {
          
          if(Request.Status==200)  {
              var counter = request.response.Text;
              var span = document.getElementById('count');
              span.innerHTML= counter.toString();
          }
        } 
    };
    
   request.open("GET",'http://rahulkumaryadav22.imad.hasura-app.io/counter' , true);
   request.send(null);
   
};