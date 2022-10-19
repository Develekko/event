let countDownDate = new Date("Dec 7, 2022").getTime();
let timer = setInterval(countDown, 1000);
$('.caption span').click(openNav);
$('.closebtn').click(closeNav);
$(window).scroll(backToTop);
$('html,body').keydown(closeByEsc);
$(document).ready(accordion);
$('textarea').on('input', validationTextarea);
$('#nav li a').click(navGetSection);
$('#colorPicker i').click(colorPicker)


//  ====================== implemntaions ====================
function openNav(){
    if ($("#nav").width() == "250") {
        closeNav();
    } else {
        $("#nav").width("250px");
        $(".caption").css("margin-left", "250px");
    }
}
function closeNav() {
    $("#nav").width("0px");
    $(".caption").css("margin-left", "0px");
}
function closeByEsc(e)
{
    if(e.key == "Escape")
    {
        closeNav()
    }
}
function accordion(){
    $('#singers div:first').slideDown(1000);
    $('#singers h3').click(function(){
        $("#singers div").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(1000);
    })
}
function countDown()
{
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((distance % (1000 * 60)) / 1000);
    $('#countDown .days').html(`${days} D`);
    $('#countDown .hours').html(`${hours} h`);
    $('#countDown .min').html(`${min} m`);
    $('#countDown .sec').html(`${sec} s`)
    if (distance < 0) {
    clearInterval(timer);
    $('#countDown .container').html("<h1>Party is Ready</h1>")
    }
}
function validationTextarea()
{
    let charLength = $('textarea').val().length
    if(charLength > 100)
    {
        $('.form-counter').html("<h3>Maximum Length is 100 </h3>");
        $('.form-counter h3').css("color"," rgb(214, 46, 51)");
        $('#char').css("color"," rgb(214, 46, 51)");
        $(":focus").css("border-color"," rgb(214, 46, 51)")
        $(`form button`).mouseenter(formButtonValidation);
        $('form button').addClass('animate__shakeX bg-danger buttonFormActive');
    }
    else if($('textarea').val()=="")
    {
        $('.form-counter').html(`<span id="char">100</span> Character Available`);
        $('#char').css("color","#777");
        $(":focus").css("border-color","#CED4DA");
    }
    else
    {
        $('.form-counter').html(`<span id="char">100</span> Character Remaining`);
        $('form #char').html(100-charLength);
        $(":focus").css("border-color","#009515");
        $('#char').css("color","#009515");
        $(`form button`).css({"marginLeft":"0px"})
        $('form button').off('mouseenter', formButtonValidation);
        $('form button').removeClass('animate__shakeX bg-danger buttonFormActive');
    }
}
function formButtonValidation(){
    let buttonLocation =  $(`form button`).css("marginLeft")
        if(buttonLocation == "250px")
        {
           $(`form button`).css({"marginLeft":"0px"})
        }
        else
        {
           $(`form button`).css({"marginLeft":"250px"})
        }
       $(`form button`).keydown(function(e){
           if(e.key == "Enter")
           {
               event.preventDefault()
           }
       })
}
function navGetSection()
{
    let section = $(this).attr("section")
    let sectionLocation = $(section).offset().top
    console.log(sectionLocation);
    $(window).scrollTop(sectionLocation);
}
function backToTop()
{
    if (window.pageYOffset > 100) {
        $('#back-to-top').addClass("active")
        } else {
        $('#back-to-top').removeClass("active")   
    }
}
function colorPicker()
{
    let ulSize  = $('#colorPicker .allUl').outerWidth(true);
    console.log(ulSize);
    if( $('#colorPicker').css("marginRight") == "80px")
    {
        $('#colorPicker').animate({'marginRight':'0px'});

    }else
    {
        $('#colorPicker').animate({'marginRight':ulSize});
    }
    $('#colorPicker li').click(function(){
        let currentColor = $(this).css("backgroundColor");
        console.log($(':root'));
        $(':root').css('--main-color', currentColor);
    })
}