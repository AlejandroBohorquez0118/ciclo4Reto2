function saveClone(clone) {
    let datos = {
        id:window.idCarga,
        brand : $("#brandProd").val(),
        procesor : $("#processorProd").val(),
        os : $("#osProd").val(),
        description : $("#escriptionProd").val(),
        memory : $("#memoryProdr").val(),
        hardDrive : $("#passwordUser").val(),
        availability : $("#zoneUser").val(),
        price : $("#price").val(),
        quantity : $("#quantity").val(),
        photography : $("#photografyProd").val()
        
    }

    let datosPeticion = JSON.stringify(datos)

    
    $.ajax({
      
        url: "http://localhost:8080/api/clone/new",
              
        datos: datosPeticion,
      
        type: 'POST',

        contentType: "application/JSON",

        dataType: 'json',
        
        success: function (respuesta) {
            
            console.log(respuesta);
            resultado(respuesta)	
        },

        error: function (xhr, status) {
           		
            console.log("ocurrio un error al guardar");	
        },
      
        complete: function (xhr, status) {
            console.log("Se guardo correctamente"  + status);
        }
    });
}


