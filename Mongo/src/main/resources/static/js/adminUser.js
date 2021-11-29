function pagAdminUs() {
    $("#containerPag").load("http://localhost:8080/pagAdminUs.html", function (data) {
    $(this).html(data);
    })
    console.log("pagAdminUs1")
    cargarDatos()
    console.log("pagAdminUs")
}


