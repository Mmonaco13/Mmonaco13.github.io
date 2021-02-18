$( document ).ready(function() {
  let root = document.documentElement;

  let color = Math.floor(Math.random() * 10);
  switch(color) {
    case 0:
      root.style.setProperty('--accent', '#922B21'); // red
      break;
    case 1:
      root.style.setProperty('--accent', '#9B59B6'); // purple
      break;
    case 3:
      root.style.setProperty('--accent', '#1F618D'); // blue
      break;
    case 4:
      root.style.setProperty('--accent', '#148F77'); // sea blue
      break;
    case 5:
      root.style.setProperty('--accent', '#1E8449'); // green
      break;      
    case 6:
      root.style.setProperty('--accent', '#B7950B'); // yellow
      break; 
    case 7:
      root.style.setProperty('--accent', '#AF601A'); // orange
      break; 
    case 8:
      root.style.setProperty('--accent', '#FA8072'); // salmon
      break; 
    case 9:
      root.style.setProperty('--accent', '#808000'); // olive
      break; 
    default:
      root.style.setProperty('--accent', '#FA8072');
  }

  $(".navbar-vert").hide();

  $(function () {
		$(window).scroll(function () {
      // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 700) {
				$('.navbar-vert').fadeIn();
			} else {
				$('.navbar-vert').fadeOut();
			}
		});
	});
});