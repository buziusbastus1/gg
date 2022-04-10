const body = document.querySelector('body')

// Get the modal
const modal = document.getElementById('myModal')
const modal1 = document.getElementById('myModal1')

// Get the button that opens the modal
const btn = document.getElementById('myBtn')
const btn1 = document.getElementById('myBtn1')

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0]
const span1 = document.getElementsByClassName('close1')[0]

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block'
  body.style.overflow = 'hidden'
}

btn1.onclick = function () {
  modal1.style.display = 'block'
  body.style.overflow = 'hidden'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
  body.style.overflow = 'auto'
}
span1.onclick = function () {
  modal1.style.display = 'none'
  body.style.overflow = 'auto'
}

const menu = [
  {
    id: 1,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/045-pokłonV-min.jpg',
    anchor: './images/rysz/gips/045-pokłonV-min.jpg'
  },
  {
    id: 2,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/046początekVII-min.jpg',
    anchor: './images/rysz/gips/046początekVII-min.jpg'
  },
  {
    id: 3,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/051poklonVII-min.jpg',
    anchor: './images/rysz/gips/051poklonVII-min.jpg'
  },
  {
    id: 4,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/078drugielatoM-min.jpg',
    anchor: './images/rysz/gips/078drugielatoM-min.jpg'
  },
  {
    id: 5,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/079n-min.jpg',
    anchor: './images/rysz/gips/079n-min.jpg'
  },
  {
    id: 6,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/082n-min.jpg',
    anchor: './images/rysz/gips/082n-min.jpg'
  },
  {
    id: 7,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/083zaleziskoVn-min.jpg',
    anchor: './images/rysz/gips/083zaleziskoVn-min.jpg'
  },
  {
    id: 8,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/084zbliżenie-min.jpg',
    anchor: './images/rysz/gips/084zbliżenie-min.jpg'
  },
  {
    id: 9,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/088ciszaduzy1-min.jpg',
    anchor: './images/rysz/gips/088ciszaduzy1-min.jpg'
  },
  {
    id: 10,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/089skupienie-min.jpg',
    anchor: './images/rysz/gips/089skupienie-min.jpg'
  },
  {
    id: 11,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/093szeptszetow-1-min.jpg',
    anchor: './images/rysz/gips/093szeptszetow-1-min.jpg'
  },
  {
    id: 12,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/103opresja-min.jpg',
    anchor: './images/rysz/gips/103opresja-min.jpg'
  },
  {
    id: 13,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/045-pokłonV-min.jpg',
    anchor: './images/rysz/gips/045-pokłonV-min.jpg'
  },
  {
    id: 14,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/124cmykprzedmiotpozn-min.jpg',
    anchor: './images/rysz/124cmykprzedmiotpozn-min.jpg'
  },
  {
    id: 15,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/125rzekZnikPrzedmiotuII-min.jpg',
    anchor: './images/rysz/gips/125rzekZnikPrzedmiotuII-min.jpg'
  },
  {
    id: 16,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/130WyodrSygnałuVI-min.jpg',
    anchor: './images/rysz/gips/130WyodrSygnałuVI-min.jpg'
  },
  {
    id: 17,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/132ndokonywaniewybory-min.jpg',
    anchor: './images/rysz/gips/132ndokonywaniewybory-min.jpg'
  },
  {
    id: 18,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/143pozornharV-min.jpg',
    anchor: './images/rysz/gips/143pozornharV-min.jpg'
  },
  {
    id: 19,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/145pozornaharmoniaVII-min.jpg',
    anchor: './images/rysz/gips/145pozornaharmoniaVII-min.jpg'
  },
  {
    id: 20,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/146urzeczywistnienieI-min.jpg',
    anchor: './images/rysz/gips/146urzeczywistnienieI-min.jpg'
  },
  {
    id: 21,
    title: 'buttermilk',
    category: 'gipsoryt',
    img: './images/rysz/gips/148nurzeczywistnienieI-min.jpg',
    anchor: './images/rysz/gips/148nurzeczywistnienieI-min.jpg'
  },
  {
    id: 22,
    title: 'bison steak',
    category: 'gipsoryt',
    img: './images/rysz/gips/149upamiętnienieI-min.jpg',
    anchor: './images/rysz/gips/149upamiętnienieI-min.jpg'
  },
  {
    id: 23,
    title: 'powrót',
    category: 'cyfrowa',
    img: './images/rysz/fyf/151powrót-min(1).jpg',
    anchor: './images/rysz/fyf/151powrót-min(1).jpg'
  },
  {
    id: 24,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/179inni-min.jpg',
    anchor: './images/rysz/fyf/179inni-min.jpg'
  },
  {
    id: 25,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/221milczenieII-min.jpg',
    anchor: './images/rysz/fyf/221milczenieII-min.jpg'
  },
  {
    id: 26,
    title: 'milczenie III',
    category: 'cyfrowa',
    img: './images/rysz/fyf/222milczenieIII-1-min.jpg',
    anchor: './images/rysz/fyf/222milczenieIII-1-min.jpg'
  },
  {
    id: 27,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/228szeptyIX-1-min.jpg',
    anchor: './images/rysz/fyf/228szeptyIX-1-min.jpg'
  },
  {
    id: 28,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/229intencjaII-min.jpg',
    anchor: './images/rysz/fyf/229intencjaII-min.jpg'
  },
  {
    id: 29,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/240oswięcimskiDzieńZadusznyII-min.jpg',
    anchor: './images/rysz/fyf/240oswięcimskiDzieńZadusznyII-min.jpg'
  },
  {
    id: 30,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/241oswięcimskiDZIIIRGB-min.jpg',
    anchor: './images/rysz/fyf/241oswięcimskiDZIIIRGB-min.jpg'
  },
  {
    id: 31,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/243wyodrSygnałuIX10-min.jpg',
    anchor: './images/rysz/fyf/243wyodrSygnałuIX10-min.jpg'
  },
  {
    id: 32,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/244wyodrSygnałuX10-min.jpg',
    anchor: './images/rysz/fyf/244wyodrSygnałuX10-min.jpg'
  },
  {
    id: 33,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/245wyodrSygnałuXI-min.jpg',
    anchor: './images/rysz/fyf/245wyodrSygnałuXI-min.jpg'
  },
  {
    id: 34,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/291wspólnapręgaXV-min.jpg',
    anchor: './images/rysz/fyf/291wspólnapręgaXV-min.jpg'
  },
  {
    id: 35,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/361oczyszczenieII-1-min.jpg',
    anchor: './images/rysz/fyf/361oczyszczenieII-1-min.jpg'
  },
  {
    id: 36,
    title: 'bison steak',
    category: 'cyfrowa',
    img: './images/rysz/fyf/362oczyszczenieIII-1-min.jpg',
    anchor: './images/rysz/fyf/362oczyszczenieIII-1-min.jpg'
  }
]
// get parent element
const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')
// display all items when page loads
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems(menu)
  displayMenuButtons()
})

