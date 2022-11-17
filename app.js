const projects = [
  {
    id: 'project_1',
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['Ruby on rails', 'css', 'JavsScript'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
  {
    id: 'project_2',
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['Python', 'css', 'JavsScript'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
  {
    id: 'project_3',
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['Node', 'css', 'JavsScript'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
  {
    id: 'project_4',
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['Go', 'css', 'JavsScript'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
  {
    id: 'project_5',
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['C++', 'css', 'JavsScript'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
  {
    id: 'project_6',
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['C#', 'css', 'JavsScript'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
];

let formData = {
  'full-name': '',
  email: '',
  message: '',
};

/*
Mobile menu
*/
const mobileMenuIcon = document.getElementById('mobile_menu_icon');
const mobileMenu = document.getElementById('mobile_menu');
const closeMenuIcon = document.getElementById('close_menu_icon');
const mobileLinkList = document.getElementById('mobile_link_list');

mobileMenuIcon.addEventListener('click', () => {
  const { classList } = mobileMenu;
  classList.remove('no-visible');
});

closeMenuIcon.addEventListener('click', () => {
  const { classList } = mobileMenu;
  classList.add('no-visible');
});

mobileLinkList.addEventListener('click', () => {
  const { classList } = mobileMenu;
  classList.add('no-visible');
});

/*
Modal
*/
const modalClose = document.querySelector('.modal-close');
const modal = document.getElementById('modal_container');
const modalName = document.querySelector('.modal-project-name');
const modalDescription = document.querySelector('.modal-project-desc');
const modalSkills = document.getElementById('modal_skills');
const modalLiveLink = document.getElementById('modal_live_link');
const modalRepoLink = document.getElementById('modal_repo_link');
let temporalElement;

document.querySelectorAll('.project-btn').forEach((button) => {
  button.addEventListener('click', (e) => {
    const projectElement = e.currentTarget.parentNode;
    const projectInfo = projects.filter(
      (project) => project.id === projectElement.id,
    )[0];

    modalName.textContent = projectInfo.name;
    modalDescription.textContent = projectInfo.description;
    modalLiveLink.href = projectInfo.linkLive;
    modalRepoLink.href = projectInfo.linkSource;

    modalSkills.innerHTML = '';
    projectInfo.technologies.forEach((skill) => {
      temporalElement = document.createElement('li');
      temporalElement.classList.add('work-skill');
      temporalElement.textContent = skill;
      modalSkills.appendChild(temporalElement);
    });

    modal.classList.remove('no-visible');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.add('no-visible');
});

/*
form validation
*/
document.getElementById('contact-form').addEventListener('submit', (e) => {
  const email = document.getElementById('email');
  const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    document
      .getElementById('email_error_lowercase')
      .classList.remove('no-visible');
  }
});

/*
store form data
*/
window.addEventListener('load', () => {
  formData = JSON.parse(localStorage.getItem('formData'));
  if (localStorage.getItem('formData') != null) {
    document.querySelectorAll('[required]').forEach((formElement) => {
      formElement.value = formData[formElement.id];
    });
  }
});

document.getElementById('contact-form').addEventListener('keyup', (e) => {
  formData[e.target.id] = e.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
