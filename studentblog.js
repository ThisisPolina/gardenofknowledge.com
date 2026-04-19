 initUI() {
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
    themeSwitch.onclick = () => {
      darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    };
  }

  document.querySelectorAll('.flag-button').forEach(button => {
    button.onclick = () => {
      setLanguage(button.dataset.language);
    };
  });

  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
}

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
  welcome: "Welcome to your guide to CMRU",
  welcomemessage: "We created this website prototype for Social Engineer to support students, their families, and staff, as well as to attract potential stakeholders. This site is translated into multiple languages to reach as many people as possible.",

  studentvisatitle: "Student Visa",

  visaquestion1: "Q: What should you prepare for a student visa?",
  visaanswer1: "A: TM30, 2 passport photos (4x6 cm), proof of payment from the 7th floor, passport, printed TDAC (Thailand Digital Arrival Card).",

  visaquestion2: "Q: What do you need to do to apply for a student visa?",
  visaanswer2: "A: Typically, you will need to go to a Thai embassy in your home country or a nearby country to apply there. If you are already in Thailand, you will need to go to Immigration and follow their instructions for your specific case. Go to the 4th floor of Building 27 (also known as the Memorial Building). You will receive an appointment, and they will prepare the required documents for you. The processing time is usually around 2–3 weeks. This is normal.",

  visaquestion3: "Q: What happens next?",
  visaanswer3: "A: After that, you will need to pick up your documents and follow the instructions given. You will need to pay 1,900 baht in cash (cash only). After you receive your visa, take a photo of the visa page in your passport and send it to the 4th floor contact (visa center).",

  visaquestion4: "Q: What should you remember about extensions and reporting?",
  visaanswer4: "A: Please contact the 4th floor at least 45 days before your visa expires to arrange an extension. They will schedule an appointment and provide the necessary paperwork. If you change your address, you will need to submit a new TM30 and report it to the 4th floor. Visa extensions are usually processed in the morning only and cost 1,900 baht in cash. If you need to miss class, inform your teacher in advance and prepare a leave letter. Check Thai public holidays, as Immigration may be closed. If there are many people, you may need to return the next day.",

  visaquestion5: "Q: What are the important reminders?",
  visaanswer5: "A: 90-day report, visa extension. You can do your 90-day report 15 days before your due date or up to 7 days after.",

  housingtitle: "Housing",

  housingquestion1: "Q: How can I find a place to rent?",
  housinganswer1: "A: You can search through Facebook groups and rental posts or create your own post stating your budget and preferred area (you can include a screenshot from Google Maps). You can also contact landlords directly, but make sure they accept foreign tenants before proceeding.",

  housingquestion2: "Q: What is the payment process when renting a place?",
  housinganswer2: "A: Once you choose a room, you usually need to pay a deposit and the first month’s rent. Depending on the agreement, you may be able to negotiate, but some landlords may require 3–6 months’ rent upfront, especially for longer contracts.",

  housingquestion3: "Q: How to get a TM30?",
  housinganswer3: "A: After moving in, ask the landlord to submit a TM30 form for you. It must include your check-in (move-in) and check-out dates. If you stay beyond the original check-out date, the landlord will need to submit a new TM30.",

  housingquestion4: "Q: How do dormitories work?",
  housinganswer4: "A: You need to ask current students if there is an available space. Dorm rooms are usually shared with 3–4 people. For more details, check the dorm’s website and contact them directly.",

  moneytitle: "Money Matters",

  moneyquestion1: "Q: Where to exchange money?",
  moneyanswer1: "A: You will need to find your own place for exchanging money depending on your currency, because there isn't a single place that has the best rate for all of them. Exchange rates can be affected negatively around holidays or vacation time, so don't rush.",

  moneyquestion2: "Q: How to open a bank account (for example, SCB)?",
  moneyanswer2: "A: You will need your student ID, ED visa, passport, TM30, and proof of a phone SIM card. Request a letter from the university to get permission to open a bank account. It will cost 20 baht. Go to the office to open a bank account. For example, there is an SCB office on the second floor of Khamtiang Lotus.",

  moneyquestion3: "Q: Anything important to know when using a bank account?",
  moneyanswer3: "A: You will likely need to increase the daily spending limit to pay tuition, so explain this reason at the bank or TrueMoney. A supporting document, like a driving license, will help. Keep in mind that the branch you choose to open your account at will be your main one, and you will always have to go back there. Every year, after renewing your visa (or changing your passport), you will need to go to the bank immediately to confirm your student status. Otherwise, you may lose access to banking services. You will need to bring the same set of documents.",

  moneyquestion4: "Q: How to open a TrueMoney account?",
  moneyanswer4: "A: The app is laggy, so it is best to go to an office in person. You will need your passport and driving license (if you have one). You do not need a letter from the university. You can use TrueMoney almost everywhere, including online (PromptPay). There is no physical card or yearly fee. These locations can be found at their physical spots or in shopping malls.",

  moneyquestion5: "Q: Anything else to keep in mind?",
  moneyanswer5: "A: Please make sure your phone or device is up to date and can run these apps. If it cannot, you may need to buy a new one. There are many secondhand shops around the city, especially in shopping malls like Maya and Central Airport.",

    shoppingtitle: "Shopping in Chiang Mai",

    shoppingquestion1: "Q: Where do students usually go to eat?",
    shoppinganswer1: "A: Whenever we are near or on campus, we like to go to the cafeteria. The prices there are cheap, starting from 30 baht for a meal. Sometimes stalls close early because they run out of food. The cafeteria usually closes at 4 p.m. and on Thai holidays. We also have a 7/11 on the first floor of the 90th building. Right now it's closed because Thai students from the 27th building are already done with their school year. There are also small shops all over campus, but they mainly focus on beverages. Some are also closed for the aforementioned reason. There are a lot of restaurants, street food stalls, and shops near campus.",

    shoppingquestion2: "Q: Where do students usually buy their groceries?",
    shoppinganswer2: "A: Pricier options, but worth it if they have discounts and promotions: Makro, Rimping, and Tops. Regular options: Lotus, Big C, a market near university called Siri Wattana Market, and a fruit/wet market at 1 Wichayanon Rd Soi 1.",

    shoppingquestion3: "Q: What shopping malls are there?",
    shoppinganswer3: "A: Maya, Central Festival, Central Airport.",

    shoppingquestion4: "Q: Where do students usually buy daily necessities?",
    shoppinganswer4: "A: Mr DIY at Lotus, 7/11, Chiang Mai Direct, Win Cosmetics.",

    shoppingquestion5: "Q: Where do students usually buy regular clothes?",
    shoppinganswer5: "A: Lotus’s Kham Thiang has a market called Khamthiang Market from Wednesday to Friday. They also set up stalls with food and drinks. If you would like to buy clothes for cheap, we recommend going to Hola Hola Secondhand Clothing Store. Their prices start at 15 baht, and they also offer 50% discounts. If you love to browse and try on clothes, this is the place for you.",

    shoppingquestion6: "Q: Where do students usually buy school clothes and supplies?",
    shoppinganswer6: "A: We have a stationery store near our university called Piern Rian Stationery Chiang Mai. If you happen to go to Kad Na Mor Market, you will find school clothes there at a place called ร้านร่มไทร หน้า มช ชุดนักศึกษาปี1 ชุดรับปริญยา.",

    shoppingquestion7: "Q: What markets do students usually go to?",
    shoppinganswer7: "A: Market near university: Siri Wattana Market, Kad Na Mor Market, Lang Mor Night Market, Saturday Evening Flea Market - Keha Nong Hoi, Chiang Mai Night Market, Chiang Mai University Night Market.",

    shoppingquestion8: "Q: What gyms do students usually go to?",
    shoppinganswer8: "A: Many students like to go to Income Gym because it isn't far from campus and they have showers. A day of working out there costs 70 baht if you show your student ID card. If you would like more facilities, including an indoor gym and a running track, you should go to Chiang Mai Municipal Stadium. The entrance fee is free.",

    shoppingquestion9: "Q: What parks do students usually go to?",
    shoppinganswer9: "A: These are parks you can go to for free: PAO Park, Chiang Mai University Campus, Buak Had Public Park. There are also parks that require an entrance fee. If you would like to go to Royal Ratchaphruek Park, bring your student ID card, as the entrance fee will be 70 baht instead of 200 baht."
  },
