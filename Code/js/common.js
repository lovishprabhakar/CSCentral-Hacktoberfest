var header_info = document.querySelector('#header_info');
var header_list = document.querySelector('#header_list');

header_info.innerHTML =
  'CS Central collects data from around the world and organises it into networks of user touchpoints around certain themes, producing user-friendly results. There will be some exciting new features coming soon.';
header_list.innerHTML = `<li><a target="_blank" href="https://www.linkedin.com/in/lovish-prabhakar-558855147/" class="text-white"><i class="bi bi-linkedin"></i> Follow on LinkedIn</a></li>`;

// Preloader Code
document.addEventListener('load', preLoader());

function preLoader() {
  $('#preloader').delay(2000).fadeOut(1000);
  $('body').removeClass('loading');
}

document.getElementById('myFooter').innerHTML =
  "<p id='credits'>Made with <i class='fa fa-heart'></i> by Contributors</p>";
