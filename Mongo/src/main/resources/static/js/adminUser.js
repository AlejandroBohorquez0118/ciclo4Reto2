function pagAdminUs() {
    $("#containerPag").load("http://129.151.116.109:8080/pagAdminUs.html", function (data) {
    $(this).html(data);
    })
    console.log("pagAdminUs1")
    cargarDatos()
    console.log("pagAdminUs")
}

function pagCreUs() {
    $("#containerPag").load("http://129.151.116.109:8080/creacionUsuario.html", function (data) {
    $(this).html(data);
    })
    console.log("pagAdminUs1")
    
    console.log("pagAdminUs")
}

function pagAdminProd() {
    $("#containerPag").load("http://129.151.116.109:8080/adminClone.html", function (data) {
    $(this).html(data);
    })
<<<<<<< HEAD
    console.log("adminClone");
    cargarDatos2();
    console.log("adminClone2");
=======
    console.log("adminClone")
    cargarDatos2();
    console.log("pagAdminUs")
>>>>>>> cba6d3f971c2d714b97c6e21700ca15d59dd817f
}
