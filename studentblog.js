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
  shoppinganswer9: "A: These are parks you can go to for free: PAO Park, Chiang Mai University Campus, Buak Had Public Park. There are also parks that require an entrance fee. If you would like to go to Royal Ratchaphruek Park, bring your student ID card, as the entrance fee will be 70 baht instead of 200 baht.",

  drivingtitle: "Driving in Chiang Mai",

  drivingquestion1: "Q: Why motorbike?",
  drivinganswer1: "A: The design of many routes and roads is more convenient for motorbikes than for cars. Driving a motorbike will be faster and helps you avoid being late to class. It’s also easier to find parking.",

  drivinganswer2: "Popular brands are Scoopy, Fino, Filano, and Wave. Automatic motorbikes are very common.",

  drivingquestion2: "Q: How to buy a motorbike?",
  drivinganswer3: "A: Renting a motorbike is more expensive than buying one. There are many motorbike shops, but students mostly buy online on Facebook Marketplace or from someone they know. When buying a motorbike, it is essential that the seller provides you with a Green Book.",

  drivingquestion3: "Q: Where to buy motorbike?",
  drivinganswer4: "Many students use Facebook Marketplace to buy motorbikes.",

  drivinganswer5: "Sometimes motorbikes are sold without a Green Book, which is very risky because you won’t be able to legally transfer ownership or sell it later. Some listings don’t show the Green Book, but you can always ask the seller.",

  drivinganswer6: "Many students also arrange shipping from another city. It is recommended to check the motorbike in person when possible. High mileage is not necessarily bad if the motorbike is well maintained, but lower mileage is usually preferred.",

  drivingquestion4: "Q: Do I need a helmet?",
  drivinganswer7: "Yes. Please buy a helmet for your safety and to avoid fines. A full-face helmet is recommended and usually costs around 900 baht.",

  drivingquestion5: "Q: How to transfer ownership of a motorbike?",
  drivinganswer8: "Coming soon.",

  drivingquestion6: "Q: How to take care of a motorbike?",
  drivinganswer9: "It is important to go to a mechanic who can check the condition of your motorbike. Pump your tires at the gas station regularly to avoid issues. You will also need to change the engine oil every 1000–1500 km if you use basic oil. If this is ignored for too long, it may cause serious engine damage that is expensive to fix.",

  drivingquestion7: "Q: How to pay road tax?",
  drivinganswer10: "Bring your Green Book and passport. You will need to have your motorbike inspected, then buy insurance, and finally pay the road tax.",

  drivingquestion8: "Q: How to act during an accident?",
  drivinganswer11: "Coming soon. We plan to help students mentally prepare for what to do if they witness or are involved in an accident.",

   keyinfotitle: "Key info",

  keyinfoquestion1: "Q: How do I register for courses?",
  keyinfoanswer1: "A: Go to the registration website (reg.cmru) and log in using your student ID. Your national ID or passport is used as the password. Click “Enroll,” then select your courses based on your study plan. After that, click “Confirm Enrollment,” and make sure to pay tuition fees within the deadline.",

  keyinfoquestion2: "Q: What is my CMRU email account?",
  keyinfoanswer2: "A: Your email username is your student ID followed by @cmru.ac.th. The password is cmru@DD/MM/YYYY, based on your birthdate in Thai year format.",

  keyinfoquestion3: "Q: What are Student Activity Credits?",
  keyinfoanswer3: "A: Students must earn at least 118 activity credits throughout the 4-year course. Each activity usually gives 3 credits, and these are required for graduation.",

  keyinfoquestion4: "Q: How can I earn Student Activity Credits?",
  keyinfoanswer4: "A: You can earn credits by joining orientation programs, workshops, seminars, club or student events, volunteer activities, and answering feedback forms or surveys.",

  keyinfoquestion5: "Q: What does the student health insurance cover?",
  keyinfoanswer5: "A: The insurance coverage for 2023–2024 includes medical expense coverage up to 15,000 baht and funeral assistance up to 20,000 baht.",

  keyinfoquestion6: "Q: Which hospitals are included in the partner network?",
  keyinfoanswer6: "A: Partner hospitals include Lanna Hospital Chiang Mai, Rajavej Hospital Chiang Mai, McCormick Hospital, Chiang Mai Hospital, Maharaj Nakorn Chiang Mai Hospital, and Theppanya Hospital.",

  keyinfoquestion7: "Q: How do I use the student insurance?",
  keyinfoanswer7: "A: During office hours, you must show your national ID card and accident insurance card. Outside office hours, you also need to show your national ID card and accident insurance card. You can contact the Student Development Division at 053-885430 during university business hours.",


  generallinkstitle: "What links should all students check?",
  generallinksdesc1: "Main university website for news, faculties, services, and registration information.",
  generallinksdesc2: "Used for course registration, checking schedules, and managing academic records.",
  generallinksdesc3: "Official Facebook page for the Office of the Registrar.",
  generallinksdesc4: "For new students.",
  generallinksdesc5: "Directory of faculties, colleges, academic units, and departments.",
  generallinksdesc6: "Offers scholarships, health services, student activities, career support, insurance, mental health services, and an events calendar.",
  generallinksdesc7: "Information about on-campus dorms, including facilities, pricing, and contact details.",
  generallinksdesc8: "Online courses in areas like business, Thai language, digital skills, and AI, often with e-certificates.",


  wiangbuatitle: "What links should students at Wiang Bua Campus check?",
  wiangbuadesc1: "Information for students, teachers, and parents.",
  wiangbuadesc2: "Used for course registration, checking schedules, and managing academic records.",
  wiangbuadesc3: "Official Facebook page for the Office of the Registrar.",
  wiangbuadesc4: "Official website for IC-CMRU students.",
  wiangbuadesc5: "Official Facebook page for the International College.",
  wiangbuadesc6: "Student services for IC-CMRU students (enrollment, documents, tuition, internships).",
  wiangbuadesc7: "Internship programs, company lists, and training placements (mainly for fourth-year students).",
  wiangbuadesc8: "Library services and academic resources.",
  wiangbuadesc9: "Official Facebook page for the CMRU Library.",
  wiangbuadesc10: "Website to use Digital CMRU services such as online systems, student platforms, e-learning tools, and IT support.",
  wiangbuadesc11: "Official Facebook page for CMRU Digital Services.",
  wiangbuadesc12: "Official Facebook page for CMRU Shop, which sells university merchandise and souvenirs.",
  wiangbuadesc13: "Website for graduate students.",
  wiangbuadesc14: "Official Facebook page for the Graduate School.",
  wiangbuadesc15: "Information for parents and guardians of students in the demonstration school (pre-kindergarten, kindergarten, and primary education).",
  wiangbuadesc16: "Official Facebook page for the demonstration school.",
  wiangbuadesc17: "Website for the Faculty of Humanities and Social Sciences.",
  wiangbuadesc18: "Official Facebook page for the Faculty of Humanities and Social Sciences.",


  othercampusestitle: "For students at other campuses",
  othercampusesdesc1: "Information about the Faculty of Mathematics and Science.",
  othercampusesdesc2: "Official Facebook page for the Faculty of Mathematics and Science.",
  othercampusesdesc3: "Site for students interested in community and renewable energy projects and programs.",
  othercampusesdesc4: "Official Facebook page for ADICET.",
  othercampusesdesc5: "Website for the Faculty of Science and Technology.",
  othercampusesdesc6: "Official Facebook page for the Faculty of Science and Technology.",
  infoaboutfacultyofagriculturaltechnology: "Website for the Faculty of Agricultural Technology.",
  othercampusesdesc7: "Official Facebook page for the Faculty of Agricultural Technology.",

  unilife: "Information about university life",
  keyinfo: "Key information",
  keyinfodesc: "This covers registering for courses, setting up your CMRU email, earning student activity credits, using student health insurance, and important links to check out.",
  navigation: "Navigating Wiang Bua campus",
  navigationdesc: "This contains information on the buildings in Wiang Bua Campus.",
  mustknows: "Must-knows from IC-CMRU students of every year and major",
  mustknowsdesc: "This contains insights and advice from IC-CMRU students (we will also cover CMRU students in the future).",
  studentclubs: "Student Clubs (work-in-progress)",
  studentclubsdesc: "This contains information on running or joining a student club, available student clubs, and a Google Form for starting a student club.",

  dailylifetitle: "Information about daily life",
  visatitle: "Visa matters",
  visadesc:
    "This covers what to prepare for a student visa, the application process, visa extensions and reporting, and important reminders to keep in mind.",
  housingtitle: "Renting an apartment or dorm",
  housingdesc:
    "This contains information on finding a place to rent, the payment process, getting a TM30, and how dormitories work.",

  moneytitle: "Money matters",
  moneydesc:
    "This covers where to exchange money, opening a bank account, opening a TrueMoney account, and important things to keep in mind.",

  shoppingtitle: "Shopping in Chiang Mai",
  shoppingdesc:
    "This contains information on where students go for groceries, shopping for regular and school clothes, school supplies, daily necessities, markets, gyms, and parks.",

  drivingtitle: "Driving in Chiang Mai",
  drivingdesc:
    "This contains information on buying and maintaining motorbikes, getting a helmet, paying road tax, and important things to know about driving.",

  eventstitle: "Events all over Chiang Mai",

