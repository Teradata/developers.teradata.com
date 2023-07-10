try {
    function buildGlobalNavbar() {
        
        /* Check to ensure it's not already there before adding */
        var checkit = document.getElementsByClassName('header-td-middle')[0];
        
        if (! checkit) {
            
            // Captures existing page elements related to global/mobile nav functionality
            var pageBody = document.querySelector('body');
            var headerInnerWrapper = document.getElementsByClassName('header-inner-wrapper')[0];
            var headerLeftSide = document.getElementsByClassName('header-left-side')[0];
            var headerRightSide = document.getElementsByClassName('header-right-side')[0];
            
            
            /* CREATES NEW ELEMENTS */
            
            // Parent container at peer level of .header-left-side and .header-right-side
            var headerTDMiddle = document.createElement('section');
            headerTDMiddle.className = 'header-td-middle';
            
            // Parent container for Developer link
            var navbarBrand = document.createElement('div');
            navbarBrand.className = 'navbar-brand';
            
            // Mobile menu hamburger button
            var mobileMenuButton = document.createElement('button');
            mobileMenuButton.className = 'header-nav-mobile__menu-icon';
            
            // Parent container for utility nav
            var headerUtility = document.createElement('div');
            headerUtility.className = 'my-header';
            
            // Page blackout overlay when mobile menu is open
            var pageBlackout = document.createElement('div');
            pageBlackout.className = 'page-blackout';
            pageBlackout.setAttribute("aria-hidden", "true");
            pageBlackout.setAttribute("tabindex", "-1");
            
            // Array for all nav links and attributes for easy management
            var navItems =[ {
                "main":[// Main menu items
                {
                    "label": "Developers",
                    "url": "https://www.teradata.com/Developer",
                    "target": "_blank",
                    "nestedLinks":[]
                }, {
                    "label": "Getting Started",
                    "url": "https://quickstarts.teradata.com/",
                    "target": "",
                    "nestedLinks":[]
                }, {
                    "label": "Docs",
                    "url": "https://docs.teradata.com",
                    "target": "",
                    "nestedLinks":[ {
                        "label": "VantageCloud Lake Documentation",
                        "url": "https://docs.teradata.com/p/VantageCloud/Lake",
                        "target": ""
                    }, {
                        "label": "All Documentation",
                        "url": "https://docs.teradata.com/",
                        "target": ""
                    }]
                }, {
                    "label": "Downloads",
                    "url": "https://downloads.teradata.com/",
                    "target": "",
                    "nestedLinks":[]
                }, {
                    "label": "Community",
                    "url": "https://support.teradata.com/community",
                    "target": "",
                    "nestedLinks":[ {
                        "label": "Forums",
                        "url": "https://support.teradata.com/community?id=community_forum_list",
                        "target": ""
                    }, {
                        "label": "Technical Blogs",
                        "url": "https://support.teradata.com/community?id=community_forum&sys_id=c42a7b554f6df300903211ff0310c7d0",
                        "target": ""
                    }]
                }, {
                    "label": "Tcom",
                    "url": "https://www.teradata.com",
                    "target": "",
                    "nestedLinks":[]
                }]
            }, {
                "utility":[// Utility nav items
                {
                    "label": "Visit Teradata.com",
                    "url": "https://teradata.com",
                    "target": "_blank",
                    "nestedLinks":[]
                },
                /* {
                 "label": "Tracking Consent",
                 "url": "#tracking-consent",
                 "target": "",
                 "nestedLinks": []
                 },*/ {
                    "label": "PDFs",
                    "url": "https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=ajy1504730586223.ditamap&amp;dita:topicPath=aka1581368683458.dita",
                    "target": "",
                    "nestedLinks":[]
                }, {
                    "label": "Site Feedback",
                    "url": "mailto: docs@teradata.com",
                    "target": "_blank",
                    "nestedLinks":[]
                }, {
                    "label": "Help",
                    "url": "https://docs.teradata.com/access/sources/dita/map?dita:mapPath=ajy1504730586223.ditamap",
                    "target": "",
                    "nestedLinks":[]
                }]
            }];
            
            // Creates main menu structure to work for both desktop and mobile
            function createMainMenu() {
                
                var staging = 'docs-dev.teradata.com';
                
                var headerMenu = document.createElement('div');
                headerMenu.className = 'header-nav-mobile__menu';
                
                var ul = document.createElement('ul');
                
                // Skips the Developer link
                for (var i = 1; i < navItems[0].main.length -1; i++) {
                    
                    var li = document.createElement('li');
                    li.className = 'header-nav-mobile__menu-item';
                    
                    var header = document.createElement('header');
                    header.className = 'header-nav-mobile__menu-item__header';
                    
                    if (navItems[0].main[i].nestedLinks.length) {
                        header.style.display = 'inline-flex';
                    }
                    
                    var a = document.createElement('a');
                    a.innerHTML = `${navItems[0].main[i].label}`;
                    
                     // Don't set an href value for the DOCS link
                    if (i == 2) {
                       
                    } else {
                        a.setAttribute("href", `${navItems[0].main[i].url}`);
                    }
                    
                    
                    if (navItems[0].main[i].target) {
                        a.setAttribute("target", `${navItems[0].main[i].target}`);
                    }
                    
                    ul.appendChild(li);
                    li.appendChild(header);
                    
                    if (navItems[0].main[i].nestedLinks.length) {
                      
                            var button = document.createElement('button');
                            button.className='navbar-arrow-down';
                            if (i == 2) {
                                button.onmouseover = function () {
                                    var droplist = document.getElementById("docmenu");
                                    
                                    if (droplist.style.display == "none") {
                                        droplist.style.display = "block"; 
                                    } else {
                                        droplist.style.display = "none";
                                    }
                                }
                            } else {
                              //  button.onmouseover = function () { }
                            }
                            var arrow = document.createElement('img');
                            arrow.className = 'navbar-arrow';
                            arrow.src = '/public/images/arrow_drop_down.svg';
                            arrow.alt = 'down arrow';
                            button.appendChild(arrow);
                            header.appendChild(a);
                            if (i == 2) {
                                 header.appendChild(button); 
                            }

                        
                        var div = document.createElement('div');
                        if (i == 2) {
                            div.setAttribute('id', 'docmenu');
                        } else {
                            div.setAttribute('id', 'commenu');
                        }
                        div.style.display = "none";
                        
                        var subItems = document.createElement('div');
                        subItems.className = 'header-nav-mobile__menu-item__links';
                        
                        var nestedUl = document.createElement('ul');
                        
                        for (var j = 0; j < navItems[0].main[i].nestedLinks.length; j++) {
                            var nestedLi = document.createElement('li');
                            
                            var a = document.createElement('a');
                            a.innerHTML = `${navItems[0].main[i].nestedLinks[j].label}`;
                            // DOCS Links - different for staging string.replace(searchValue, newValue)
                            if (i == 2) {
                               if (window.location.href.includes(staging)) {
                                  var docURL = navItems[0].main[i].nestedLinks[j].url;
                                  var stagingURL=docURL.replace('docs.teradata.com','docs-dev.teradata.com');
                                  a.setAttribute("href", stagingURL);
                               } else {
                                  a.setAttribute("href", `${navItems[0].main[i].nestedLinks[j].url}`);
                               }
                            } else {
                               a.setAttribute("href", `${navItems[0].main[i].nestedLinks[j].url}`);
                            } // if docs links
                           
                            if (navItems[0].main[i].nestedLinks[j].target) {
                                a.setAttribute("target", `${navItems[0].main[i].nestedLinks[j].target}`);
                            }
                            
                            nestedUl.appendChild(nestedLi);
                            nestedLi.appendChild(a);
                        }
                        
                        li.appendChild(div);
                        div.appendChild(subItems);
                        subItems.appendChild(nestedUl);
                    } else {
                        header.appendChild(a);
                    }
                    // if sub items
                }
                
                headerTDMiddle.appendChild(headerMenu);
                headerMenu.appendChild(ul);
            }
            createMainMenu();
            
            // Creates Developer and Tcom links using array values
            function createDeveloperLink() {
                
                var a = document.createElement('a');
                a.setAttribute("href", `${navItems[0].main[5].url}`);
                a.setAttribute("target", `${navItems[0].main[5].target}`);
                a.className = 'navbar-item';
                
                var b = document.createElement('img');
                b.setAttribute("src", "https://docs.teradata.com/internal/api/webapp/header/logo?v=b045da61");
                b.setAttribute("alt", "header logo");
                b.className = 'backtohomelogo-image';
                
                var c = document.createElement('a');
                c.innerHTML = `${navItems[0].main[0].label}`;
                c.setAttribute("href", `${navItems[0].main[0].url}`);
                c.setAttribute("target", `${navItems[0].main[0].target}`);
                c.className = 'navbar-item';
                
                navbarBrand.appendChild(a);
                a.appendChild(b);
                navbarBrand.appendChild(c);
            }
            createDeveloperLink();
            
            // Creates hamburger elements for toggle animation
            function createMobileMenuButton() {
                mobileMenuButton.setAttribute("role", "button");
                mobileMenuButton.setAttribute("aria-label", "Click or Press enter to open menu");
                mobileMenuButton.setAttribute("tabindex", "0");
                
                for (let i = 0; i < 4; i++) {
                    var span = document.createElement('span');
                    mobileMenuButton.appendChild(span);
                }
            }
            createMobileMenuButton();
            
            // Creates the .my-header div and child elements to be added inside of .header-inner-wrapper rather than #FT-tenant-custom-header, if possible
            // Adding these elements for the utility nav inside of .header-inner-wrapper allows them to display within the mobile menu
            function createUtilityNav() {
                var headerLeft = document.createElement('div');
                headerLeft.className = 'header-left';
                
                var headerRight = document.createElement('div');
                headerRight.className = 'header-right';
                
                for (var i = 0; i < navItems[1].utility.length; i++) {
                    var a = document.createElement('a');
                    a.innerHTML = `${navItems[1].utility[i].label}`;
                    a.setAttribute("href", `${navItems[1].utility[i].url}`);
                    if (navItems[1].utility[i].target) {
                        a.setAttribute("target", `${navItems[1].utility[i].target}`);
                    }
                    
                    headerRight.appendChild(a);
                }
                
                headerUtility.appendChild(headerLeft);
                headerUtility.appendChild(headerRight);
            }
            createUtilityNav();
            
            /* INJECTS NEW ELEMENTS INTO THE HTML */
            headerRightSide.parentNode.insertBefore(headerTDMiddle, headerRightSide);
            headerLeftSide.appendChild(navbarBrand);
            headerLeftSide.appendChild(mobileMenuButton);
            headerInnerWrapper.appendChild(headerUtility);
            headerInnerWrapper.parentNode.appendChild(pageBlackout);
            
            
            var pageReady = function (callback) {
                document.readyState !== 'loading' ? callback(): document.addEventListener('DOMContentLoaded', callback);
            }
            
            pageReady(function () {
                enableMobileMenu();
            })
            
            // Enables functionality for mobile menu
            function enableMobileMenu() {
                function resetClasses() {
                    mobileMenuButton.classList.remove('active');
                    pageBody.classList.remove('menu-open');
                    pageBlackout.classList.remove('active');
                    headerInnerWrapper.classList.remove('active');
                }
                resetClasses();
                
                mobileMenuButton.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    this.classList.toggle('active');
                    pageBody.classList.toggle('menu-open');
                    pageBlackout.classList.toggle('active');
                    headerInnerWrapper.classList.toggle('active');
                })
                
                var dropdowns = document.querySelectorAll('.header-nav-mobile__menu-item.has-sub-items > header'), i;
                
                for (i = 0; i < dropdowns.length;++ i) {
                    dropdowns[i].addEventListener('click', function (e) {
                        if (this == e.target) {
                            e.stopPropagation();
                            this.parentElement.classList.toggle('active');
                            this.nextElementSibling.classList.toggle('dropdown-open');
                        } else {
                            return true;
                        }
                    })
                }
                
                // Checks screen width and resets open classes on menu
                function checkWidth() {
                    var currentWidth = window.innerWidth;
                    var desktopBreakpoint = 1360;
                    
                    if (pageBody.classList.contains('menu-open') && currentWidth >= desktopBreakpoint) {
                        resetClasses();
                    }
                }
                window.addEventListener('resize', checkWidth);
            }
        }
        // !checkit
    }  // buildGlobalNavbar()

}
catch (err) {
    console.log(err);
}
