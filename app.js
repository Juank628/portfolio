const mobileMenuIcon = document.getElementById('mobile_menu_icon');
const mobileMenu = document.getElementById('mobile_menu');
const closeMenuIcon = document.getElementById('close_menu_icon');
const mobileLinkList = document.getElementById('mobile_link_list');

const projects = [
  {
    id: 'first-project',
    name: 'Multi-Post Stories Gain+Glory',
    description: 'asdjoas',
    img: '',
    technologies: [],
    linkLive: '',
    linkSource: ''
  },
  {
    id: 'second-project',
    name: 'Multi-Post Stories Gain+Glory 2',
    description: 'asdjoas',
    img: '',
    technologies: [],
    linkLive: '',
    linkSource: ''
  }
]

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

document.querySelectorAll('.project-btn').forEach((button) => {
  button.addEventListener('click', (e) => {
    const projectElement = e.currentTarget.parentNode
    const projectInfo = projects.filter((project) => project.id === projectElement.id)
    
  })
})


