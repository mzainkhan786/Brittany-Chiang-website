const Upstatement = document.querySelector('.Upstatement');
const Apple = document.querySelector('.Apple');
const Scout2 = document.querySelector('.Scout2');
const Scout = document.querySelector('.Scout');
const Starry = document.querySelector('.Starry');
const MullenLowe = document.querySelector('.MullenLowe');
const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const para3 = document.querySelector('.para3');
const logospan = document.querySelector('.blue-span');
const headspan = document.querySelector('.simple-span');
const date = document.querySelector('.second-date');

// // const hii = 'zain';
Scout.addEventListener('click', function () {
  headspan.textContent = 'Studio Developer';
  Scout.style.color = '#64ffda';

  logospan.textContent = '@Scout';
  date.textContent;
  para1.textContent =
    'Worked with a team of three designers to build a marketing website and e-commerce platform for ';
  para2.textContent =
    'Helped solidify a brand direction for blistabloc that spans both packaging and web';
  para3.textContent =
    'Interfaced with clients on a weekly basis, providing technological expertise';
});
Apple.addEventListener('click', function () {
  Apple.style.color = '#64ffda';

  headspan.textContent = 'UI Engineer Co-op ';
  logospan.textContent = '@Apple';
  date.textContent = 'July - December 2017  ';
  para1.textContent =
    'Developed and styled interactive wWorked with a team of three designers to build a marketing website and e-commerce platform for eb applications for Apple Music using Ember and SCSS';
  para2.textContent =
    'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations';
  para3.textContent =
    'Interfaced with clients on a weekly basis, providing technological expertise';
});

Scout2.addEventListener('click', function () {
  Scout2.style.color = '#64ffda';

  headspan.textContent = 'Developer';
  logospan.textContent = '@ Scout Studio  ';
  date.textContent = 'Spring 2016 & 2017  ';
  para1.textContent =
    'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community    ';
  para2.textContent =
    'Built and delivered technical solutions according to stakeholder business requirements    ';
  para3.textContent =
    'Interfaced with clients on a weekly basis, providing technological expertise';
});

MullenLowe.addEventListener('click', function () {
  MullenLowe.style.color = '#64ffda';

  headspan.textContent = 'Creative Technologist Co-op ';
  logospan.textContent = '@ MullenLowe ';
  date.textContent = 'July - December 2015  ';
  para1.textContent =
    'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery    ';
  para2.textContent =
    'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness    ';
  para3.textContent =
    'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more    ';
});

Starry.addEventListener('click', function () {
  Starry.style.color = '#64ffda';
  // Starry.style.borderLeft = 'thick solid  #64ffda';

  headspan.textContent = 'Software Engineer Co-op    ';

  logospan.textContent = '@ Starry';
  date.textContent = 'July - December 2016  ';
  para1.textContent =
    'Engineered and improved major features of Starrys customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and  ';
  para2.textContent =
    'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router    ';
  para3.textContent =
    'Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps    ';
});
