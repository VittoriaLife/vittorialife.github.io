
jQuery(window).scroll(function(){
  let $sections = $('section');
$sections.each(function(i,el){
  let top  = $(el).offset().top-100;
  let bottom = top +$(el).height();
  let scroll = $(window).scrollTop();
  let id = $(el).attr('id');
if( scroll > top && scroll < bottom){
  $('a.site-list__link.active-link').removeClass('active-link');
  $('a.site-list__link[href="#'+id+'"]').addClass('active-link');
 }
})
});

$("nav").on("click","a", function (event) {
 // исключаем стандартную реакцию браузера
 event.preventDefault();

 // получем идентификатор блока из атрибута href
 let id  = $(this).attr('href'),

 // находим высоту, на которой расположен блок
     top = $(id).offset().top;
  
 // анимируем переход к блоку, время: 800 мс
 $('body,html').animate({scrollTop: top}, 800);
}); 

// <!-- main-navigation--no-js -->