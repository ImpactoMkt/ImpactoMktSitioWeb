function enviarCorreo(){
    // var result="";
    // result +=document.getElementById("idnombre").value
    // result +=document.getElementById("idemail").value
    // result +=document.getElementById("idprovincia").value
    // result +=document.getElementById("idcomentario").value

    // //alert(result);



    // var link = "mailto:willy.casana.s@gmail.com"
    //          + "?cc=willy.casana.s@gmail.com"
    //          + "&subject=" + escape("Consulta Web Impacto Mkt")
    //          + "&body=" + escape(result)
    // ;

    // window.location.href = link;

    var correo = document.getElementById("idemail").value;
    var tema = "Consulta desde Sitio Web Impacto Mkt";
    var cuerpo = document.getElementById("idnombre").value + " de " + document.getElementById("idprovincia").value + " con correo: " 
            + correo + " , consulta: " + document.getElementById("idcomentario").value;

    console.log(correo);
    console.log(tema);
    console.log(cuerpo);

    Email.send({
        Host: "smtp.elasticemail.com",
        Username : "willycasana.soluciones@gmail.com",
        Password : "6A6B41742AF0F45137CA602EF2B8EE3F9CAF",
        To : 'recepcion@impactopromocional-mkt.com',
        From : 'willycasana.soluciones@gmail.com',
        Subject : tema,
        Body : cuerpo,
        }).then(
            message => limpiarCtrls()
        );
}

function limpiarCtrls(){

    document.getElementById("idemail").value="";
    document.getElementById("idnombre").value="";
    document.getElementById("idprovincia").value="";
    document.getElementById("idcomentario").value="";
}