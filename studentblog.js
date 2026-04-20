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
  
};
function setLanguage(lang) { localStorage.setItem('lang', lang); document.documentElement.setAttribute('lang', lang); document.querySelectorAll('[data-key]').forEach(el => { const key = el.dataset.key; if (translations[lang] && translations[lang][key]) { el.textContent = translations[lang][key]; } }); } document.addEventListener('DOMContentLoaded', initUI);
