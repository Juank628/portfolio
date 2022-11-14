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
