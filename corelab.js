var i=0;var interval_id=0;$(document).ready(function(){alert('ok');
  var a='<img src="https://mamaungan.github.io/unisa.jpg"><h1>Unisa Bandung</h1><p>Universitas Aisyiyah Bandung</p><a href="#" id="a">Klik untuk melanjutkan</a><i id="i"></i>';alert(a);
  $('center').html(a);
  alert(a);
  r()
});$(window).blur(function(){clearInterval(interval_id);i=0;interval_id=0;}).focus(function(){r();});function r(){if(!interval_id)interval_id=setInterval(function(){if(i==5){$("#a").trigger("click");clearInterval(interval_id);}i++;},1000);}$("#a").click(function(event){$("center").fadeOut(3000);event.preventDefault();grecaptcha.ready(function(){grecaptcha.execute('6LckJx8qAAAAAFTGYpwg56_LTJQ260t_YIAKnLc-',{action:'submit'}).then(function(token){$.post('/',{token:token},function(data){if(data=='ok')document.location.reload()})});});});
