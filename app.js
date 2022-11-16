const projects = [
  {
    id: 'project_1',
    name: 'Multi-Post Stories Gain+Glory 1',
    description: 'This is my 1st project',
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['Ruby on rails', 'css', 'JavsScript', 'html'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
  {
    id: 'project_2',
    name: 'Multi-Post Stories Gain+Glory 2',
    description: 'This is my 2nd project',
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['Python', 'css', 'JavsScript', 'html'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
  {
    id: 'project_3',
    name: 'Multi-Post Stories Gain+Glory 3',
    description: 'This is my 3th project',
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['Node', 'css', 'JavsScript', 'html'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
  {
    id: 'project_4',
    name: 'Multi-Post Stories Gain+Glory 4',
    description: 'This is my 4th project',
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['Go', 'css', 'JavsScript', 'html'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
  {
    id: 'project_5',
    name: 'Multi-Post Stories Gain+Glory 5',
    description: 'This is my 5th project',
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['C++', 'css', 'JavsScript', 'html'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
  {
    id: 'project_6',
    name: 'Multi-Post Stories Gain+Glory 6',
    description: 'This is my 6th project',
    img: './img/snapshoot_portfolio_template.png',
    technologies: ['C#', 'css', 'JavsScript', 'html'],
    linkLive: 'https://juank628.github.io/portfolio/',
    linkSource: 'https://github.com/Juank628/portfolio',
  },
];

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
const modalImg = document.getElementById('modal_img');
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

    modalImg.src = projectInfo.img;
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