function diplayMenuItems (menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <a data-pswp-src=${item.anchor} data-pswp-width="1500"  data-pswp-height="2100">
          <img src=${item.img} alt="${item.title}" class="photo "  />
          </a>
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              
            </header>
           
          </div>
        </article>`
  })
  displayMenu = displayMenu.join('')
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu
}
function displayMenuButtons () {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      return values
    },
    ['wszystkie']
  )
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`
    })
    .join('')

  btnContainer.innerHTML = categoryBtns
  const filterBtns = btnContainer.querySelectorAll('.filter-btn')
  console.log(filterBtns)

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem
        }
      })
      if (category === 'wszystkie') {
        diplayMenuItems(menu)
      } else {
        diplayMenuItems(menuCategory)
      }
    })
  })
}

const menu1 = [
  {
    id: 1,
    title: 'sennik pomarańcze',
    category1: 'cyfrowa',
    img: './images/jad/cyf/38_sennikipomarancze.jpg',
    anchor: './images/jad/cyf/38_sennikipomarancze.jpg'
  },
  {
    id: 2,
    title: 'diner doublee',
    category1: 'cyfrowa',
    img: './images/jad/cyf/39_sennikimartwanatura.jpg',
    anchor: './images/jad/cyf/39_sennikimartwanatura.jpg'
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category1: 'cyfrowa',
    img: './images/jad/cyf/40_klinikaIII-1.jpg',
    anchor: './images/jad/cyf/40_klinikaIII-1.jpg'
  },
  {
    id: 4,
    title: 'country delight',
    category1: 'cyfrowa',
    img: './images/jad/cyf/41_weseleIII.jpg',
    anchor: './images/jad/cyf/41_weseleIII.jpg'
  },
  {
    id: 5,
    title: 'egg attack',
    category1: 'drzeworyt',
    img: './images/jad/drzewor/09-dramatczna.jpg',
    anchor: './images/jad/drzewor/09-dramatczna.jpg'
  },
  {
    id: 6,
    title: 'oreo dream',
    category1: 'drzeworyt',
    img: './images/jad/drzewor/13przechodnieII.jpg',
    anchor: './images/jad/drzewor/13przechodnieII.jpg'
  },
  {
    id: 7,
    title: 'bacon overflow',
    category1: 'drzeworyt',
    img: './images/jad/drzewor/14czarneibiałezamknięia.jpg',
    anchor: './images/jad/drzewor/14czarneibiałezamknięia.jpg'
  },
  {
    id: 8,
    title: 'american classic',
    category1: 'drzeworyt',
    img: './images/jad/drzewor/20-gra.jpg',
    anchor: './images/jad/drzewor/20-gra.jpg'
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category1: 'drzeworyt',
    img: './images/jad/drzewor/21-aktcol.jpg',
    anchor: './images/jad/drzewor/21-aktcol.jpg'
  },
  {
    id: 10,
    title: 'bison steak',
    category1: 'drzeworyt',
    img: './images/jad/drzewor/26-sennikIkreska.jpg',
    anchor: './images/jad/drzewor/26-sennikIkreska.jpg'
  },
  {
    id: 11,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/gipsor/30-klinikaII68.jpg',
    anchor: './images/jad/gipsor/30-klinikaII68.jpg'
  },
  {
    id: 12,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/gipsor/31-odejściaIII.jpg',
    anchor: './images/jad/gipsor/31-odejściaIII.jpg'
  },
  {
    id: 13,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/gipsor/32gonebeyongreturn.jpg',
    anchor: './images/jad/gipsor/32gonebeyongreturn.jpg'
  },
  {
    id: 14,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/gipsor/33-klinikaIV.jpg',
    anchor: './images/jad/gipsor/33-klinikaIV.jpg'
  },
  {
    id: 15,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/gipsor/35-Lewiatangrey.jpg',
    anchor: './images/jad/gipsor/35-Lewiatangrey.jpg'
  },
  {
    id: 16,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/gipsor/36-Lunapark.jpg',
    anchor: './images/jad/gipsor/36-Lunapark.jpg'
  },
  {
    id: 17,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/linor/01-groteska.jpg',
    anchor: './images/jad/linor/01-groteska.jpg'
  },
  {
    id: 18,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/linor/15-żałoba64.jpg',
    anchor: './images/jad/linor/15-żałoba64.jpg'
  },
  {
    id: 19,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/linor/22-mocny.jpg',
    anchor: './images/jad/linor/22-mocny.jpg'
  },
  {
    id: 20,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/linor/24-wesele.jpg',
    anchor: './images/jad/linor/24-wesele.jpg'
  },
  {
    id: 21,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/linor/28_klinikab&w.jpg',
    anchor: './images/jad/linor/28_klinikab&w.jpg'
  },
  {
    id: 22,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/linor/34-Morfeusz.jpg',
    anchor: './images/jad/linor/34-Morfeusz.jpg'
  },
  {
    id: 23,
    title: 'bison steak',
    category1: 'gipsoryt',
    img: './images/jad/linor/odejścieII.jpg',
    anchor: './images/jad/linor/odejścieII.jpg'
  }
]
// get parent element
const sectionCenter1 = document.querySelector('.section-center1')
const btnContainer1 = document.querySelector('.btn-container1')
// display all items when page loads
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems1(menu1)
  displayMenuButtons1()
})

