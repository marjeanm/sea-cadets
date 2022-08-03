//this is for the dynamic nav menu.
const nav = document.getElementById('navBar');
const menu = ['About', 'Join', 'Gallery', 'Contact Us', 'FAQ'];
let nodes = menu.map((menu) => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.href = `#${menu}`;
  a.className = 'scroll-link underline';
  a.innerHTML = menu;
  li.appendChild(a);
  return li;
});
nav.append(...nodes);

//This is for the faq setion click event that displays when clicked and then retracts when clicked agian.
const faq = document.querySelectorAll('.collapse');
for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener('click', function () {
    this.classList.toggle('is-open');

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}
//toggle links for mobile
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
function closeLinks() {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    linksContainer.style.opacity = 1;
  } else {
    linksContainer.style.height = 0;
    linksContainer.style.opacity = 0;
  }
}
navToggle.addEventListener('click', closeLinks);
//
const showMe = document.querySelectorAll('.reveal');
function animate() {
  for (const el of showMe) {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let elementVisiable = 150;
    if (elementTop < windowHeight - elementVisiable) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }
}
window.addEventListener('scroll', animate);

1;
//smooth scroll
const arrow = document.querySelectorAll('.scroll-link');
for (const a of arrow) {
  a.addEventListener('click', clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  console.log(this);
  const href = this.getAttribute('href');
  console.log(href);
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth',
  });
}
