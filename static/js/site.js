  "use strict";
  var languagedir = JSON.parse("\"ltr\"");

  window.onload = function() {



    
    var navCollapseBtn = document.getElementById('navCollapseBtn');
    navCollapseBtn ? navCollapseBtn.addEventListener('click', function(e) {
      var navCollapse = document.querySelector('.navbar__collapse');
      
      if (navCollapse) {
        var dataOpen = navCollapse.getAttribute('data-open');

        if (dataOpen === 'true') {
          navCollapse.setAttribute('data-open', 'false');
          navCollapse.style.maxHeight = 0;
        } else {
          navCollapse.setAttribute('data-open', 'true');
          navCollapse.style.maxHeight = navCollapse.scrollHeight + "px";
        }
      }
    }) : null;
    


    
    var expandBtn = document.querySelectorAll('.expand__button');

    for (let i = 0; i < expandBtn.length; i++) {
      expandBtn[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          this.querySelector('svg').classList.add('expand-icon__right');
          this.querySelector('svg').classList.remove('expand-icon__down');
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          this.querySelector('svg').classList.remove('expand-icon__right');
          this.querySelector('svg').classList.add('expand-icon__down');
        }
      });
    }
    


    
    document.querySelectorAll('.menu__list').forEach(function(elem) {
      if (elem.classList.contains('active')) {
        elem.style.maxHeight = elem.scrollHeight + "px"; 
      }
    });
    
    document.querySelectorAll('.menu__title--collapse').forEach(function(elem) {
      elem.addEventListener('click', function (e) {
        var content = this.nextElementSibling;
        var menuTitleIcon = this.querySelector('.menu__title--icon');
        if (!content) {
          return null;
        }

        var parent = elem.parentNode;
        while (parent.classList.contains('menu__list') && parent.classList.contains('active')) {
          console.log('parent');
          parent.style.maxHeight = 100 * parent.children.length + "px";
          parent = parent.parentNode;
        }

        if (content.style.maxHeight) {
          console.log('null');
          content.style.maxHeight = null;
          content.classList.remove('active');
          menuTitleIcon.classList.add('right');
          
          if (languagedir === 'rtl') {
            menuTitleIcon.classList.remove('downrtl');
          } else {
            menuTitleIcon.classList.remove('down');
          }
        } else {
          console.log('scrollHeight');
          content.style.maxHeight = content.scrollHeight + "px";
          content.classList.add('active');
          menuTitleIcon.classList.remove('right');
          
          if (languagedir === 'rtl') {
            menuTitleIcon.classList.add('downrtl');
          } else {
            menuTitleIcon.classList.add('down');
          }
        }
      });
    });
    


    
    var mobileLogo = document.getElementById('mobileLogo');
    var modal = document.getElementById("myModal");
    var drawer = document.getElementById('myDrawer');
    var drawerCloseBtn = document.querySelector('.drawer__close');

    var openDrawer = function() {
      modal.style.opacity = 1;

      if (languagedir === 'rtl') {
        modal.style.right = 0;
        drawer.style.right = 0;
      } else {
        modal.style.left = 0;
        drawer.style.left = 0;
      }
    }

    var closeDrawer = function() {
      modal.style.opacity = 0;

      if (languagedir === 'rtl') {
        drawer.style.right = '-100%';
      } else {
        drawer.style.left = '-100%';
      }

      
      setTimeout(function () {
        if (languagedir === 'rtl') {
          modal.style.right = '-100%';
        } else {
          modal.style.left = '-100%';
        }
      }, 250);
    }

    mobileLogo.onclick = function () {
      openDrawer();
      localStorage.setItem('isDrawerOpen', 'true');
    }

    modal.onclick = function () {
      closeDrawer();
      localStorage.setItem('isDrawerOpen', 'false');
    }

    drawerCloseBtn.onclick = function () {
      closeDrawer();
      localStorage.setItem('isDrawerOpen', 'false');
    }
  


  
    var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var tocElem = document.querySelector('.toc');
    var tableOfContentsElem = tocElem ? tocElem.querySelector('#TableOfContents') : null;
    var singleContentsElem = document.querySelector('.single__contents');
    var dataBGImgs = document.querySelectorAll('div[data-bgimg]');

    
    var tocLevels = JSON.parse("[\"h2\",\"h3\",\"h4\"]");

    if (tocLevels) {
      tocLevels = tocLevels.toString();
    } else {
      tocLevels = "h1, h2, h3, h4, h5, h6";
    }

    
    var isLandingBgImg = JSON.parse("null");
    
    var isHome = JSON.parse("true");

    function setNavbarBG(scrollTop) {
      if (isHome && isLandingBgImg && Object.keys(isLandingBgImg).length) {
        if (isLandingBgImg.height <= scrollTop) {
          dataBGImgs.forEach(function(elem) {
            elem.setAttribute('data-bgimg', 'false');
          });
        } else {
          dataBGImgs.forEach(function (elem) {
            elem.setAttribute('data-bgimg', 'true');
          });
        }
      }
    }
    setNavbarBG(lastScrollTop);

    window.onscroll = function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) { 
        singleContentsElem ? 
        singleContentsElem.querySelectorAll(tocLevels.toString()).forEach(function(elem) {
          if (document.documentElement.scrollTop >= elem.offsetTop) {
            if (tableOfContentsElem) {
              var id = elem.getAttribute('id');
              tocElem.querySelectorAll('a').forEach(function (elem) {
                elem.classList.remove('active');
              });
              tocElem.querySelector('a[href="#' + id + '"]') ? 
              tocElem.querySelector('a[href="#' + id + '"]').classList.add('active') : null;
            }
          }
        }) : null;
        setNavbarBG(st);
      } else { 
        singleContentsElem ? 
        singleContentsElem.querySelectorAll(tocLevels.toString()).forEach(function(elem) {
          if (document.documentElement.scrollTop >= elem.offsetTop) {
            if (tableOfContentsElem) {
              var id = elem.getAttribute('id');
              tocElem.querySelectorAll('a').forEach(function (elem) {
                elem.classList.remove('active');
              });
              tocElem.querySelector('a[href="#' + id + '"]') ? 
              tocElem.querySelector('a[href="#' + id + '"]').classList.add('active') : null;
            }
          }
        }) : null;
        setNavbarBG(st);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
    
  }
  
  var menuTitle = document.querySelectorAll('.menu__title');
  var modal = document.getElementById("myModal");
  var drawer = document.getElementById('myDrawer');

  var closeDrawer = function () {
    setTimeout(function () {
      modal.style.opacity = 0;
      drawer.style.left = '-100%';
      modal.style.left = '-100%';
    }, 250);
  }

  menuTitle ? 
  menuTitle.forEach(function(elem) {
    elem.onclick = function() {
      closeDrawer();
      localStorage.setItem('isDrawerOpen', 'false');
    }
  }) : null;
  
   var isDrawerOpen = localStorage.getItem('isDrawerOpen');
  var modal = document.getElementById("myModal");
  var drawer = document.getElementById('myDrawer');
  
  
  var languagedir = JSON.parse("\"ltr\"");

  var openDrawer = function () {
    modal.style.opacity = 1;
    
    if (languagedir === "rtl") {
      modal.style.right = 0;
      drawer.style.right = 0;
    } else {
      modal.style.left = 0;
      drawer.style.left = 0;
    }
  }

  if (isDrawerOpen && isDrawerOpen === 'true') {
    openDrawer();
  }
  
  var siteLogo = document.getElementById('siteLogo');
  var tabletLogo = document.getElementById('tabletLogo');
  var mobileLogo = document.getElementById('mobileLogo');
  var navMenu = document.getElementById('navMenu');
  var navMenuMobile = document.getElementById('navMenuMobile');
  
  
  
  enquire.register("screen and (max-width:1280px)", {
    match: function () {
      siteLogo.className = 'navbar__logo--wrapper';
      tabletLogo.className = 'hide';
      mobileLogo.className = 'hide';
      navMenu.className = 'navbar__menu';
      navMenuMobile.className = 'hide';
      
      
    },
    unmatch: function () {
      siteLogo.className = 'navbar__logo--wrapper';
      tabletLogo.className = 'hide';
      mobileLogo.className = 'hide';
      navMenu.className = 'navbar__menu';
      navMenuMobile.className = 'hide';
      
      
    },
  }).register("screen and (max-width:960px)", {
    match: function () {
      siteLogo.className = 'hide';
      tabletLogo.className = '';
      mobileLogo.className = 'hide';
      navMenu.className = 'navbar__menu';
      navMenuMobile.className = 'hide';
      
      
    },
    unmatch: function () {
      siteLogo.className = 'navbar__logo--wrapper';
      tabletLogo.className = 'hide';
      mobileLogo.className = 'hide';
      navMenu.className = 'navbar__menu';
      navMenuMobile.className = 'hide';
      
      
    },
  }).register("screen and (max-width:600px)", {
    match: function () {
      siteLogo.className = 'hide';
      tabletLogo.className = 'hide';
      mobileLogo.className = '';
      navMenu.className = 'hide';
      navMenuMobile.className = '';
      
      
    },
    unmatch: function () {
      siteLogo.className = 'hide';
      tabletLogo.className = '';
      mobileLogo.className = 'hide';
      navMenu.className = 'navbar__menu';
      navMenuMobile.className = 'hide';
      
      
    },
  });

  
  var listSide = document.getElementById('list-side');
  var listMain = document.getElementById('list-main');
  var singleMenu = document.getElementById('single-menu');

  if(!singleMenu){
    singleMenu = document.getElementById('list-menu');
  }


  enquire.register("screen and (max-width:1280px)", {
    match: function () {
      listSide.className = 'r';
      listMain.className = 'm';
      singleMenu.className = 'l';
    },
    unmatch: function () {
      listSide.className = 'r';
      listMain.className = 'm';
      singleMenu.className = 'l';
    },
  }).register("screen and (max-width:960px)", {
    match: function () {
      listSide.className = 'hide';
      listMain.className = 'mr';
      singleMenu.className = 'l';
    },
    unmatch: function () {
      listSide.className = 'r';
      listMain.className = 'm';
      singleMenu.className = 'l';
    },
  }).register("screen and (max-width:600px)", {
    match: function () {
      listSide.className = 'hide';
      listMain.className = 'lmr';
      singleMenu.className = 'hide';
    },
    unmatch: function () {
      listSide.className = 'hide';
      listMain.className = 'mr';
      singleMenu.className = 'l';
      
    },
  });
