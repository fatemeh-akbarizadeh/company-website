$('#filters a').click(function(){
   let filterData=$(this).data('filter');

   $(' #filters a').removeClass('active');
   $(this).addClass('active');

   if( filterData==='all'){
    $('.product').fadeIn(200);}
    else{
        $('.product').hide().filter('.'+filterData).fadeIn(200)

    }
    return false;
})