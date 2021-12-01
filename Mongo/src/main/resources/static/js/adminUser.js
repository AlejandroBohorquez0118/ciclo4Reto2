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
    console.log("adminClone");
    cargarDatos2();
    console.log("adminClone2");

}
