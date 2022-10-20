document.addEventListener("DOMContentLoaded", function () {

    const inputRange = document.querySelector('.testimonials-progress');
    const testimonialsWrap = document.querySelector('.testimonials-slider-wrap');

    const testimonials = [
        {
            "registration code": "000001",
            "name": "Michael John",
            "country": "Local Austria",
            "day": "Today",
            "img": "../../assets/icons/user_icon.svg",
            "alt": "User logo",
            "text1": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
            "text2": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        },
        {
            "registration code": "000002",
            "name": "Oskar Samborsky",
            "country": "Local Austria",
            "day": "Yesterday",
            "img": "../../assets/images/user1.jpg",
            "alt": "User logo",
            "text1": "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
            "text2": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        },
        {
            "registration code": "000003",
            "name": "Mila Riksha",
            "country": "Local Austria",
            "day": "Yesterday",
            "img": "../../assets/images/user2.jpg",
            "alt": "User logo",
            "text1": "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
            "text2": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        },
        {
            "registration code": "000004",
            "name": "Fredericka Michelin",
            "country": "Local Austria",
            "day": "Today",
            "img": "../../assets/images/user3.jpg",
            "alt": "User logo",
            "text1": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
            "text2": "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
        },
        {
            "registration code": "000005",
            "name": "Oska Samborska",
            "country": "Local Austria",
            "day": "Yesterday",
            "img": "../../assets/icons/user_icon.svg",
            "alt": "User logo",
            "text1": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
            "text2": "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
        },
        {
            "registration code": "000006",
            "name": "Mick Johnass",
            "country": "Local Austria",
            "day": "Today",
            "img": "../../assets/images/user1.jpg",
            "alt": "User logo",
            "text1": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
            "text2": "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
        },
        {
            "registration code": "000007",
            "name": "Elena Pitersson",
            "country": "Local Austria",
            "day": "Yesterday",
            "img": "../../assets/images/user3.jpg",
            "alt": "User logo",
            "text1": "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
            "text2": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        },
        {
            "registration code": "000008",
            "name": "Anna Wintur",
            "country": "Local Austria",
            "day": "Today",
            "img": "../../assets/images/user2.jpg",
            "alt": "User logo",
            "text1": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
            "text2": "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
        },
        {
            "registration code": "000009",
            "name": "Nick John",
            "country": "Local Austria",
            "day": "Yesterday",
            "img": "../../assets/icons/user_icon.svg",
            "alt": "User logo",
            "text1": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
            "text2": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        },
        {
            "registration code": "000010",
            "name": "Paul Pitersson",
            "country": "Local Austria",
            "day": "Yesterday",
            "img": "../../assets/images/user1.jpg",
            "alt": "User logo",
            "text1": "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
            "text2": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        },
        {
            "registration code": "000011",
            "name": "Carolina Smith",
            "country": "Local Austria",
            "day": "Yesterday",
            "img": "../../assets/images/user3.jpg",
            "alt": "User logo",
            "text1": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
            "text2": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        },
    ]

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    window.addEventListener('load', function () {
        addTestimonialsCards();
    })

    function createTestimonialsCard(number) {

        let testimonialsCard = document.createElement("div");
        testimonialsCard.className = "testimonials-card";
        testimonialsCard.dataset.code = `${testimonials[number]["registration code"]}`;

        let userHeader = document.createElement("div");
        userHeader.className = "user-header";

        let userLogo = document.createElement("div");
        userLogo.className = "user-logo";
        userLogo.innerHTML = `<img src = "${testimonials[number]["img"]}" alt="${testimonials[number]["alt"]}">`;

        let userInfo = document.createElement("div");
        userInfo.className = "user-info";

        let userName = document.createElement("h4");
        userName.className = "title";
        userName.classList.add('user-title')
        userName.innerHTML = `${testimonials[number]["name"]}`;

        let userInfoText = document.createElement("div");
        userInfoText.className = "user-info-text";

        let userLocation = document.createElement("span");
        userLocation.className = "user-location";
        userLocation.innerHTML = `${testimonials[number]["country"]}`;

        let userDott = document.createElement("span");
        userDott.className = "user-dott";
        userDott.innerHTML = `&#183;`;

        let userDate = document.createElement("span");
        userDate.className = "user-date";
        userDate.innerHTML = `${testimonials[number]["day"]}`;

        userInfoText.append(userLocation, userDott, userDate);
        userInfo.append(userName, userInfoText);
        userHeader.append(userLogo, userInfo);

        let userTextWrap = document.createElement("div");
        userTextWrap.className = "user-text-wrap";

        let userText1 = document.createElement("p");
        userText1.className = "user-text";
        userText1.innerHTML = `${testimonials[number]["text1"]}`;

        let userText2 = document.createElement("p");
        userText2.className = "user-text";
        userText2.innerHTML = `${testimonials[number]["text2"]}`;

        userTextWrap.append(userText1, userText2);

        testimonialsCard.append(userHeader, userTextWrap);
        testimonialsWrap.append(testimonialsCard);
    }

    function addTestimonialsCards() {
        let number;
        let count = 0;
        let check = [];
        while (count < 11) {
            number = getRandomNumber(0, testimonials.length);
            if (!check.includes(number)) {
                check.push(number);
                createTestimonialsCard(number);
                count++;
            }
        }
        if (window.innerWidth < 990) {
            modalOpen(testimonialsWrap);
        }
    }

    const changeWrapPadding = (elem, count, value) =>{
        let paddingValue = count * value;
        elem.style.left = `-${paddingValue}px`;
    }

    let paddingCount;
    if (window.innerWidth >= 1400) {
        paddingCount = 297;
    } else if (window.innerWidth < 1400 && window.innerWidth >= 640) {
        paddingCount = 323;
    }

    const rangeValue = () =>{
        let newValue = inputRange.value;
        changeWrapPadding(testimonialsWrap, paddingCount, newValue);
    }

    inputRange.addEventListener("input", rangeValue);

    if (window.innerWidth >= 1400) {
        inputRange.setAttribute('max', '7');
    }else if(window.innerWidth < 1400){
        inputRange.setAttribute('max', '8');
    }

    const modal = document.querySelector('.modal');
    const modalWrapper = document.querySelector('.modal-wrapper');
    const modalButton = document.querySelector('.modal-close');
    const body = document.querySelector("body");

    function createModal(number) {

        let modalCard = document.createElement("div");
        modalCard.className = "modal-card";
        modalCard.dataset.code = `${testimonials[number]["registration code"]}`;

        let userHeader = document.createElement("div");
        userHeader.className = "user-header";

        let userLogo = document.createElement("div");
        userLogo.className = "user-logo";
        userLogo.innerHTML = `<img src = "${testimonials[number]["img"]}" alt="${testimonials[number]["alt"]}">`;

        let userInfo = document.createElement("div");
        userInfo.className = "user-info";

        let userName = document.createElement("h4");
        userName.className = "title";
        userName.classList.add('user-title')
        userName.innerHTML = `${testimonials[number]["name"]}`;

        let userInfoText = document.createElement("div");
        userInfoText.className = "user-info-text";

        let userLocation = document.createElement("span");
        userLocation.className = "user-location";
        userLocation.innerHTML = `${testimonials[number]["country"]}`;

        let userDott = document.createElement("span");
        userDott.className = "user-dott";
        userDott.innerHTML = `&#183;`;

        let userDate = document.createElement("span");
        userDate.className = "user-date";
        userDate.innerHTML = `${testimonials[number]["day"]}`;

        userInfoText.append(userLocation, userDott, userDate);
        userInfo.append(userName, userInfoText);
        userHeader.append(userLogo, userInfo);

        let userTextWrap = document.createElement("div");
        userTextWrap.className = "user-text-wrap";

        let userText1 = document.createElement("p");
        userText1.className = "user-text";
        userText1.innerHTML = `${testimonials[number]["text1"]}`;

        let userText2 = document.createElement("p");
        userText2.className = "user-text";
        userText2.innerHTML = `${testimonials[number]["text2"]}`;

        userTextWrap.append(userText1, userText2);

        modalCard.append(userHeader, userTextWrap);
        modalWrapper.append(modalCard);
    }

    function modalOpen(colection) {
        for (const elem of colection.children) {
            elem.addEventListener('click', function () {
                for (let i = 0; i < testimonials.length; i++) {
                    if (testimonials[i]["registration code"] === this.dataset.code) {
                        createModal(i);
                        modal.classList.add("open");
                        body.classList.add("not-scroll");
                    }
                }
            });
        }
    }

    function modalClose() {
        modal.classList.remove("open");
        setTimeout(() => {
            document.querySelector('.modal-card').remove();
        }, 1500);
        body.classList.remove("not-scroll");
    }

    modalButton.addEventListener('click', function (event) {
        modalClose();
        event.stopPropagation()
    });

    modalWrapper.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    modal.addEventListener('click', function () {
        modalClose();
    });































});

