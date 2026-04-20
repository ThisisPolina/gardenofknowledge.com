function openMap() {
  document.getElementById("mapPopup").style.display = "flex";
}

function closeMap() {
  document.getElementById("mapPopup").style.display = "none";
}


const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.onload = () => img.classList.add("loaded");
      obs.unobserve(img);
    }
  });
});

document.querySelectorAll(".lazy").forEach(img => {
  observer.observe(img);
});

function initUI() { let darkmode = localStorage.getItem('darkmode'); const themeSwitch = document.getElementById('theme-switch'); const updateImage = () => { if (!themeSwitch) return; themeSwitch.src = darkmode === "active" ? "lightmode.png" : "darkmode.png"; }; const enableDarkmode = () => { document.body.classList.add('darkmode'); localStorage.setItem('darkmode', 'active'); darkmode = "active"; updateImage(); }; const disableDarkmode = () => { document.body.classList.remove('darkmode'); localStorage.removeItem('darkmode'); darkmode = null; updateImage(); }; if (darkmode === "active") { document.body.classList.add('darkmode'); } updateImage(); if (themeSwitch) { themeSwitch.onclick = () => { darkmode !== "active" ? enableDarkmode() : disableDarkmode(); }; } document.querySelectorAll('.flag-button').forEach(button => { button.onclick = () => { setLanguage(button.dataset.language); }; }); const savedLang = localStorage.getItem('lang') || 'en'; setLanguage(savedLang); } function loadPage(page) { fetch(page) .then(res => res.text()) .then(data => { document.getElementById("actualstuff").innerHTML = data; const savedLang = localStorage.getItem('lang') || 'en'; setLanguage(savedLang); initUI(); }); }


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
  mapIndicatorsList: "The map indicators list",

  indicator1: "President’s Office Building/Finance Division/Office of Registration and Processing",
  indicator2: "Department of Computer Science",
  indicator3: "Department of Environmental Science",
  indicator4: "Department of Chemistry",
  indicator5: "Department of Mathematics",
  indicator6: "Student Development Division",
  indicator7: "Faculty of Humanities and Social Sciences",
  indicator8: "Coordination Center of Agricultural Technology Faculty",
  indicator9: "Office of Digital Education",
  indicator10: "Home Economics Building",
  indicator11: "Gymnasium",
  indicator12: "Department of Industrial Technology",
  indicator13: "Music Building",
  indicator14: "Performing Arts (Dance) Building",
  indicator15: "Fine Arts Building",
  indicator16: "Department of Biology",
  indicator17: "Department of Physics",
  indicator18: "Department of Public Health",
  indicator19: "The Princess Maha Chakri Sirindhorn Building",
  indicator20: "Faculty of Management Science",
  indicator21: "Fine Arts Study Building",
  indicator22: "Demonstration School of Chiang Mai Rajabhat University Building",
  indicator23: "Special Education Center Building",
  indicator24: "International Student Dormitory Building",
  indicator25: "Student Union",
  indicator26: "Library Office",
  indicator27: "Rajabhat Commemoration Building",
  indicator28: "Faculty of Science and Technology",
  indicator29: "90th Anniversary Rajabhat Building",

  "27thbuilding14thfloorintro": "The 14th floor is for Airotec.",

  digitalcmru3rdfloortext: "The third floor has the Digital Education Office (INC32) which handles general services and administration, finance and accounting, training and academic services, teaching and learning innovation, and computer network management (E-mail, Microsoft Teams, WiFi, VPN, Web Hosting), and a meeting room \"Euang Sai Song Saeng\" with 40 seats (INC31).",

  centraldivisiontitle: "Central Division",
  centraldivisiondesc1: "It is located in the 1st building (on the map).",
  centraldivisiondesc2: "IC-CMRU and CMRU students come here to ask about building locations, submit documents, pick up parcels, or deal with related issues. The staff mostly speak Thai and cannot assist with language communication barriers.",

  infirmarytitle: "Chiang Mai Rajabhat University Infirmary",
  infirmarydesc1: "Any student can come here, but if you don’t speak Thai, you will need to use Google Translate or get help from a friend to explain what kind of assistance you’re seeking. They provide basic first aid and can treat fever, cough, runny nose, and minor wounds. They also provide medical creams and will apply them if you cannot do it yourself, as well as wrap an injured foot, leg, or arm.",
  infirmarydesc2: "They typically close around 4–6 p.m. If you need medicine, you can ask them to give you some (for example, painkillers if you’re experiencing period cramps). Sometimes they will ask you to provide your student ID, major, and age.",

  cmrushoptitle: "CMRU Shop",
  cmrushopdesc1: "CMRU Shop Description",
  cmrushoplink: "CMRU Shop Link"
}
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
}

ph: {
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
}
  
};
function setLanguage(lang) { localStorage.setItem('lang', lang); document.documentElement.setAttribute('lang', lang); document.querySelectorAll('[data-key]').forEach(el => { const key = el.dataset.key; if (translations[lang] && translations[lang][key]) { el.textContent = translations[lang][key]; } }); } document.addEventListener('DOMContentLoaded', initUI);
