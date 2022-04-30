$(window).scroll(()=>{
    if($(window).scrollTop()){
        $("nav").removeClass("bg-transparent");
        $("nav").addClass("bg-light", 500);
        $(".nav-link").addClass("text-black");
        $(".nav-link").removeClass("text-white");
    }
    else{
        $("nav").addClass("bg-transparent", 500);
        $("nav").removeClass("bg-light");
        $(".nav-link").addClass("text-white");
        $(".nav-link").removeClass("text-black");
    }
})

$(document).ready(function () {
    $("#regform").validate({
        rules: {
            mail: {
                required: true,
                email: true,
            },
            names: {
                required: true,
                minlength: 3,
                lettersonly: true,
            },
            phonum: {
                required: true,
                maxlength: 14,
                pattern: "^[0][8][0-9]*$",
            },
            list: {
                required: true,
            }
        }
    })
});

// $(document).on('input','#inputphonum',function(){
//     var phone=$('#inputphonum').val();
//     if(phone.indexOf('0')!==0){
//         alert('First number must be 0');
//         $('#inputphonum').val('');
//     }
// });