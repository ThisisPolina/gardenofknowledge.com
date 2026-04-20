function openMap() {
  const el = document.getElementById("mapPopup");
  el.style.display = "flex";
  el.setAttribute("aria-hidden", "false");
}

function closeMap() {
  const el = document.getElementById("mapPopup");
  el.style.display = "none";
  el.setAttribute("aria-hidden", "true");
}

let observer;

function initLazyImages() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll(".lazy").forEach(img => {
      if (img.dataset.src) img.src = img.dataset.src;
    });
    return;
  }

  if (!observer) {
    observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          img.onload = () => img.classList.add("loaded");
          obs.unobserve(img);
        }
      });
    });
  }

  document.querySelectorAll(".lazy").forEach(img => {
    observer.observe(img);
  });
}

function initUI() {
  let darkmode = localStorage.getItem('darkmode');
  const themeSwitch = document.getElementById('theme-switch');

  const updateImage = () => {
    if (!themeSwitch) return;
    themeSwitch.src = darkmode === "active" ? "lightmode.png" : "darkmode.png";
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

  if (themeSwitch && !themeSwitch.dataset.bound) {
    themeSwitch.addEventListener('click', () => {
      darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    });
    themeSwitch.dataset.bound = "true";
  }

  document.querySelectorAll('.flag-button').forEach(button => {
    if (!button.dataset.bound) {
      button.addEventListener('click', () => {
        setLanguage(button.dataset.language);
      });
      button.dataset.bound = "true";
    }
  });

  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);

  initLazyImages();
}

