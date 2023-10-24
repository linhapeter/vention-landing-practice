fetch('../html/templates/footer.html')
  .then(response => response.text())
  .then(templateHTML => {
    const template = Handlebars.compile(templateHTML);

    const data = {
      companyLinks: [
        { url: "#", text: "Home" },
        { url: "#", text: "About I-TAPP" },
        { url: "#", text: "News" },
        { url: "#", text: "Terms and Conditions" },
        { url: "#", text: "Privacy Policy" },
      ],
      jobsLinks: [
        { url: "#", text: "For Candidates" },
        { url: "#", text: "For Employers" },
        { url: "#", text: "For Headhunters" },
      ],
      itappInfo: [
        { text: "© 2021 I-TAPP" },
        { text: "All rights reserved" },
      ],
    };

    const renderedHTML = template(data);

    const footerContainer = document.getElementById('footer-container');
    footerContainer.innerHTML = renderedHTML;
  })
  .catch(error => console.error(error));