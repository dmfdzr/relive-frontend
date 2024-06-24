export const setupNavbar = () => {
    const button = document.getElementById("hamburger");
    const iconMenu = document.getElementById("icon-menu");
    const iconClose = document.getElementById("icon-close");
    const navMenu = document.getElementById("nav-menu");

    const handleButtonClick = () => {
      navMenu.classList.toggle("hidden");
      iconMenu.classList.toggle("hidden");
      iconClose.classList.toggle("hidden");
    };

    const handleScroll = () => {
      const header = document.querySelector("#navigasi");
      const fixedNav = header.offsetTop;
      console.log(fixedNav);

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    button.addEventListener("click", handleButtonClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      button.removeEventListener("click", handleButtonClick);
      window.removeEventListener("scroll", handleScroll);
    };
};