function diplayMenuItems1 (menuItems1) {
  let displayMenu1 = menuItems1.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <a data-pswp-src=${item.anchor} data-pswp-width="1500"  data-pswp-height="2100">
          <img src=${item.img} alt="${item.title}" class="photo "  />
          </a>
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              
            </header>
           
          </div>
        </article>`
  })
  displayMenu1 = displayMenu1.join('')
  // console.log(displayMenu);

  sectionCenter1.innerHTML = displayMenu1
}
function displayMenuButtons1 () {
  const categories1 = menu1.reduce(
    function (values, item) {
      if (!values.includes(item.category1)) {
        values.push(item.category1)
      }
      return values
    },
    ['wszystkie']
  )
  const categoryBtns1 = categories1
    .map(function (category1) {
      return `<button type="button" class="filter-btn" data-id=${category1}>
          ${category1}
        </button>`
    })
    .join('')

  btnContainer1.innerHTML = categoryBtns1
  const filterBtns1 = btnContainer1.querySelectorAll('.filter-btn')
  console.log(filterBtns1)

  filterBtns1.forEach(function (btn1) {
    btn1.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset);
      const category1 = e.currentTarget.dataset.id
      const menuCategory1 = menu1.filter(function (menuItem1) {
        // console.log(menuItem.category);
        if (menuItem1.category1 === category1) {
          return menuItem1
        }
      })
      if (category1 === 'wszystkie') {
        diplayMenuItems1(menu1)
      } else {
        diplayMenuItems1(menuCategory1)
      }
    })
  })
}
