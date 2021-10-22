const endpoint="https://g54d19c00f80084-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games"
const endpoint2="http://129.151.125.127:8080/api/Client/"
const endpoint4="https://g54d19c00f80084-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message"

function peticionGet(){
    $.ajax({
            method:"GET",
            url:"http://144.22.59.230:8080/api/Client/all",
            success:function(data){
                console.log(data)
                console.log(typeof data)

              
            },
            error:function(error){
              
                console.log("Error al Consumir Api Oracle Cloud ")

            }
    });
   
}
  function obtenerItems1(){
    $.ajax({
        dataType: 'json',
        url:"http://144.22.59.230:8080/api/Client/all",
        type:'GET',
        success:function(data) {
          console.log(data)                  
          /*for(i=0;i<Object.keys(data).length;i++){*/
            for(i=0;i<20;i++){
            var misItems=Object.values(data[i])
              console.log(misItems)  
              $("#miResultado1").append("<tr>");
              $("#miResultado1").append("<td>"+misItems[0]+"</td>");
              $("#miResultado1").append("<td>"+misItems[1]+"</td>");
              $("#miResultado1").append("<td>"+misItems[2]+"</td>");
              $("#miResultado1").append("<td>"+misItems[3]+"</td>");
              $("#miResultado1").append("<td>"+misItems[4]+"</td>");
              $("#miResultado1").append("</tr>");
              console.log(i)
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {    
        }
    });
  }



  function busca1(){
    elemento={id:$("#miId2").val()}
    var elemento = parseInt(elemento.id)
    console.log(elemento)
    $.ajax({
      dataType: 'json',
      url:"http://144.22.59.230:8080/api/Client/all",
      type:'GET',
      success:function(data) {
        console.log(data)                  
        /*for(i=0;i<Object.keys(data).length;i++){*/
          for(i=0;i<20;i++){
            var misItems=Object.values(data[i])
            if (misItems[0]==elemento) {
              console.log(misItems)
              $("#name2").val(misItems[1]);
              $("#email").val(misItems[2]);
              $("#password").val(misItems[3]);
              $("#age").val(misItems[4]);
           } 
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {  
          $("#name2").val("");
          $("#email").val("");
          $("#age").val("");     
        }
    });
  }


  function peticionPost1() {
    elemento={id:$("#miId2").val()}
    var elemento1 = parseInt(elemento.id)
    var elemento={
      name:$("#name2").val(),
      email:$("#email").val(),
      password:$("#password").val(),
      age:$("#age").val()
      
      }
      console.log(elemento)
    var datasend=JSON.stringify(elemento)
    $.ajax({
        method: "POST",
        url: "http://144.22.59.230:8080/api/Client/save",
        data: datasend,
        dataType: 'json',
        contentType: "application/json",
        complete: function (response) {
            console.log(response.status)
        },
        error: function (error) {

        }    
    });
}


                function actualizar1(){
                    elemento={id:$("#miId2").val()}
                    var elemento1 = parseInt(elemento.id)
                    var elemento={
                      id:elemento1,
                      name:$("#name2").val(),
                      email:$("#email").val(),
                      email:$("#password").val(),
                      age:$("#age").val()
                      }
                      console.log(elemento)
                    var dataToSend=JSON.stringify(elemento)
                    //JSON= JavaScript Object Notation
                    $.ajax({
                          dataType: 'json',
                          data:dataToSend,
                          contentType:'application/json',
                          url:"http://144.22.59.230:8080/api/Client/update",
                          method:'PUT',   
                          success:function(response) {
                            console.log("Actualizo Registro!!!")
                          },
                          error: function(jqXHR, textStatus, errorThrown) {   
                            console.log("Registro no actualizado") 
                          }
                      });
                    }
            
            
                        function peticionDelete1() {
                            elemento={id:$("#miId2").val()}
                            var elemento1 = parseInt(elemento.id)
                            var elemento={id:elemento1}
                              console.log(elemento)
                            var datasend=JSON.stringify(elemento)
                            $.ajax({
                                method: "DELETE",
                                url: "http://144.22.59.230:8080/api/Client/delete",
                                data: datasend,
                                dataType: 'json',
                                contentType: "application/json",
                                complete: function (response) {
                                    console.log("Elimino Registro!!")
                                },
                                error: function (error) {
                                }
                            });
                        }