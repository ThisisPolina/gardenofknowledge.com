function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(data => {
      document.getElementById("actualstuff").innerHTML = data;

      const savedLang = localStorage.getItem('lang') || 'en';
      setLanguage(savedLang);
    });
}

const translations = {
  en: {
    welcome: "Welcome to your student guide to CMRU",
    welcomemessage: "We created this website prototype to help and prepare fellow students studying at the Wiang Bua Campus of Chiang Mai Rajabhat University. This site is translated into English, Thai, Burmese, and Chinese to reach as many people as possible. The information here comes from official sources and helpful students, but please fact-check in case anything changes."
  },
  th: {
    welcome: "ยินดีต้อนรับสู่คู่มือนักศึกษา CMRU",
    welcomemessage: "เราได้สร้างต้นแบบเว็บไซต์นี้ขึ้นเพื่อช่วยเหลือและเตรียมความพร้อมให้นักเรียนเพื่อนร่วมศึกษาที่วิทยาลัยเวียงบัว มหาวิทยาลัยราชภัฏเชียงใหม่ เว็บไซต์นี้ถูกแปลเป็นภาษาอังกฤษ ภาษาไทย ภาษาพม่า และภาษาจีนเพื่อให้เข้าถึงผู้คนได้มากที่สุด"
  },
  my: {},
  zh: {},
  id: {}
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);

  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;

    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {

  let darkmode = localStorage.getItem('darkmode');
  const themeSwitch = document.getElementById('theme-switch');

  const updateImage = () => {
    if (!themeSwitch) return;
    themeSwitch.src = darkmode === "active"
      ? "lightmode.png"
      : "darkmode.png";
  };

  const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    darkmode = "active";
    updateImage();
  };

  const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
    darkmode = null;
    updateImage();
  };

  if (darkmode === "active") {
    document.body.classList.add('darkmode');
  }

  updateImage();

  if (themeSwitch) {
    themeSwitch.addEventListener("click", () => {
      darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    });
  }


  const flagButtons = document.querySelectorAll('.flag-button');

  flagButtons.forEach(button => {
    button.addEventListener('click', function () {
      const lang = button.dataset.language;
      setLanguage(lang);
    });
  });

  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);

});