const devCarts = document.getElementById('dev-carts');

const cartsData = [
  {
    id: '1',
    name: 'Abdul Ali Noori',
    title: 'Full-Stack Developer',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    img: 'images/dev-abdulali.jpg',
  },
  {
    id: '2',
    name: 'Ali Akbar Sazish',
    title: 'Backed Developer',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    img: 'images/dev-sazish.jpg',
  },
  {
    id: '3',
    name: 'Ali Jan Rahimi',
    title: 'Frontend Developer',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    img: 'images/dev-abdulali.jpg',
  },
  {
    id: '4',
    name: 'Abdul Ali Noori',
    title: 'Full-Stack Developer',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    img: 'images/dev-abdulali.jpg',
  },
  {
    id: '5',
    name: 'Ali Akbar Sazish',
    title: 'Backed Developer',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    img: 'images/dev-sazish.jpg',
  },
  {
    id: '6',
    name: 'Ali Jan Rahimi',
    title: 'Frontend Developer',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias omnis non consequuntur.',
    img: 'images/dev-abdulali.jpg',
  },
];

function generatProjectCarts() {
  devCarts.innerHTML = cartsData.map((x) => {
    const {
      id, name, title, bio, img,
    } = x;
    if (id > 2) {
      return `
      <div class="dev-cart hidden" id="${id}">
        <span>
            <img src="${img}" width="100" alt="Developer image" class="dev-imge">
        </span>
        <div class="dev-details">
            <h3 class="dev-name">${name}</h3>
            <span class="dev-title">${title}</span>
            <p class="dev-bio">${bio}</p>
          </div>
        </div>
      `;
    }
    return `
      <div class="dev-cart" id="${id}">
        <span>
            <img src="${img}" width="100" alt="Developer image" class="dev-imge">
        </span>
        <div class="dev-details">
            <h3 class="dev-name">${name}</h3>
            <span class="dev-title">${title}</span>
            <p class="dev-bio">${bio}</p>
          </div>
        </div>
        `;
  }).join('');
}

generatProjectCarts();

// ----------------------------less and more toggle-------------------------------------

// --------------------------------toggle menu-------------------------------------------

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBranding = document.querySelector('.nav-branding');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBranding.classList.toggle('active');
});

document.querySelectorAll('.nav-link')
  .forEach((links) => links.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));
