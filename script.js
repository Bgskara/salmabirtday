$(window).load(function () {
    $(".tbl-green").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $(".tbl-green").click(function(){
        $('.hover_bkgr_fricc2').show();
     });
     $('.hover_bkgr_fricc2').click(function(){
         $('.hover_bkgr_fricc2').hide();
     });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc2').hide();
    });
});

