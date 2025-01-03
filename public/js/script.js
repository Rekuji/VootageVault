document.addEventListener('DOMContentLoaded', function() {
  console.log('Document is ready!');

  const navbar = document.querySelector('.navba');
  if (!navbar) {
      console.error('Navbar element not found');
      return;
  }

  document.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
          navbar.classList.remove('navba-transparent');
          navbar.classList.add('navba-solid');
      } else {
          navbar.classList.remove('navba-solid');
          navbar.classList.add('navba-transparent');
      }
  });

  document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navba');
    if (window.scrollY > 50) {
      navbar.classList.remove('navba-transparent a');
      navbar.classList.add('navba-solid a');
    } else {
      navbar.classList.remove('navba-solid a');
      navbar.classList.add('navba-transparent a');
    }
  });

  const images = document.querySelectorAll('.clickable-image');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img id="modal-image" src="" alt="Image Preview">
      <a id="download-link" href="" download class="btn btn-primary">Download</a>
    </div>
  `;
  document.body.appendChild(modal);

  const modalImage = document.getElementById('modal-image');
  const downloadLink = document.getElementById('download-link');
  const closeModal = modal.querySelector('.close');

  images.forEach(image => {
    image.addEventListener('click', function () {
      if (document.querySelector('meta[name="user-logged-in"]').content === 'true') {
        modalImage.src = this.src;
        downloadLink.href = this.src;
        modal.style.display = 'block';
      } else {
        window.location.href = '/login';
      }
    });
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

});

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});
