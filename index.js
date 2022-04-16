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