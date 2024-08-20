// здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);
  const links = menu.querySelectorAll(`.${params.link}`);

  function scrollToSection(link) {
    console.log(link);
    const href = link.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth"
    });
  }

  function onBtnClick() {
    console.log('click');
    if (window.screen.width <= 1300) {
      btn.classList.toggle(params.activeClass);

      if (
        !menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = "hidden";
        btn.setAttribute("aria-expanded", true);
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute("style");
        btn.setAttribute("aria-expanded", false);
      }
    }
  }

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  btn.setAttribute("aria-expanded", false);
  btn.addEventListener("click", onBtnClick);
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      onBtnClick();
      scrollToSection(this);
    });
  });
}

// здесь мы вызываем функцию и передаем в нее классы наших элементов
setBurger({
  btnClass: "header__burger", // класс бургера
  menuClass: "header__nav", // класс меню
  activeClass: "is-open", // класс открытого состояния
  hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
  link: "header__nav-link"
});

function setSearch(params) {
  const openBtn = document.querySelector(`.${params.openBtnClass}`);
  const search = document.querySelector(`.${params.searchClass}`);
  const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

  search.addEventListener("animationend", function (evt) {
    if (this._isOpened) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      this._isOpened = false;
    } else {
      this._isOpened = true;
    }
  });

  search.addEventListener("click", function (evt) {
    evt._isSearch = true;
  });

  openBtn.addEventListener("click", function (evt) {
    this.disabled = true;

    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    }
  });

  closeBtn.addEventListener("click", function () {
    openBtn.disabled = false;
    search.classList.add(params.hiddenClass);
  });

  document.body.addEventListener("click", function (evt) {
    if (!evt._isSearch && search._isOpened) {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    }
  });
}

setSearch({
  openBtnClass: "js-open-search", // класс кнопки открытия
  closeBtnClass: "js-close", // класс кнопки закрытия
  searchClass: "js-form-btn", // класс формы поиска
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});
