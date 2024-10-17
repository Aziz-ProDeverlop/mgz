const menuButton = document.getElementById('menuButton');
const menu = document.querySelector('.Buttons');
menuButton.addEventListener('click', function() {
    this.classList.toggle('open');
    menu.classList.toggle('open');
});


const translations = {
    en: {
        Name: "Denis Novic",
        Job: "UX | UI designer 24 years old, Minsk",
        About: "About me",
        text1: "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.",
        text2: "I'm studying at courses Web and mobile design interfaces in IT-Academy.",
        text3: "Ready to implement excellent projects with wonderful people.",
        Skill: "Skills",
        Sk: "I work in such programs as",
        Port: "Portfolio",
        Cont: "Contacts",
        info: ">Want to know more or just chat? You are welcome!",
        H: "Home",
        A: "About me",
        S: "Skills",
        P: "Portfolio",
        C: "Contacts"
    },
    ru: {
        Name: "Денис Новик",
        Job: "Дизайнер UX | пользовательского интерфейса, 24 года, Минск",
        About: "Обо мне",
        text1: "Привет, я Денис – UX/UI дизайнер из Минска. Я интересуюсь дизайном и всем, что с ним связано.",
        text2: "Я учусь на курсах веб-дизайна и дизайна мобильных интерфейсов в IT-Академии.",
        text3: "Готов реализовывать отличные проекты с замечательными людьми.",
        Skill: "Навыки",
        Sk: "Я работаю в таких программах, как",
        Port: "Портфолио",
        Cont: "Контакты",
        info: ">Хотите узнать больше или просто поболтать? Добро пожаловать!",
        H: "Главная",
        A: "Обо мне",
        S: "Навыки",
        P: "Портфолио",
        C: "Контакты"
    }
    
};

function changeLanguage(lang) {
    document.getElementById('Name').textContent = translations[lang].Name;
    document.getElementById('Job').textContent = translations[lang].Job;
    document.getElementById('About').textContent = translations[lang].About;
    document.getElementById('text1').textContent = translations[lang].text1;
    document.getElementById('text2').textContent = translations[lang].text2;
    document.getElementById('text3').textContent = translations[lang].text3;
    document.getElementById('Skill').textContent = translations[lang].Skill;
    document.getElementById('Sk').textContent = translations[lang].Sk;
    document.getElementById('Port').textContent = translations[lang].Port;
    document.getElementById('Cont').textContent = translations[lang].Cont;
    document.getElementById('info').textContent = translations[lang].info;
    document.getElementById('H').textContent = translations[lang].H;
    document.getElementById('A').textContent = translations[lang].A;
    document.getElementById('S').textContent = translations[lang].S;
    document.getElementById('P').textContent = translations[lang].P;
    document.getElementById('C').textContent = translations[lang].C;
}