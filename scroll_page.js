let page = 0;
let limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
             document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let done = Math.round(limit/vh)-1;

let clock = 0;
window.onwheel = function () {
  //console.log(clock);
  if(clock == 0){
  clock = 1;
  
  let pos = event.deltaY;
  let scroll=0;  
  //console.log(event.deltaY);
  //console.log(scroll);
      let go = (event.deltaY < 0 ) ? -1 : +1;
      page = page + go;
      if(page < 0 )page = 0;
      if(page > done) page = done;
      //console.log(page);
              
$('html, body').animate({
  scrollTop: vh*page
});
  setTimeout(function(){clock = 0}, 1000);
 
}
}