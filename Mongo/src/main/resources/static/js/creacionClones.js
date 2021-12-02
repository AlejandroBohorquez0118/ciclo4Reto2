function validarVacios(){
    let check = 0;
    let brandVal = $("#brandProd").val();
    let procVal = $("#processorProd").val();
    let osVal = $("#AosProd").val();
    let descrVal = $("#descriptionProd").val();
    let memorVal = $("#memoryProd").val();
    let hardVal = $("#hardDriveProd").val();
    let availVal = $("#availabilityProd").val();
    let priceVal = $("#priceProd").val();
    let quantVal = $("#quantityProd").val();    
    let photoVal = $("#photografyProd").val();
    

    if (brandVal == "" || procVal == "" || osVal == "" || descrVal == ""
     || memorVal == "" || hardVal == "" || availVal == "" 
     || priceVal == "" || quantVal == ""  || photoVal == ""){
        let conta = "";
        
        if (brandVal == ""){
            conta += " Marca ";
        }
        if (procVal == ""){
            conta += " Procesador ";
        }
        if (osVal == ""){
            conta += " Sistema Operativo ";
        }
        if (descrVal == ""){
            conta += " Descripcion ";
        }
        if (memorVal == "" ){
            conta += " Memoria ";
        }
        if (hardVal == ""){
            conta += " Disco Duro ";
        }
        if (availVal == ""){
            conta += " Disponibilidad ";
        }
        if (priceVal == ""){
            conta += " Precio ";
        }
        if (quantVal == ""){
            conta += " Cantidad ";
        }
        if (photoVal == ""){
            conta += " Fotografia ";
        }
        



        if (check == 0){
        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderClone')
        var wrapper3 = document.createElement('div')
        alertPlaceholderHead.innerHTML = "";
        wrapper3.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Datos Incorrectos!</h4>
        <p>  Por favor ingresar todos los datos requeridos   </p>
        <hr>
        <p class="mb-0">Los siguientes campos no han sido correctamente ingresados
        `+conta+ `
        </p>
      </div>`

        alertPlaceholderHead.append(wrapper3)
        
        check += 1;
    }
    else{

        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderClone')
        var wrapper3 = document.createElement('div')
        alertPlaceholderHead.innerHTML = "";
        wrapper3.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Datos Incorrectos!</h4>
        <p>  Por favor ingresar todos los datos requeridos  </p>
        <hr>
        <p class="mb-0">Los siguientes campos no han sido correctamente ingresados
        `+conta+ `
        </p>
      </div>`
        
        alertPlaceholderHead.append(wrapper3)
        
    }

    }else{
    
    creacionIdClone();
    let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderClone')
    alertPlaceholderHead.innerHTML = "";   

    }

}

function creacionIdClone(){

    $.ajax({    
        url : 'http://localhost:8080/api/clone/all',
    //  data : { id : 123 },
        type : 'GET',
        dataType : 'json',
        
        error : function(xhr, status) {
            alert('ha sucedido un problema, '+xhr.status);
        },
        complete : function(xhr, status) {
           // alert('Petición realizada, '+xhr.status);
        },
        success : function(json) {
            window.idCloneGen = json.length + 1;
            console.log(window.idCloneGen)
            saveClone();
        }
    });



}


function saveClone(clone) {
    let datos = {
        id:window.idCloneGen,
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


