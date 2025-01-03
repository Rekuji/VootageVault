document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navba');
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