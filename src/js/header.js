fetch('../html/templates/header.html')
  .then(response => response.text())
  .then(templateHTML => {
    const template = Handlebars.compile(templateHTML);

    const data = {
      logoSrc: "../images/itapplogo_color.webp",
      userIconClass: "fa-regular fa-user fa-2xl user-icon",
      menuIconClass: "fa-solid fa-bars fa-2xl menu-icon",
      dropdownClass: "dropdown-menu_off",
      menuItems: [
        { url: "#", text: "Home" },
        { url: "#", text: "News" },
        { url: "#", text: "About" },
        { url: "#", text: "For Employers" },
        { url: "#", text: "For Headhunters" },
      ],
    };

    const renderedHTML = template(data);

    const headerContainer = document.getElementById('header-container');
    headerContainer.innerHTML = renderedHTML;
  })
  .catch(error => console.error(error));