function loadPage(page) {
  fetch(page)
    .then(res => {
      if (!res.ok) throw new Error("Page failed to load");
      return res.text();
    })
    .then(data => {
      document.getElementById("actualstuff").innerHTML = data;
      const savedLang = localStorage.getItem('lang') || 'en';
      setLanguage(savedLang);
      initUI();
    })
    .catch(() => {
      document.getElementById("actualstuff").innerHTML = "<p>Failed to load page.</p>";
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
  housingquestion4: "How do dormitories work?",
  housinganswer4: "The international student dorm is located off campus. You usually need to ask current students if there is an available space, as rooms are shared with around 4 people. The cost is about 6000 baht for the whole semester (around 4 months), with a one-time 1000 baht deposit when you first move in, and about 400 baht for water utilities.",
  housingfacilities: "The building has 7 floors, two small elevators, and stairs. Each room includes a small toilet, a small shower, and a small kitchen (no fridge). There are also coin-operated washing machines and a water refill station on the first floor.",
  mapIndicators: "The map indicators",
  mapIndicatorsList: "The map indicators list"
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
  shoppinganswer9: "",

  drivingtitle: "",
  drivingquestion1: "",
  drivinganswer1: "",
  drivinganswer2: "",
  drivingquestion2: "",
  drivinganswer3: "",
  drivingquestion3: "",
  drivinganswer4: "",
  drivinganswer5: "",
  drivinganswer6: "",
  drivingquestion4: "",
  drivinganswer7: "",
  drivingquestion5: "",
  drivinganswer8: "",
  drivingquestion6: "",
  drivinganswer9: "",
  drivingquestion7: "",
  drivinganswer10: "",
  drivingquestion8: "",
  drivinganswer11: "",

  keyinfotitle: "",
  keyinfoquestion1: "",
  keyinfoanswer1: "",
  keyinfoquestion2: "",
  keyinfoanswer2: "",
  keyinfoquestion3: "",
  keyinfoanswer3: "",
  keyinfoquestion4: "",
  keyinfoanswer4: "",
  keyinfoquestion5: "",
  keyinfoanswer5: "",
  keyinfoquestion6: "",
  keyinfoanswer6: "",
  keyinfoquestion7: "",
  keyinfoanswer7: "",

  generallinkstitle: "",
  generallinksdesc1: "",
  generallinksdesc2: "",
  generallinksdesc3: "",
  generallinksdesc4: "",
  generallinksdesc5: "",
  generallinksdesc6: "",
  generallinksdesc7: "",
  generallinksdesc8: "",

  wiangbuatitle: "",
  wiangbuadesc1: "",
  wiangbuadesc2: "",
  wiangbuadesc3: "",
  wiangbuadesc4: "",
  wiangbuadesc5: "",
  wiangbuadesc6: "",
  wiangbuadesc7: "",
  wiangbuadesc8: "",
  wiangbuadesc9: "",
  wiangbuadesc10: "",
  wiangbuadesc11: "",
  wiangbuadesc12: "",
  wiangbuadesc13: "",
  wiangbuadesc14: "",
  wiangbuadesc15: "",
  wiangbuadesc16: "",
  wiangbuadesc17: "",
  wiangbuadesc18: "",

  othercampusestitle: "",
  othercampusesdesc1: "",
  othercampusesdesc2: "",
  othercampusesdesc3: "",
  othercampusesdesc4: "",
  othercampusesdesc5: "",
  othercampusesdesc6: "",
  othercampusesdesc7: "",
  infoaboutfacultyofagriculturaltechnology: "",
  
  unilife: "",
keyinfo: "",
keyinfodesc: "",
navigation: "",
navigationdesc: "",
mustknows: "",
mustknowsdesc: "",
studentclubs: "",
studentclubsdesc: "",
  dailylifetitle: "",

  visatitle: "",
  visadesc: "",

  housingtitle: "",
  housingdesc: "",

  moneytitle: "",
  moneydesc: "",

  shoppingtitle: "",
  shoppingdesc: "",

  drivingtitle: "",
  drivingdesc: "",

  eventstitle: ""
},

zh: {
  keyinfotitle: "",
  keyinfoquestion1: "",
  keyinfoanswer1: "",
  keyinfoquestion2: "",
  keyinfoanswer2: "",
  keyinfoquestion3: "",
  keyinfoanswer3: "",
  keyinfoquestion4: "",
  keyinfoanswer4: "",
  keyinfoquestion5: "",
  keyinfoanswer5: "",
  keyinfoquestion6: "",
  keyinfoanswer6: "",
  keyinfoquestion7: "",
  keyinfoanswer7: "",

  generallinkstitle: "",
  generallinksdesc1: "",
  generallinksdesc2: "",
  generallinksdesc3: "",
  generallinksdesc4: "",
  generallinksdesc5: "",
  generallinksdesc6: "",
  generallinksdesc7: "",
  generallinksdesc8: "",

  wiangbuatitle: "",
  wiangbuadesc1: "",
  wiangbuadesc2: "",
  wiangbuadesc3: "",
  wiangbuadesc4: "",
  wiangbuadesc5: "",
  wiangbuadesc6: "",
  wiangbuadesc7: "",
  wiangbuadesc8: "",
  wiangbuadesc9: "",
  wiangbuadesc10: "",
  wiangbuadesc11: "",
  wiangbuadesc12: "",
  wiangbuadesc13: "",
  wiangbuadesc14: "",
  wiangbuadesc15: "",
  wiangbuadesc16: "",
  wiangbuadesc17: "",
  wiangbuadesc18: "",

  othercampusestitle: "",
  othercampusesdesc1: "",
  othercampusesdesc2: "",
  othercampusesdesc3: "",
  othercampusesdesc4: "",
  othercampusesdesc5: "",
  othercampusesdesc6: "",
  othercampusesdesc7: "",

  infoaboutfacultyofagriculturaltechnology: ""
},

ru: {
  keyinfotitle: "Основная информация",

  keyinfoquestion1: "Как зарегистрироваться на курсы?",
  keyinfoanswer1: "Перейдите на сайт регистрации (reg.cmru) и войдите, используя свой студенческий ID. В качестве пароля используется ваш национальный ID или паспорт. Нажмите «Enroll», затем выберите предметы в соответствии с вашим учебным планом. После этого нажмите «Confirm Enrollment» и обязательно оплатите обучение до установленного срока.",

  keyinfoquestion2: "Какой у меня email CMRU?",
  keyinfoanswer2: "Ваш email: studentID@cmru.ac.th. Пароль: cmru@DD/MM/YYYY (основан на вашей дате рождения в тайском формате года).",

  keyinfoquestion3: "Что такое кредиты активности студентов?",
  keyinfoanswer3: "Студенты должны набрать минимум 118 кредитов активности за 4 года обучения. Обычно за одно мероприятие даётся 3 кредита. Эти кредиты обязательны для выпуска.",

  keyinfoquestion4: "Как получить кредиты активности?",
  keyinfoanswer4: "Вы можете получить кредиты, участвуя в ориентационных программах, воркшопах, семинарах, студенческих мероприятиях, клубах, волонтёрской деятельности, а также заполняя формы обратной связи и опросы.",

  keyinfoquestion5: "Что покрывает медицинская страховка студента?",
  keyinfoanswer5: "В 2023–2024 учебном году страховка покрывает медицинские расходы до 15 000 бат и помощь в случае смерти до 20 000 бат.",

  keyinfoquestion6: "Какие больницы входят в партнёрскую сеть?",
  keyinfoanswer6: "Партнёрские больницы: Lanna Hospital Chiang Mai, Rajavej Hospital Chiang Mai, McCormick Hospital, Chiang Mai Hospital, Maharaj Nakorn Chiang Mai Hospital и Theppanya Hospital.",

  keyinfoquestion7: "Как пользоваться студенческой страховкой?",
  keyinfoanswer7: "В рабочее время необходимо предъявить национальный ID и страховую карту от несчастных случаев. Вне рабочего времени также нужно показать эти документы. Вы можете связаться с Student Development Division по номеру 053-885430 в рабочие часы университета.",


  generallinkstitle: "Какие ссылки стоит проверить всем студентам?",
  generallinksdesc1: "Основной сайт университета с новостями, факультетами, услугами и информацией о регистрации.",
  generallinksdesc2: "Используется для регистрации на курсы, проверки расписания и управления академическими данными.",
  generallinksdesc3: "Официальная страница регистрационного офиса в Facebook.",
  generallinksdesc4: "Информация для новых студентов.",
  generallinksdesc5: "Список факультетов, колледжей и учебных подразделений.",
  generallinksdesc6: "Информация о стипендиях, медуслугах, студенческих активностях, карьере, страховке, психическом здоровье и событиях.",
  generallinksdesc7: "Информация о студенческих общежитиях, включая условия, цены и контакты.",
  generallinksdesc8: "Онлайн-курсы по бизнесу, тайскому языку, цифровым навыкам и ИИ, часто с сертификатами.",


  wiangbuatitle: "Какие ссылки стоит проверить студентам кампуса Wiang Bua?",
  wiangbuadesc1: "Информация для студентов, преподавателей и родителей.",
  wiangbuadesc2: "Регистрация курсов, расписание и академические записи.",
  wiangbuadesc3: "Официальная страница регистрационного офиса в Facebook.",
  wiangbuadesc4: "Официальный сайт для студентов IC-CMRU.",
  wiangbuadesc5: "Официальная страница International College в Facebook.",
  wiangbuadesc6: "Студенческие сервисы IC-CMRU (регистрация, документы, оплата, стажировки).",
  wiangbuadesc7: "Программы стажировок, список компаний и распределение (в основном для 4 курса).",
  wiangbuadesc8: "Библиотечные услуги и учебные ресурсы.",
  wiangbuadesc9: "Официальная страница библиотеки CMRU в Facebook.",
  wiangbuadesc10: "Сервисы Digital CMRU: онлайн-системы, платформы, e-learning и IT-поддержка.",
  wiangbuadesc11: "Официальная страница Digital CMRU в Facebook.",
  wiangbuadesc12: "Официальная страница магазина CMRU (мерч и сувениры).",
  wiangbuadesc13: "Сайт для магистрантов и аспирантов.",
  wiangbuadesc14: "Официальная страница Graduate School в Facebook.",
  wiangbuadesc15: "Информация для родителей учеников демонстрационной школы.",
  wiangbuadesc16: "Официальная страница демонстрационной школы в Facebook.",
  wiangbuadesc17: "Сайт факультета гуманитарных и социальных наук.",
  wiangbuadesc18: "Официальная страница факультета в Facebook.",


  othercampusestitle: "Для студентов других кампусов",
  othercampusesdesc1: "Информация о факультете математики и естественных наук.",
  othercampusesdesc2: "Официальная страница факультета математики и естественных наук в Facebook.",
  othercampusesdesc3: "Сайт для студентов, интересующихся проектами в области сообществ и возобновляемой энергии.",
  othercampusesdesc4: "Официальная страница ADICET в Facebook.",
  othercampusesdesc5: "Сайт факультета науки и технологий.",
  othercampusesdesc6: "Официальная страница факультета науки и технологий в Facebook.",
  othercampusesdesc7: "Сайт факультета сельскохозяйственных технологий.",

  infoaboutfacultyofagriculturaltechnology: "Официальная страница факультета сельскохозяйственных технологий в Facebook."
},

my: {
  keyinfotitle: "အဓိက အချက်အလက်များ",

  keyinfoquestion1: "မေး- ဘာသာရပ်များအတွက် မည်သို့ မှတ်ပုံတင်ရမည်နည်း။",
  keyinfoanswer1: "ဖြေ- မှတ်ပုံတင်ဝက်ဘ်ဆိုက် (reg.cmru) သို့ ဝင်ရောက်ပြီး သင့်ကျောင်းသားကတ်ဖြင့် ဝင်ရောက်ပါ။ သင့်နိုင်ငံသားကတ်(ထိုင်းနိုင်ငံသား) သို့မဟုတ် နိုင်ငံကူးလက်မှတ်ကို စကားဝှက်အဖြစ် အသုံးပြုသည်။ “စာရင်းသွင်းရန်” ကို နှိပ်ပြီးနောက် သင့်လေ့လာမှုအစီအစဉ်အပေါ် အခြေခံ၍ သင့်ဘာသာရပ်များကို ရွေးချယ်ပါ။ ထို့နောက် “စာရင်းသွင်းခြင်းအတည်ပြုရန်” ကို နှိပ်ပြီး နောက်ဆုံးရက်အတွင်း ပညာသင်ကြေးပေးဆောင်ရန် သေချာပါစေ။",

  keyinfoquestion2: "မေး- ကျွန်ုပ်၏ CMRU အီးမေးလ်အကောင့်ကား အဘယ်နည်း။",
  keyinfoanswer2: "ဖြေ- သင့်အီးမေးလ်အသုံးပြုသူအမည်သည် သင့်ကျောင်းသားကတ်ဖြစ်ပြီး @cmru.ac.th ဖြင့် ရေးပါ။ စကားဝှက်မှာ ထိုင်းနှစ်ပုံစံဖြင့် သင့်မွေးသက္ကရာဇ်ကို အခြေခံ၍ cmru@DD/MM/YYYY ဖြစ်သည်။",

  keyinfoquestion3: "မေး- ကျောင်းသားလှုပ်ရှားမှုခရက်ဒစ်များကား အဘယ်နည်း။",
  keyinfoanswer3: "ဖြေ- ကျောင်းသားများသည် ၄ နှစ် အတွင်း အနည်းဆုံး လှုပ်ရှားမှုခရက်ဒစ် ၁၁၈ ခု ရရှိရမည်။ လှုပ်ရှားမှုတစ်ခုစီတွင် ပုံမှန်အားဖြင့် ခရက်ဒစ် ၃ ခု ပေးလေ့ရှိပြီး ၎င်းတို့သည် ဘွဲ့ရရန် လိုအပ်ပါသည်။",

  keyinfoquestion4: "မေး- ကျောင်းသားလှုပ်ရှားမှုခရက်ဒစ်များကို မည်သို့ရယူနိုင်မည်နည်း။",
  keyinfoanswer4: "ဖြေ- ကျောင်းသားအသစ်များအတွက် မိတ်ဆက်အစီအစဉ်များ၊ လက်တွေ့သင်တန်းများ၊ ဆွေးနွေးပွဲများ၊ ကလပ် သို့မဟုတ် ကျောင်းသားပွဲများ၊ စေတနာ့ဝန်ထမ်းလှုပ်ရှားမှုများနှင့် တုံ့ပြန်ချက်ပုံစံများ သို့မဟုတ် စစ်တမ်းများကို ဖြေဆိုခြင်းဖြင့် ခရက်ဒစ်များ ရရှိနိုင်ပါသည်။",

  keyinfoquestion5: "မေး- ကျောင်းသားကျန်းမာရေးအာမခံက ဘာတွေကို အကျုံးဝင်သလဲ။",
  keyinfoanswer5: "ဖြေ- ၂၀၂၃-၂၀၂၄ ခုနှစ်အတွက် အာမခံတွင် ဘတ် ၁၅၀၀၀ အထိ ဆေးကုသစရိတ် နှင့် ဘတ် ၂၀၀၀၀ အထိ ဈာပနထောက်ပံ့မှု ပါဝင်သည်။",

  keyinfoquestion6: "မေး- မိတ်ဖက်ပူးပေါင်းမှုတွင် မည်သည့်ဆေးရုံများ ပါဝင်သနည်း။",
  keyinfoanswer6: "ဖြေ- မိတ်ဖက်ဆေးရုံများတွင် Lanna Hospital Chiang Mai, Rajavej Hospital Chiang Mai, McCormick Hospital, Chiang Mai Hospital, Maharaj Nakorn Chiang Mai Hospital နှင့် Theppanya Hospital တို့ ပါဝင်သည်။",

  keyinfoquestion7: "မေး- ကျောင်းသားအာမခံကို မည်သို့အသုံးပြုရမည်နည်း။",
  keyinfoanswer7: "ဖြေ- ရုံးချိန်အတွင်း အမျိုးသားမှတ်ပုံတင်ကတ်နှင့် မတော်တဆမှုအာမခံကတ်ကို ပြသရမည်။ ရုံးချိန်ပြင်ပတွင်လည်း အမျိုးသားမှတ်ပုံတင်ကတ်နှင့် မတော်တဆမှုအာမခံကတ်ကို ပြသရမည်။ တက္ကသိုလ်ရုံးချိန်အတွင်း ကျောင်းသားဖွံ့ဖြိုးတိုးတက်ရေးဌာနသို့ 053-885430 သို့ ဆက်သွယ်နိုင်သည်။",

  generallinkstitle: "ကျောင်းသားအားလုံး မည်သည့်လင့်ခ်များကို စစ်ဆေးသင့်သနည်း။",
  generallinksdesc1: "သတင်းများ၊ ဌာနများ၊ ဝန်ဆောင်မှုများနှင့် မှတ်ပုံတင်ခြင်းဆိုင်ရာ အချက်အလက်များအတွက် တက္ကသိုလ်၏ အဓိကဝက်ဘ်ဆိုက်။",
  generallinksdesc2: "သင်တန်းမှတ်ပုံတင်ခြင်း၊ အချိန်ဇယားများကို စစ်ဆေးခြင်းနှင့် ပညာရေးမှတ်တမ်းများကို စီမံခန့်ခွဲခြင်းအတွက် အသုံးပြုသည်။",
  generallinksdesc3: "စာရင်းသွင်းခြင်းအတွက် တရားဝင် Facebook စာမျက်နှာ။",
  generallinksdesc4: "ကျောင်းသားသစ်များအတွက်။",
  generallinksdesc5: "ဌာနများ၊ ကောလိပ်များ၊ ပညာရေးဌာနများနှင့် ဌာနများစာရင်း။",
  generallinksdesc6: "ပညာသင်ဆုများ၊ ကျန်းမာရေးဝန်ဆောင်မှုများ၊ ကျောင်းသားလှုပ်ရှားမှုများ၊ အလုပ်အကိုင်ပံ့ပိုးမှု၊ အာမခံ၊ စိတ်ကျန်းမာရေးဝန်ဆောင်မှုများနှင့် ပွဲပြက္ခဒိန်တို့ကို ပေးဆောင်သည်။",
  generallinksdesc7: "ကျောင်းဝင်းအတွင်း အဆောင်များအကြောင်း အချက်အလက်၊ အဆောက်အအုံများ၊ ဈေးနှုန်းများနှင့် ဆက်သွယ်ရန်အသေးစိတ်အချက်အလက်များ ပါဝင်သည်။",
  generallinksdesc8: "စီးပွားရေး၊ ထိုင်းဘာသာစကား၊ ဒစ်ဂျစ်တယ်ကျွမ်းကျင်မှုနှင့် AI ကဲ့သို့သော နယ်ပယ်များတွင် အွန်လိုင်းသင်တန်းများ၊ မကြာခဏ e-certificates များပါရှိသည်။",

  wiangbuatitle: "Wiang Bua ကျောင်းဝင်းရှိ ကျောင်းသားများသည် မည်သည့်လင့်ခ်များကို စစ်ဆေးသင့်သနည်း။",
  wiangbuadesc1: "ကျောင်းသားများ၊ ဆရာ၊ ဆရာမများနှင့် မိဘများအတွက် အချက်အလက်များ။",
  wiangbuadesc2: "သင်တန်းမှတ်ပုံတင်ခြင်း၊ အချိန်ဇယားစစ်ဆေးခြင်းနှင့် ပညာရေးမှတ်တမ်းများကို စီမံခန့်ခွဲခြင်းအတွက် အသုံးပြုသည်။",
  wiangbuadesc3: "မှတ်ပုံတင်ရုံးအတွက် တရားဝင် Facebook စာမျက်နှာ။",
  wiangbuadesc4: "IC-CMRU ကျောင်းသားများအတွက် တရားဝင်ဝက်ဘ်ဆိုက်။",
  wiangbuadesc5: "နိုင်ငံတကာကောလိပ်အတွက် တရားဝင် Facebook စာမျက်နှာ။",
  wiangbuadesc6: "IC-CMRU ကျောင်းသားများအတွက် ကျောင်းသားဝန်ဆောင်မှုများ (စာရင်းသွင်းခြင်း၊ စာရွက်စာတမ်းများ၊ ပညာသင်ကြေး၊ အလုပ်သင်)။",
  wiangbuadesc7: "အလုပ်သင်အစီအစဉ်များ၊ ကုမ္ပဏီစာရင်းများနှင့် လေ့ကျင့်ရေးနေရာချထားမှုများ (အဓိကအားဖြင့် စတုတ္ထနှစ်ကျောင်းသားများအတွက်)။",
  wiangbuadesc8: "စာကြည့်တိုက်ဝန်ဆောင်မှုများနှင့် ပညာရေးဆိုင်ရာအရင်းအမြစ်များ။",
  wiangbuadesc9: "CMRU စာကြည့်တိုက်အတွက် တရားဝင် Facebook စာမျက်နှာ။",
  wiangbuadesc10: "အွန်လိုင်းစနစ်များ၊ ကျောင်းသားပလက်ဖောင်းများ၊ အီလက်ထရွန်းနစ်သင်ယူမှုကိရိယာများနှင့် IT ပံ့ပိုးမှုကဲ့သို့သော Digital CMRU ဝန်ဆောင်မှုများကို အသုံးပြုရန် ဝက်ဘ်ဆိုက်။",
  wiangbuadesc11: "CMRU Digital Services အတွက် တရားဝင် Facebook စာမျက်နှာ။",
  wiangbuadesc12: "တက္ကသိုလ်ကုန်ပစ္စည်းများနှင့် အမှတ်တရပစ္စည်းများ ရောင်းချသည့် CMRU Shop အတွက် တရားဝင် Facebook စာမျက်နှာ။",
  wiangbuadesc13: "ဘွဲ့လွန်ကျောင်းသားများအတွက် ဝက်ဘ်ဆိုက်။",
  wiangbuadesc14: "ဘွဲ့လွန်ကျောင်းအတွက် တရားဝင် Facebook စာမျက်နှာ။",
  wiangbuadesc15: "သရုပ်ပြကျောင်း (မူကြို၊ သူငယ်တန်းနှင့် မူလတန်းပညာရေး) တွင် ကျောင်းသားများ၏ မိဘများနှင့် အုပ်ထိန်းသူများအတွက် အချက်အလက်များ။",
  wiangbuadesc16: "သရုပ်ပြကျောင်းအတွက် တရားဝင် Facebook စာမျက်နှာ။",
  wiangbuadesc17: "လူမှုနှင့် လူမှုရေးသိပ္ပံဌာန၏ ဝက်ဘ်ဆိုက်။",
  wiangbuadesc18: "လူသားပညာနှင့် လူမှုရေးသိပ္ပံဌာန၏ တရားဝင် Facebook စာမျက်နှာ။",

  othercampusestitle: "အခြားကျောင်းဝင်းများရှိ ကျောင်းသားများအတွက်",
  othercampusesdesc1: "သင်္ချာနှင့် သိပ္ပံဌာနအကြောင်း အချက်အလက်များ။",
  othercampusesdesc2: "သင်္ချာနှင့် သိပ္ပံဌာန၏ တရားဝင် Facebook စာမျက်နှာ။",
  othercampusesdesc3: "ရပ်ရွာနှင့် ပြန်လည်ပြည့်ဖြိုးမြဲစွမ်းအင်စီမံကိန်းများနှင့် အစီအစဉ်များကို စိတ်ဝင်စားသော ကျောင်းသားများအတွက် ဝက်ဘ်ဆိုက်။",
  othercampusesdesc4: "ADICET အတွက် တရားဝင် Facebook စာမျက်နှာ။",
  othercampusesdesc5: "သိပ္ပံနှင့်နည်းပညာဌာနအတွက် ဝက်ဘ်ဆိုက်။",
  othercampusesdesc6: "သိပ္ပံနှင့်နည်းပညာဌာနအတွက် တရားဝင်ဖေ့စ်ဘွတ်ခ်စာမျက်နှာ။",
  othercampusesdesc7: "စိုက်ပျိုးရေးနည်းပညာဌာနအတွက် ဝက်ဘ်ဆိုက်။",
  othercampusesdesc8: "စိုက်ပျိုးရေးနည်းပညာဌာနအတွက် တရားဝင်ဖေ့စ်ဘွတ်ခ်စာမျက်နှာ။"
},

id: {
  keyinfotitle: "Informasi Penting",

  keyinfoquestion1: "Bagaimana cara mendaftar mata kuliah?",
  keyinfoanswer1: "Kunjungi website registrasi (reg.cmru.ac.th). Login dengan Student ID sebagai username dan nomor paspor atau ID nasional sebagai password. Klik “Enroll”, pilih mata kuliah sesuai study plan, lalu klik “Confirm Enrollment”. Pastikan membayar biaya kuliah sebelum jatuh tempo.",

  keyinfoquestion2: "Apa akun email CMRU saya?",
  keyinfoanswer2: "Username email adalah studentID@cmru.ac.th. Password: cmru@DD/MM/YYYY berdasarkan tanggal lahir dalam format tahun Thai.",

  keyinfoquestion3: "Apa itu Student Activity Credits?",
  keyinfoanswer3: "Mahasiswa harus mengumpulkan minimal 118 kredit aktivitas selama 4 tahun kuliah. Setiap aktivitas biasanya memberikan 3 kredit dan wajib untuk kelulusan.",

  keyinfoquestion4: "Bagaimana cara mendapatkan Student Activity Credits?",
  keyinfoanswer4: "Ikut serta dalam program orientasi, workshop, seminar, kegiatan klub atau mahasiswa, aktivitas sukarela, serta mengisi feedback atau survei.",

  keyinfoquestion5: "Apa saja yang ditanggung oleh asuransi kesehatan mahasiswa?",
  keyinfoanswer5: "Pada tahun akademik 2023–2024, asuransi mencakup biaya medis hingga 15.000 baht dan bantuan kematian hingga 20.000 baht.",

  keyinfoquestion6: "Rumah sakit mana saja yang termasuk jaringan mitra?",
  keyinfoanswer6: "Rumah sakit mitra meliputi Lanna Hospital Chiang Mai, Rajavej Hospital Chiang Mai, McCormick Hospital, Chiang Mai Hospital, Maharaj Nakorn Chiang Mai Hospital, dan Theppanya Hospital.",

  keyinfoquestion7: "Bagaimana cara menggunakan asuransi mahasiswa?",
  keyinfoanswer7: "Pada jam kerja, tunjukkan kartu ID nasional dan kartu asuransi kecelakaan. Di luar jam kerja, tetap tunjukkan kedua kartu tersebut dan hubungi Student Development Division di 053-885430 selama jam kerja universitas.",

  generallinkstitle: "Link apa saja yang harus dicek semua mahasiswa?",
  generallinksdesc1: "Website utama CMRU untuk berita, fakultas, layanan, dan informasi registrasi.",
  generallinksdesc2: "Digunakan untuk registrasi mata kuliah, cek jadwal, dan mengelola data akademik.",
  generallinksdesc3: "Halaman Facebook resmi Office of the Registrar.",
  generallinksdesc4: "Informasi untuk mahasiswa baru.",
  generallinksdesc5: "Direktori fakultas, college, unit akademik, dan departemen.",
  generallinksdesc6: "Informasi beasiswa, layanan kesehatan, aktivitas mahasiswa, dukungan karir, asuransi, kesehatan mental, dan kalender kegiatan.",
  generallinksdesc7: "Informasi asrama kampus termasuk fasilitas, harga, dan kontak.",
  generallinksdesc8: "Kursus online seperti bisnis, bahasa Thai, keterampilan digital, dan AI dengan sertifikat.",

  wiangbuatitle: "Link apa saja yang harus dicek mahasiswa di Kampus Wiang Bua?",
  wiangbuadesc1: "Informasi untuk mahasiswa, dosen, dan orang tua.",
  wiangbuadesc2: "Registrasi mata kuliah, cek jadwal, dan data akademik.",
  wiangbuadesc3: "Halaman Facebook resmi Office of the Registrar.",
  wiangbuadesc4: "Website resmi mahasiswa internasional IC-CMRU.",
  wiangbuadesc5: "Halaman Facebook resmi International College.",
  wiangbuadesc6: "Layanan mahasiswa IC-CMRU (registrasi, dokumen, biaya kuliah, magang).",
  wiangbuadesc7: "Program magang, daftar perusahaan, dan penempatan pelatihan.",
  wiangbuadesc8: "Layanan perpustakaan dan sumber akademik.",
  wiangbuadesc9: "Halaman Facebook resmi perpustakaan CMRU.",
  wiangbuadesc10: "Layanan digital CMRU seperti sistem online, platform mahasiswa, e-learning, dan dukungan IT.",
  wiangbuadesc11: "Halaman Facebook resmi Digital CMRU.",
  wiangbuadesc12: "Halaman Facebook resmi CMRU Shop (merchandise).",
  wiangbuadesc13: "Website mahasiswa pascasarjana.",
  wiangbuadesc14: "Halaman Facebook resmi Graduate School.",
  wiangbuadesc15: "Informasi sekolah demonstrasi untuk orang tua dan wali.",
  wiangbuadesc16: "Halaman Facebook resmi sekolah demonstrasi.",
  wiangbuadesc17: "Website Fakultas Humaniora dan Ilmu Sosial.",
  wiangbuadesc18: "Halaman Facebook resmi fakultas.",

  othercampusestitle: "Untuk mahasiswa di kampus lain",
  othercampusesdesc1: "Informasi Fakultas Matematika dan Ilmu Pengetahuan Alam.",
  othercampusesdesc2: "Halaman Facebook resmi Fakultas Matematika dan Ilmu Pengetahuan Alam.",
  othercampusesdesc3: "Website untuk mahasiswa yang tertarik pada proyek komunitas dan energi terbarukan.",
  othercampusesdesc4: "Halaman Facebook resmi ADICET.",
  othercampusesdesc5: "Website Fakultas Sains dan Teknologi.",
  othercampusesdesc6: "Halaman Facebook resmi Fakultas Sains dan Teknologi.",
  othercampusesdesc7: "Website Fakultas Teknologi Pertanian.",
  othercampusesdesc8: "Halaman Facebook resmi Fakultas Teknologi Pertanian."
},

ph: {
  keyinfotitle: "Pangunahing Impormasyon",

  keyinfoquestion1: "Paano ako magpaparehistro para sa mga kurso?",
  keyinfoanswer1: "Pumunta sa website ng pagpaparehistro (reg.cmru) at mag-log in gamit ang iyong student ID. Ang iyong pambansang ID o pasaporte ang gagamitin bilang password. I-click ang “Enroll,” pagkatapos ay piliin ang iyong mga kurso batay sa iyong plano sa pag-aaral. Pagkatapos nito, i-click ang “Confirm Enrollment,” at siguraduhing bayaran ang mga bayarin sa matrikula sa loob ng deadline.",

  keyinfoquestion2: "Ano ang aking CMRU email account?",
  keyinfoanswer2: "Ang iyong email username ay ang iyong student ID na sinusundan ng @cmru.ac.th. Ang password ay cmru@DD/MM/YYYY, batay sa iyong petsa ng kapanganakan sa format ng taon ng Thai.",

  keyinfoquestion3: "Ano ang ‘Student Activity Credit’?",
  keyinfoanswer3: "Ang mga estudyante ay dapat makakuha ng hindi bababa sa 118 activity credits sa buong 4-taong kurso. Ang bawat aktibidad ay karaniwang nagbibigay ng 3 credits, at ang mga ito ay kinakailangan para sa pagtatapos.",

  keyinfoquestion4: "Paano ako makakakuha ng Student Activity Credits?",
  keyinfoanswer4: "Maaari kang makakuha ng mga credits sa pamamagitan ng pagsali sa mga programa ng oryentasyon, mga workshop, mga seminar, mga kaganapan sa club o estudyante, mga aktibidad ng boluntaryo, at pagsagot sa mga feedback form o survey.",

  keyinfoquestion5: "Ano ang sakop ng health insurance ng estudyante?",
  keyinfoanswer5: "Kasama sa saklaw ng insurance para sa 2023–2024 ang saklaw ng gastusing medikal hanggang 15,000 baht at tulong sa libing hanggang 20,000 baht.",

  keyinfoquestion6: "Aling mga ospital ang kasama sa partner network?",
  keyinfoanswer6: "Kabilang sa mga partner hospital ang Lanna Hospital Chiang Mai, Rajavej Hospital Chiang Mai, McCormick Hospital, Chiang Mai Hospital, Maharaj Nakorn Chiang Mai Hospital, at Theppanya Hospital.",

  keyinfoquestion7: "Paano ko gagamitin ang student insurance?",
  keyinfoanswer7: "Sa oras ng opisina, dapat mong ipakita ang iyong national ID card at accident insurance card. Sa labas ng oras ng opisina, kailangan mo ring ipakita ang iyong national ID card at accident insurance card. Maaari mong kontakin ang Student Development Division sa 053-885430 sa oras ng opisina ng unibersidad.",


  generallinkstitle: "Anong mga link ang dapat suriin ng lahat ng mga estudyante?",
  generallinksdesc1: "Pangunahing website ng unibersidad para sa mga balita, fakultad, serbisyo, at impormasyon sa pagpaparehistro.",
  generallinksdesc2: "Ginagamit para sa pagpaparehistro ng kurso, pagsuri ng mga iskedyul, at pamamahala ng mga akademikong rekord.",
  generallinksdesc3: "Opisyal na pahina sa Facebook para sa Tanggapan ng Tagapagrehistro.",
  generallinksdesc4: "Para sa mga bagong mag-aaral.",
  generallinksdesc5: "Direktoryo ng mga fakultad, kolehiyo, akademikong yunit, at departamento.",
  generallinksdesc6: "Nag-aalok ng mga scholarship, serbisyong pangkalusugan, aktibidad ng mag-aaral, suporta sa karera, insurance, serbisyo sa kalusugan ng isip, at kalendaryo ng mga kaganapan.",
  generallinksdesc7: "Impormasyon tungkol sa mga dormitoryo sa loob ng kampus, kabilang ang mga pasilidad, presyo, at mga detalye sa pakikipag-ugnayan.",
  generallinksdesc8: "Mga online na kurso sa mga larangan tulad ng negosyo, wikang Thai, mga kasanayang digital, at AI, kadalasang may kasamang mga e-certificate.",


  wiangbuatitle: "Anong mga link ang dapat tingnan ng mga estudyante sa Wiang Bua Campus?",
  wiangbuadesc1: "Impormasyon para sa mga estudyante, guro, at magulang.",
  wiangbuadesc2: "Ginagamit para sa pagpaparehistro ng kurso, pagsuri ng mga iskedyul, at pamamahala ng mga akademikong rekord.",
  wiangbuadesc3: "Opisyal na pahina sa Facebook para sa Tanggapan ng Tagapagrehistro.",
  wiangbuadesc4: "Opisyal na website para sa mga estudyante ng IC-CMRU.",
  wiangbuadesc5: "Opisyal na pahina sa Facebook para sa International College.",
  wiangbuadesc6: "Mga serbisyo ng estudyante para sa mga estudyante ng IC-CMRU (pagpapatala, mga dokumento, matrikula, mga internship).",
  wiangbuadesc7: "Mga programa sa internship, listahan ng mga kumpanya, at mga placement sa pagsasanay (pangunahin para sa mga mag-aaral sa ikaapat na taon).",
  wiangbuadesc8: "Mga serbisyo sa aklatan at mga akademikong mapagkukunan.",
  wiangbuadesc9: "Opisyal na pahina sa Facebook para sa Aklatan ng CMRU.",
  wiangbuadesc10: "Website para magamit ang mga serbisyo ng Digital CMRU tulad ng mga online system, mga platform ng mag-aaral, mga tool sa e-learning, at suporta sa IT.",
  wiangbuadesc11: "Opisyal na pahina sa Facebook para sa CMRU Digital Services.",
  wiangbuadesc12: "Opisyal na pahina sa Facebook para sa CMRU Shop, na nagbebenta ng mga paninda at souvenir mula sa unibersidad.",
  wiangbuadesc13: "Website para sa mga mag-aaral na nagtapos.",
  wiangbuadesc14: "Opisyal na pahina sa Facebook para sa Graduate School.",
  wiangbuadesc15: "Impormasyon para sa mga magulang at tagapag-alaga ng mga mag-aaral sa paaralang demonstrasyon.",
  wiangbuadesc16: "Opisyal na pahina sa Facebook para sa paaralang demonstrasyon.",
  wiangbuadesc17: "Website para sa Faculty of Humanities and Social Sciences.",
  wiangbuadesc18: "Opisyal na pahina sa Facebook para sa Faculty of Humanities and Social Sciences.",


  othercampusestitle: "Para sa mga estudyante sa ibang kampus",
  othercampusesdesc1: "Impormasyon tungkol sa Faculty of Mathematics and Science.",
  othercampusesdesc2: "Opisyal na pahina sa Facebook para sa Faculty of Mathematics and Science.",
  othercampusesdesc3: "Website para sa mga estudyanteng interesado sa mga proyekto ng komunidad at renewable energy.",
  othercampusesdesc4: "Opisyal na pahina sa Facebook para sa ADICET.",
  othercampusesdesc5: "Website para sa Faculty of Science and Technology.",
  othercampusesdesc6: "Opisyal na pahina sa Facebook para sa Faculty of Science and Technology.",
  othercampusesdesc7: "Website para sa Faculty of Agricultural Technology.",
  othercampusesdesc8: "Opisyal na pahina sa Facebook para sa Faculty of Agricultural Technology."
}

};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (translations[lang] && key in translations[lang]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', initUI);
