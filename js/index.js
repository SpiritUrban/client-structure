var script = document.createElement('script');
    script.src = 'js/lib/first.js';
    document.getElementsByTagName('head')[0].appendChild(script);

  // http://jquery-docs.ru/
  // $.getScript('js/lib/second.js', function(){ });    

window.onload = function(){

  setInterval(' console.log(counter(1)); console.log(counter()) ', 4000)


  console.log( first.foo2(33)  );    
  console.log( first.x  );    


  app.init = { param1: 123, param2: "Terminator" } ;
  console.log( app.monitor() );

  console.log( app.createTerminator('Spiritual-1') );
  console.log( app.createTerminator('Spiritual-2') );
  console.log( app.createTerminator('Spiritual-3') );
  console.log( app.createTerminator('Spiritual-4') );

}