th: {
  studentvisatitle: "",
  visaquestion1: "",
  visaanswer1: "",
  visaquestion2: "",
  visaanswer2: "",
  visaquestion3: "",
  visaanswer3: "",
  visaquestion4: "",
  visaanswer4: "",
  visaquestion5: "",
  visaanswer5: "",

  housingtitle: "",
  housingquestion1: "",
  housinganswer1: "",
  housingquestion2: "",
  housinganswer2: "",
  housingquestion3: "",
  housinganswer3: "",
  housingquestion4: "",
  housinganswer4: "",

  moneytitle: "",
  moneyquestion1: "",
  moneyanswer1: "",
  moneyquestion2: "",
  moneyanswer2: "",
  moneyquestion3: "",
  moneyanswer3: "",
  moneyquestion4: "",
  moneyanswer4: "",
  moneyquestion5: "",
  moneyanswer5: "",

  shoppingtitle: "",
  shoppingquestion1: "",
  shoppinganswer1: "",
  shoppingquestion2: "",
  shoppinganswer2: "",
  shoppingquestion3: "",
  shoppinganswer3: "",
  shoppingquestion4: "",
  shoppinganswer4: "",
  shoppingquestion5: "",
  shoppinganswer5: "",
  shoppingquestion6: "",
  shoppinganswer6: "",
  shoppingquestion7: "",
  shoppinganswer7: "",
  shoppingquestion8: "",
  shoppinganswer8: "",
  shoppingquestion9: "",
  shoppinganswer9: ""
},