housingquestion1: "How can I find a place to rent?",
housinganswer1: "You can search through Facebook groups and rental posts or create your own post stating your budget and preferred area (you can include a screenshot from Google Maps). You can also contact landlords directly, but make sure they accept foreign tenants before proceeding.",

housingquestion2: "What is the payment process when renting a place?",
housinganswer2: "Once you choose a room, you usually need to pay a deposit and the first month’s rent. Depending on the agreement, you may be able to negotiate, but some landlords may require 3–6 months’ rent upfront, especially for longer contracts.",

housingquestion3: "How to get a TM30?",
housinganswer3: "After moving in, ask the landlord to submit a TM30 form for you. It must include your check-in (move-in) and check-out dates. If you stay beyond the original check-out date, the landlord will need to submit a new TM30.",

housingquestion4: "How do dormitories work?",
housinganswer4: "The international student dorm is located off campus. You usually need to ask current students if there is an available space, as rooms are shared with around 4 people. The cost is about 6000 baht for the whole semester (around 4 months), with a one-time 1000 baht deposit when you first move in, and about 400 baht for water utilities.",

housingfacilities: "The building has 7 floors, two small elevators, and stairs. Each room includes a small toilet, a small shower, and a small kitchen (no fridge). There are also coin-operated washing machines and a water refill station on the first floor.",
  
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
