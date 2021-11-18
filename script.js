var en = {
  welcome: "Hello",
  name: "Artem Bazdrev", // h1
  title:
    "Considering IT vacancies in <br /><span>web development</span> and <span>testing</span>", // #lang_title
  section01: "Interactive projects", // #lang_section01
  section01_sub: "User interaction&nbsp <span>(Javascript/jQuery)</span>", // #lang_section01_sub
  section02: "Frontend applications", // #lang_section02
  section02_sub:
    "Layout for websites and applications&nbsp <span>(HTML/CSS)</span>", // #lang_section02_sub
  section03: "Web elements", // #lang_section03
  section03_sub: "Layout for basic elements&nbsp <span>(HTML/CSS)</span>", // #lang_section03_sub
};

var ru = {
  welcome: "Привет",
  name: "Артём Баздрев", // h1
  title:
    "Рассматриваю IT вакансии в <br /><span>веб-разработке</span> и <span>тестировании</span>", // #lang_title
  section01: "Интерактивные проекты", // #lang_section01
  section01_sub:
    "Взаимодействие с пользователем&nbsp <span>(Javascript/jQuery)</span>", // #lang_section01_sub
  section02: "Frontend приложения", // #lang_section02
  section02_sub: "Вёрстка сайтов и приложений&nbsp <span>(HTML/CSS)</span>", // #lang_section02_sub
  section03: "Веб элементы", // #lang_section03
  section03_sub: "Вёрстка базовых элементов&nbsp <span>(HTML/CSS)</span>", // #lang_section03_sub
};

var lang = ru;

function setLang(newLang) {
  if (newLang == "en") {
    lang = en;
  } else {
    lang = ru;
  }
  implementLang();
}

function implementLang() {
  document.getElementsByTagName("h1")[0].innerHTML = lang.name;
  document.getElementById("lang_title").innerHTML = lang.title;
  document.getElementById("lang_section01").innerHTML = lang.section01;
  document.getElementById("lang_section01_sub").innerHTML = lang.section01_sub;
  document.getElementById("lang_section02").innerHTML = lang.section02;
  document.getElementById("lang_section02_sub").innerHTML = lang.section02_sub;
  document.getElementById("lang_section03").innerHTML = lang.section03;
  document.getElementById("lang_section03_sub").innerHTML = lang.section03_sub;
}

implementLang();
