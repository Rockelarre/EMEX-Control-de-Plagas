// Esta función sirve para opacar el backgrond del navbar
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-white" );
       $("#navbar").removeClass( "navbar-dark" ).addClass( "navbar-light" );
       /* $("#navbar").removeClass( "text-white" ).addClass( "text-black" ); */
});

// Esta función sirve para opacar el background del menú desplegable al apretar el botón hamburguesa
$("#btn-nav").click(function(){
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-light" );
       $("#navbar").removeClass( "navbar-dark" ).addClass( "navbar-light" );
});