my: {
  studentvisatitle: "",
  visaquestion1: "",
  visaanswer1: "",
  visaquestion2: "",
  visaanswer2: "",
  visaquestion3: "",
  visaanswer3: "",
  visaquestion4: "",
  visaanswer4: "",
  visaquestion5: "",
  visaanswer5: "",

  housingtitle: "",
  housingquestion1: "",
  housinganswer1: "",
  housingquestion2: "",
  housinganswer2: "",
  housingquestion3: "",
  housinganswer3: "",
  housingquestion4: "",
  housinganswer4: "",

  moneytitle: "",
  moneyquestion1: "",
  moneyanswer1: "",
  moneyquestion2: "",
  moneyanswer2: "",
  moneyquestion3: "",
  moneyanswer3: "",
  moneyquestion4: "",
  moneyanswer4: "",
  moneyquestion5: "",
  moneyanswer5: "",

  shoppingtitle: "",
  shoppingquestion1: "",
  shoppinganswer1: "",
  shoppingquestion2: "",
  shoppinganswer2: "",
  shoppingquestion3: "",
  shoppinganswer3: "",
  shoppingquestion4: "",
  shoppinganswer4: "",
  shoppingquestion5: "",
  shoppinganswer5: "",
  shoppingquestion6: "",
  shoppinganswer6: "",
  shoppingquestion7: "",
  shoppinganswer7: "",
  shoppingquestion8: "",
  shoppinganswer8: "",
  shoppingquestion9: "",
  shoppinganswer9: ""
},

zh: {
  studentvisatitle: "",
  visaquestion1: "",
  visaanswer1: "",
  visaquestion2: "",
  visaanswer2: "",
  visaquestion3: "",
  visaanswer3: "",
  visaquestion4: "",
  visaanswer4: "",
  visaquestion5: "",
  visaanswer5: "",

  housingtitle: "",
  housingquestion1: "",
  housinganswer1: "",
  housingquestion2: "",
  housinganswer2: "",
  housingquestion3: "",
  housinganswer3: "",
  housingquestion4: "",
  housinganswer4: "",

  moneytitle: "",
  moneyquestion1: "",
  moneyanswer1: "",
  moneyquestion2: "",
  moneyanswer2: "",
  moneyquestion3: "",
  moneyanswer3: "",
  moneyquestion4: "",
  moneyanswer4: "",
  moneyquestion5: "",
  moneyanswer5: "",

  shoppingtitle: "",
  shoppingquestion1: "",
  shoppinganswer1: "",
  shoppingquestion2: "",
  shoppinganswer2: "",
  shoppingquestion3: "",
  shoppinganswer3: "",
  shoppingquestion4: "",
  shoppinganswer4: "",
  shoppingquestion5: "",
  shoppinganswer5: "",
  shoppingquestion6: "",
  shoppinganswer6: "",
  shoppingquestion7: "",
  shoppinganswer7: "",
  shoppingquestion8: "",
  shoppinganswer8: "",
  shoppingquestion9: "",
  shoppinganswer9: ""
},

