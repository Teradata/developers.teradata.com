;(function () {
  'use strict'

  var hash = window.location.hash
  find('.tabset').forEach(function (tabset) {
    var active
    var tabs = tabset.querySelector('.tabs')
    if (tabs) {
      var first
      find('li', tabs).forEach(function (tab, idx) {
        var id = (tab.querySelector('a[id]') || tab).id
        var label = (tab.querySelector('a[id]') || tab).parentElement.innerText
        if (!id) return
        var pane = getPane(id, tabset)
        if (!idx) first = { tab: tab, pane: pane }
        if (!active && hash === '#' + id && (active = true)) {
          tab.classList.add('is-active')
          if (pane) pane.classList.add('is-active')
        } else if (!idx) {
          tab.classList.remove('is-active')
          if (pane) pane.classList.remove('is-active')
        }
        tab.addEventListener('click', activateTab.bind({ tabset: tabset, tab: tab, pane: pane, label: label }))
      })
      if (!active && first) {
        first.tab.classList.add('is-active')
        if (first.pane) first.pane.classList.add('is-active')
      }
    }
    tabset.classList.remove('is-loading')
  })

  function activateTab (e) {
    var tab = this.tab
    var pane = this.pane
    var label = this.label
    find('.tabs li').forEach(function (it) {
      if (it.children[0].innerText === label) {
        it.classList.add('is-active');
      } else {
        it.classList.remove('is-active');
      }
    })
    find('.tab-pane').forEach(function (it) {
      if (it.getAttribute('aria-labelledby').includes(label.toLowerCase())) {
        it.classList.add('is-active');
      } else {
        it.classList.remove('is-active');
      }
    })
    e.preventDefault()
  }

  function find (selector, from) {
    return Array.prototype.slice.call((from || document).querySelectorAll(selector))
  }

  function getPane (id, tabset) {
    return find('.tab-pane', tabset).find(function (it) {
      return it.getAttribute('aria-labelledby') === id
    })
  }

  var pageReady = function(callback) {
    document.readyState !== 'loading' ? callback() : document.addEventListener('DOMContentLoaded', callback);
  }
  
  pageReady(function() {
    enableMobileMenu();
    enableTermsModal();
    enableFormSubmission();
  });

  function enableMobileMenu() {
    var navbar = document.querySelector('.navbar');
    var mobileMenuButton = document.querySelector('.header-nav-mobile__menu-icon');
    var pageBody = document.querySelector('body');
    var pageBlackout = document.querySelector('.page-blackout');

    function resetClasses() {
      mobileMenuButton.classList.remove('active');
      pageBody.classList.remove('menu-open');
      pageBlackout.classList.remove('active');
      navbar.classList.remove('active');
    }
    resetClasses();

    mobileMenuButton.addEventListener('click', function(e) {
      e.preventDefault();

      this.classList.toggle('active');
      pageBody.classList.toggle('menu-open');
      pageBlackout.classList.toggle('active');
      navbar.classList.toggle('active');
    })

    var dropdowns = document.querySelectorAll('.header-nav-mobile__menu-item.has-sub-items > header'), i;

    for (i = 0; i < dropdowns.length; ++i) {
      dropdowns[i].addEventListener('click', function (e) {
        if(this == e.target) {
          e.stopPropagation();
          this.parentElement.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-open');
        } else {
          return true;
        }
      })
    }

    function checkWidth() {
      var currentWidth = window.innerWidth;
      var desktopBreakpoint = 1024;

      if (pageBody.classList.contains('menu-open') && currentWidth >= desktopBreakpoint) {
        resetClasses();
      }
    }
    window.addEventListener('resize', checkWidth);
  }

  function enableFormSubmission () {
    var form = document.querySelector('.request-access');

    form.addEventListener('submit', function(e){
      e.preventDefault();
      var formData = new FormData(e.target);
      var data = [...formData.entries()];
      var body = '';

      data.forEach((data)=>{
        body += `${data[0]}=${data[1]}\n`;
      });

      fetch('https://spm5xk5jx8.execute-api.us-east-1.amazonaws.com/prod/sendemail' ,{
        method: 'POST',
        body
      }).then(function(){
        var form = document.querySelector('form.request-access');
        var formConfirmation = document.querySelector('.form-confirmation');

        form.classList.add('hidden')
        formConfirmation.classList.add('visible');

        setTimeout(function(){
          var checkmark = document.querySelector('.circle-loader');
          var hiddenText = document.querySelector('.hidden-text');
          checkmark.classList.add("load-complete");
          hiddenText.classList.add("visible");
        }, 1500);

      });

    })
  }

  function enableTermsModal() {
    var termsLink = document.querySelector('#open-terms');
    var termsModal = document.querySelector('#terms-modal');
    var modalBody = document.querySelector('.modal-body');
    var termsContainer = document.querySelector('.terms-container');
    var closeBtns = document.querySelectorAll('#modal-close, #modal-cancel, #modal-confirm');
  
    termsLink.addEventListener('click', function(e) {
      e.preventDefault();
      termsModal.style.display = "flex";
    });
  
    modalBody.addEventListener('scroll', function() {
      var scrolled = (termsContainer.scrollHeight - this.scrollTop) <= (this.clientHeight + 1);
      document.querySelector('#modal-confirm').disabled = !scrolled;
    });
  
    closeBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        termsModal.style.display = "none";
      });
    });
  }
})()
