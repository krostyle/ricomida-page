$(document).ready(function(){

    //Lanzar Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    //Enviar correo
    $('#enviarCorreo').click(function(){
        alert("El correo fue enviado correctamente...");
    })

    //Cambiar Color
    $('#changeColorIngredientes').on('dblclick',function(){
        let flag=$(this).hasClass('text-danger');
        console.log(flag);
        if(flag){
            $(this).removeClass('text-danger');
            $(this).css('border-bottom','solid 1px black');            
        }else{
            $(this).addClass('text-danger');
            $(this).css('border-bottom','solid 1px red');            
        }

    })

    //Cambiar Color
    $('#changeColorPreparacion').on('dblclick',function(){
        let flag=$(this).hasClass('text-danger');
        console.log(flag);
        if(flag){
            $(this).removeClass('text-danger');
            $(this).css('border-bottom','solid 1px black'); 
        }else{
            $(this).addClass('text-danger');
            $(this).css('border-bottom','solid 1px red');
        }
        

    })

    //Ocultar cartas
    $(".my-card").on('click',function(){
        $(this).toggle();
    })

    
});

