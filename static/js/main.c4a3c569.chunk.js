(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),i=o(4),r=o.n(i);o(1);const p=Object(n.createContext)("");var s=o(5),m=o.n(s);var l=function(){const{setGameState:t,userName:e,setUserName:o}=Object(n.useContext)(p);return a.a.createElement("div",{className:"Menu"},a.a.createElement("label",{for:"input"},"Enter Your Name:"),a.a.createElement("input",{id:"input",type:"text",placeholder:"Ex. John Smith",onChange:t=>{o(t.target.value)},onKeyDown:e=>{""!==e.target.value&&"Enter"===e.key?t("playing"):"Enter"===e.key&&m()("You have to write your name to start a game.")}}),a.a.createElement("button",{className:"btn start-btn",onClick:o=>{""!==e.trim()&&t("playing")},disabled:!e.trim()},"Start Quiz"))};const c=[{prompt:"Jak\u0105 barw\u0119 ma sk\xf3rka dojrza\u0142ej limetki?",optionA:"Zielona",optionB:"Czerwona",optionC:"\u017b\xf3\u0142ta",optionD:"Pomara\u0144czowa",answer:"optionA"},{prompt:"Z kt\xf3rego kraju pochodz\u0105 limetki?",optionA:"Brazylia",optionB:"Meksyk",optionC:"Indie",optionD:"Tajlandia",answer:"optionC"},{prompt:"Kt\xf3ry witaminy jest najwi\u0119cej w limetkach?",optionA:"Witamina A",optionB:"Witamina B",optionC:"Witamina C",optionD:"Witamina D",answer:"optionC"},{prompt:"Do jakiej rodziny ro\u015blin nale\u017c\u0105 limetki?",optionA:"R\xf3\u017cowate",optionB:"Winoro\u015blowate",optionC:"Rutowate",optionD:"Morelowate",answer:"optionC"},{prompt:"Jaki smak maj\u0105 limetki?",optionA:"S\u0142odki",optionB:"Gorzki",optionC:"Kwa\u015bny",optionD:"Wytrawny",answer:"optionC"},{prompt:"Jak\u0105 w\u0142a\u015bciwo\u015b\u0107 maj\u0105 limetki, kt\xf3rej nie maj\u0105 cytryny?",optionA:"Zawieraj\u0105 wi\u0119cej cukru",optionB:"Maj\u0105 grubsz\u0105 sk\xf3rk\u0119",optionC:"S\u0105 mniejsze",optionD:"Nie zmieniaj\u0105 koloru po dojrzewaniu",answer:"optionD"},{prompt:"W kt\xf3rym daniu cz\u0119sto wykorzystywane s\u0105 limetki?",optionA:"Risotto",optionB:"Ceviche",optionC:"Pierogi",optionD:"Ratatouille",answer:"optionB"},{prompt:"Z jakiego napoju limetki s\u0105 kluczowym sk\u0142adnikiem?",optionA:"Mojito",optionB:"Pi\xf1a Colada",optionC:"Whisky Sour",optionD:"Bloody Mary",answer:"optionA"},{prompt:"Kt\xf3ry olejek jest pozyskiwany z limetek?",optionA:"Olejek cedrowy",optionB:"Olejek eukaliptusowy",optionC:"Olejek limetkowy",optionD:"Olejek lawendowy",answer:"optionC"},{prompt:"Jak nazywa si\u0119 deser zrobiony z limetek?",optionA:"Tiramisu",optionB:"Sernik",optionC:"Key Lime Pie",optionD:"Panna Cotta",answer:"optionC"},{prompt:"Jak\u0105 w\u0142a\u015bciwo\u015b\u0107 maj\u0105 limetki, podobnie jak cytryny?",optionA:"S\u0105 truj\u0105ce",optionB:"Maj\u0105 w\u0142a\u015bciwo\u015bci antybakteryjne",optionC:"S\u0105 s\u0142odkie",optionD:"Maj\u0105 nasiona",answer:"optionB"},{prompt:"W kt\xf3rym miesi\u0105cu limetki s\u0105 zazwyczaj zbierane?",optionA:"Stycze\u0144",optionB:"Maj",optionC:"Wrzesie\u0144",optionD:"Grudzie\u0144",answer:"optionD"},{prompt:"Jaka jest przeci\u0119tna waga jednej limetki?",optionA:"50-70 gram\xf3w",optionB:"80-100 gram\xf3w",optionC:"120-150 gram\xf3w",optionD:"200-250 gram\xf3w",answer:"optionA"},{prompt:"Kt\xf3ry z tych element\xf3w jest bogaty w limetki?",optionA:"\u017belazo",optionB:"Wap\u0144",optionC:"Potas",optionD:"Magnez",answer:"optionC"},{prompt:"Kt\xf3ra z tych ro\u015blin jest najbli\u017cej spokrewniona z limetk\u0105?",optionA:"Jab\u0142o\u0144",optionB:"Pomara\u0144cza",optionC:"Bananowiec",optionD:"Winoro\u015bl",answer:"optionB"},{prompt:"Kt\xf3re z tych pa\u0144stw jest g\u0142\xf3wnym producentem limetek?",optionA:"Polska",optionB:"Meksyk",optionC:"Australia",optionD:"Kanada",answer:"optionB"},{prompt:"Kt\xf3ry z tych owoc\xf3w ma podobne zastosowanie kulinarnie jak limetka?",optionA:"Gruszka",optionB:"Cytryna",optionC:"Wi\u015bnia",optionD:"Mango",answer:"optionB"},{prompt:"Jak nazywa si\u0119 najcz\u0119stsza odmiana limetki?",optionA:"Tahiti",optionB:"Perska",optionC:"Kaffir",optionD:"Meyer",answer:"optionA"},{prompt:"Jak\u0105 cech\u0119 maj\u0105 soki wyciskane z limetek?",optionA:"S\u0105 m\u0119tne",optionB:"S\u0105 prze\u017aroczyste",optionC:"Maj\u0105 kolor zielony",optionD:"S\u0105 bardzo s\u0142odkie",answer:"optionB"},{prompt:"Kt\xf3ra cz\u0119\u015b\u0107 limetki jest najcz\u0119\u015bciej wykorzystywana w kuchni?",optionA:"Mi\u0105\u017csz",optionB:"Sk\xf3rka",optionC:"Li\u015bcie",optionD:"Kwiaty",answer:"optionA"}];var k=function(){const[t,e]=Object(n.useState)(0),[o,i]=Object(n.useState)(""),{score:r,setScore:s,setGameState:m}=Object(n.useContext)(p),l=t=>{i(t)},k=()=>{e(t-1)};return a.a.createElement("div",{className:"Quiz"},a.a.createElement("h2",null,c[t].prompt),a.a.createElement("div",{className:"questions"},a.a.createElement("button",{className:"btn answear-btn",onClick:()=>{l("optionA")}},c[t].optionA),a.a.createElement("button",{className:"btn answear-btn",onClick:()=>{l("optionB")}},c[t].optionB),a.a.createElement("button",{className:"btn answear-btn",onClick:()=>{l("optionC")}},c[t].optionC),a.a.createElement("button",{className:"btn answear-btn",onClick:()=>{l("optionD")}},c[t].optionD)),t===c.length-1?a.a.createElement("div",{id:"q-buttons-container"},a.a.createElement("button",{className:"btn navi-btn",onClick:k},"Go Back"),a.a.createElement("button",{className:"btn navi-btn fin-button",onClick:()=>{c[t].answer===o&&s(r+1),m("finished")}},"Finish Quiz")):a.a.createElement("div",{id:"q-buttons-container"},t>0&&a.a.createElement("button",{className:"btn navi-btn",onClick:k},"Go Back"),a.a.createElement("button",{className:"btn navi-btn",onClick:()=>{c[t].answer===o&&s(r+1),e(t+1)}},"Next"," ")))};var u=()=>{const{score:t,setScore:e,setGameState:o,userName:i,setUserName:r}=Object(n.useContext)(p);return a.a.createElement("div",{className:"EndScreen"},a.a.createElement("h1",null,"Quiz Finished"),a.a.createElement("h3",null,": ",i," :"),a.a.createElement("h2",null,"You've scored ",t,"/",c.length," points"),a.a.createElement("button",{className:"btn fin-button",onClick:()=>{e(0),r(""),o("menu")}},"Restart Quiz"))};var w=function(){const[t,e]=Object(n.useState)("menu"),[o,i]=Object(n.useState)(""),[r,s]=Object(n.useState)(0);return a.a.createElement("div",{className:"App"},a.a.createElement(p.Provider,{value:{gameState:t,setGameState:e,userName:o,setUserName:i,score:r,setScore:s}},"menu"===t&&a.a.createElement(l,null),"playing"===t&&a.a.createElement(k,null),"finished"===t&&a.a.createElement(u,null)))};var y=t=>{t&&t instanceof Function&&o.e(3).then(o.bind(null,15)).then(e=>{let{getCLS:o,getFID:n,getFCP:a,getLCP:i,getTTFB:r}=e;o(t),n(t),a(t),i(t),r(t)})};r.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null))),y()},6:function(t,e,o){t.exports=o(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.c4a3c569.chunk.js.map