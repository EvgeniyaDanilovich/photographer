window.onload = function () {
  addTabsClickHandler();
  addMenu(); // changeTheme();

  pushTheme();
};

let lang = 'en';
const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'email': 'E-mail',
    'phone': 'Phone',
    'message': 'Message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'email': 'Е-мейл',
    'phone': 'Телефон',
    'message': 'Сообщение'
  }
};

const getTranslate = lang => {
  const allData = document.querySelectorAll('[data-i18]');
  allData.forEach(item => {
    if (lang === 'en') {
      let keyEn = i18Obj['en'][item.dataset.i18];
      item.textContent = keyEn;

      if (item.placeholder) {
        item.placeholder = keyEn;
        item.textContent = '';
      }
    } else {
      let keyRu = i18Obj['ru'][item.dataset.i18];
      item.textContent = keyRu;

      if (item.placeholder) {
        item.placeholder = keyRu;
        item.textContent = '';
      }
    }
  });
};

const btnLangEn = document.querySelector('.lang-en');
const btnLangRu = document.querySelector('.lang-ru');
btnLangEn.addEventListener('click', () => {
  lang = 'en';
  getTranslate(lang);
  btnLangRu.classList.remove('active');
  btnLangEn.classList.add('active');
});
btnLangRu.addEventListener('click', () => {
  lang = 'ru';
  getTranslate(lang);
  btnLangEn.classList.remove('active');
  btnLangRu.classList.add('active');
}); //JS-функция определения поддержки WebP

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
}); //==========================================

const addMenu = () => {
  // Меню бургер
  const iconMenu = document.querySelector('.header-menu__icon');
  const menuBlock = document.querySelector('.header-menu__menu');
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBlock.classList.toggle('active');
  }); // Скрол из бургера

  const menuLinkAll = document.querySelectorAll('.header-menu__link');

  for (let current of menuLinkAll) {
    current.addEventListener('click', function () {
      if (iconMenu.classList.contains('active')) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBlock.classList.remove('active');
      }
    });
  }
}; //============================================
//============================================
// portfolio button


const addTabsClickHandler = () => {
  const btnTabs = document.querySelector('.tabs__nav');
  btnTabs.addEventListener('click', event => {
    btnTabs.querySelectorAll('.tabs__item').forEach(item => {
      item.classList.add('button--w');
    });
    let clickedTab = event.target;
    clickedTab.classList.remove('button--w');
    filterImgBySelectedTab(clickedTab);
  });
}; // func сортировки картинок по клику


const filterImgBySelectedTab = clickedTab => {
  const imgBlock = document.querySelectorAll('.tabs__block');
  imgBlock.forEach(item => {
    item.classList.add('hidden');

    if (item.classList.contains('winter') && clickedTab.classList.contains('winter')) {
      item.classList.remove('hidden');
    } else if (item.classList.contains('spring') && clickedTab.classList.contains('spring')) {
      item.classList.remove('hidden');
    } else if (item.classList.contains('summer') && clickedTab.classList.contains('summer')) {
      item.classList.remove('hidden');
    } else if (item.classList.contains('autumn') && clickedTab.classList.contains('autumn')) {
      item.classList.remove('hidden');
    }
  });
}; //============================================
// Изменение темы цвета


let theme = 'dark';
const switchBtn = document.querySelector('.light');

const changeTheme = () => {
  const body = document.body;
  const bgTitle = document.querySelectorAll('.title span');
  const socialFooter = document.querySelectorAll('.footer__link');
  const elemsFooter = document.querySelectorAll('.footer__elem');
  const btnPortfolio = document.querySelectorAll('.b');
  const mainBg = document.querySelector('.hero');
  const logo = document.querySelector('.header__logo');
  const menuLink = document.querySelectorAll('.header-menu__link');
  const switchLang = document.querySelectorAll('.header-language__item');
  const buttonMain = document.querySelector('.button');
  const titles = document.querySelectorAll('.title');
  const contactsBg = document.querySelector('.contacts');
  const inputs = document.querySelectorAll('.contacts__input');
  const contactsBtn = document.querySelector('.contacts__btn');
  const menuIcon = document.querySelector('.header-menu__icon');
  const menuBg = document.querySelector('.header-menu__menu'); // switchBtn.addEventListener('click', () => {

  if (theme === 'dark') {
    theme = 'light';
  } else {
    theme = 'dark';
  }

  body.classList.toggle('c-black');
  body.classList.toggle('bg-white');
  bgTitle.forEach(item => item.classList.toggle('white'));
  socialFooter.forEach(item => item.classList.toggle('black-icon'));
  elemsFooter.forEach(item => item.classList.toggle('black'));
  btnPortfolio.forEach(item => item.classList.toggle('white'));
  mainBg.classList.toggle('light-active');
  logo.classList.toggle('light');
  switchBtn.classList.toggle('light-active');
  menuLink.forEach(item => item.classList.toggle('light'));
  buttonMain.classList.toggle('button--light');
  titles.forEach(item => item.classList.toggle('light'));
  contactsBg.classList.toggle('light');
  inputs.forEach(item => item.classList.toggle('light'));
  contactsBtn.classList.toggle('light');
  menuIcon.classList.toggle('light');
  menuBg.classList.toggle('light');
  switchLang.forEach(item => item.classList.toggle('light-active')); // })
};

const pushTheme = () => {
  switchBtn.addEventListener('click', changeTheme);
}; //============================================
// local storage  
// 1. Могут быть два варианта: сохранять переменную при каждом её изменении, или 
//сохранить данные только перед перезагрузкой или закрытием страницы(событие beforeunload)


function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}

window.addEventListener('beforeunload', setLocalStorage); // 2. перед загрузкой страницы (событие load) данные нужно восстановить и отобразить

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
  }

  ;

  if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
      changeTheme();
    }
  }
}

window.addEventListener('load', getLocalStorage);