id: {
  studentvisatitle: "",
  visaquestion1: "",
  visaanswer1: "",
  visaquestion2: "",
  visaanswer2: "",
  visaquestion3: "",
  visaanswer3: "",
  visaquestion4: "",
  visaanswer4: "",
  visaquestion5: "",
  visaanswer5: "",

  housingtitle: "",
  housingquestion1: "",
  housinganswer1: "",
  housingquestion2: "",
  housinganswer2: "",
  housingquestion3: "",
  housinganswer3: "",
  housingquestion4: "",
  housinganswer4: "",

  moneytitle: "",
  moneyquestion1: "",
  moneyanswer1: "",
  moneyquestion2: "",
  moneyanswer2: "",
  moneyquestion3: "",
  moneyanswer3: "",
  moneyquestion4: "",
  moneyanswer4: "",
  moneyquestion5: "",
  moneyanswer5: "",

  shoppingtitle: "",
  shoppingquestion1: "",
  shoppinganswer1: "",
  shoppingquestion2: "",
  shoppinganswer2: "",
  shoppingquestion3: "",
  shoppinganswer3: "",
  shoppingquestion4: "",
  shoppinganswer4: "",
  shoppingquestion5: "",
  shoppinganswer5: "",
  shoppingquestion6: "",
  shoppinganswer6: "",
  shoppingquestion7: "",
  shoppinganswer7: "",
  shoppingquestion8: "",
  shoppinganswer8: "",
  shoppingquestion9: "",
  shoppinganswer9: ""
},

ru: {
  studentvisatitle: "",
  visaquestion1: "",
  visaanswer1: "",
  visaquestion2: "",
  visaanswer2: "",
  visaquestion3: "",
  visaanswer3: "",
  visaquestion4: "",
  visaanswer4: "",
  visaquestion5: "",
  visaanswer5: "",

  housingtitle: "",
  housingquestion1: "",
  housinganswer1: "",
  housingquestion2: "",
  housinganswer2: "",
  housingquestion3: "",
  housinganswer3: "",
  housingquestion4: "",
  housinganswer4: "",

  moneytitle: "",
  moneyquestion1: "",
  moneyanswer1: "",
  moneyquestion2: "",
  moneyanswer2: "",
  moneyquestion3: "",
  moneyanswer3: "",
  moneyquestion4: "",
  moneyanswer4: "",
  moneyquestion5: "",
  moneyanswer5: "",

  shoppingtitle: "",
  shoppingquestion1: "",
  shoppinganswer1: "",
  shoppingquestion2: "",
  shoppinganswer2: "",
  shoppingquestion3: "",
  shoppinganswer3: "",
  shoppingquestion4: "",
  shoppinganswer4: "",
  shoppingquestion5: "",
  shoppinganswer5: "",
  shoppingquestion6: "",
  shoppinganswer6: "",
  shoppingquestion7: "",
  shoppinganswer7: "",
  shoppingquestion8: "",
  shoppinganswer8: "",
  shoppingquestion9: "",
  shoppinganswer9: ""
},

ph: {
  studentvisatitle: "",
  visaquestion1: "",
  visaanswer1: "",
  visaquestion2: "",
  visaanswer2: "",
  visaquestion3: "",
  visaanswer3: "",
  visaquestion4: "",
  visaanswer4: "",
  visaquestion5: "",
  visaanswer5: "",

  housingtitle: "",
  housingquestion1: "",
  housinganswer1: "",
  housingquestion2: "",
  housinganswer2: "",
  housingquestion3: "",
  housinganswer3: "",
  housingquestion4: "",
  housinganswer4: "",

  moneytitle: "",
  moneyquestion1: "",
  moneyanswer1: "",
  moneyquestion2: "",
  moneyanswer2: "",
  moneyquestion3: "",
  moneyanswer3: "",
  moneyquestion4: "",
  moneyanswer4: "",
  moneyquestion5: "",
  moneyanswer5: "",

  shoppingtitle: "",
  shoppingquestion1: "",
  shoppinganswer1: "",
  shoppingquestion2: "",
  shoppinganswer2: "",
  shoppingquestion3: "",
  shoppinganswer3: "",
  shoppingquestion4: "",
  shoppinganswer4: "",
  shoppingquestion5: "",
  shoppinganswer5: "",
  shoppingquestion6: "",
  shoppinganswer6: "",
  shoppingquestion7: "",
  shoppinganswer7: "",
  shoppingquestion8: "",
  shoppinganswer8: "",
  shoppingquestion9: "",
  shoppinganswer9: ""
}
};
function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;

    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    } else if (translations.en[key]) {
      el.textContent = translations.en[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', initUI);
