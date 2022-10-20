document.addEventListener("DOMContentLoaded", function () {


    const zoos = [
        {
            "registration code": "000001",
            "type": "giant pandas",
            "habitat": "Native to Southwest China",
            "img": "../../assets/images/cards-image/pandas push me.jpg",
            "alt": "Cute pandas",
            "food-icon": "../../assets/icons/banana-bamboo_icon.svg",
        },
        {
            "registration code": "000002",
            "type": "Eagles",
            "habitat": "Native to South America",
            "img": "../../assets/images/cards-image/eagl.jpg",
            "alt": "Eagl",
            "food-icon": "../../assets/icons/meet-fish_icon.svg",
        },
        {
            "registration code": "000003",
            "type": "Gorillas",
            "habitat": "Native to Congo",
            "img": "../../assets/images/cards-image/gorilla.jpg",
            "alt": "Gorilla",
            "food-icon": "../../assets/icons/banana-bamboo_icon.svg",
        },
        {
            "registration code": "000004",
            "type": "Two-toed Sloth",
            "habitat": "Mesoamerica, South America",
            "img": "../../assets/images/cards-image/sloth.jpg",
            "alt": "Sloth",
            "food-icon": "../../assets/icons/banana-bamboo_icon.svg",
        },
        {
            "registration code": "000005",
            "type": "Cheetahs",
            "habitat": "Native to Africa",
            "img": "../../assets/images/cards-image/cheetahs.jpg",
            "alt": "Cheetahs",
            "food-icon": "../../assets/icons/meet-fish_icon.svg",
        },
        {
            "registration code": "000006",
            "type": "Penguins",
            "habitat": "Native to Antarctica",
            "img": "../../assets/images/cards-image/penguins.jpg",
            "alt": "Penguin",
            "food-icon": "../../assets/icons/meet-fish_icon.svg",
        },
        {
            "registration code": "000007",
            "type": "Alligators",
            "habitat": "Native to Southeastern U. S.",
            "img": "../../assets/images/cards-image/alligator.png",
            "alt": "Alligator",
            "food-icon": "../../assets/icons/meet-fish_icon.svg",
        },
    ]

    const zoosCardWrapper = document.querySelector('.zoos-cards-wrap');

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    window.addEventListener('load', function () {
        addPetsCards();
    })

    function createPetCard(number) {

        let zooCard = document.createElement("div");
        zooCard.className = "zoos-card";
        zooCard.dataset.code = `${zoos[number]["registration code"]}`;

        let zooCardImage = document.createElement("div");
        zooCardImage.className = "card-image";
        zooCardImage.innerHTML = `<img src = "${zoos[number]["img"]}" alt="${zoos[number]["alt"]}">`;

        let zooCardSpan = document.createElement("span");
        zooCardSpan.innerHTML = `${zoos[number]["type"]} <br />${zoos[number]["habitat"]}`;

        zooCardImage.append(zooCardSpan);

        let zooCardDesc = document.createElement("div");
        zooCardDesc.className = "card-descrription";

        let zooCardInfo = document.createElement("div");
        zooCardInfo.className = "card-info";

        let zooCardTitle = document.createElement("h3");
        zooCardTitle.className = "title";
        zooCardTitle.classList.add("card-title");
        zooCardTitle.innerHTML = `${zoos[number]["type"]}`;

        let zooCardText = document.createElement("p");
        zooCardText.className = "card-text";
        zooCardText.innerHTML = `${zoos[number]["habitat"]}`;

        zooCardInfo.append(zooCardTitle, zooCardText);

        let zooCardLogo = document.createElement("div");
        zooCardLogo.className = "card-food-logo";
        zooCardLogo.innerHTML = `<img src = "${zoos[number]["food-icon"]}" alt="">`;

        zooCardDesc.append(zooCardInfo, zooCardLogo);

        zooCard.append(zooCardImage, zooCardDesc);
        zoosCardWrapper.append(zooCard);
    }

    function addPetsCards() {
        let number;
        let count = 0;
        let check = [];
        while (count < 7) {
            number = getRandomNumber(0, zoos.length);
            if (!check.includes(number)) {
                check.push(number);
                createPetCard(number);
                count++;
            }
        }
    }


    const arrowLeft = document.querySelector('.zoos-left-button');
    const arrowRight = document.querySelector('.zoos-right-button');

    arrowLeft.addEventListener('click', function () {
        zoosCardWrapper.classList.add('left-move');
        let zooCard = document.querySelectorAll('.zoos-card');
        setTimeout(() => {
            for (let i = 0; i < zooCard.length; i++) {
                zooCard[i].remove()
            }
            zoosCardWrapper.classList.remove('left-move')
            addPetsCards();
        }, 500);
    })

    arrowRight.addEventListener('click', function () {
        zoosCardWrapper.classList.add('right-move');
        let zooCard = document.querySelectorAll('.zoos-card');
        setTimeout(() => {
            for (let i = 0; i < zooCard.length; i++) {
                zooCard[i].remove()
            }
            zoosCardWrapper.classList.remove('right-move')
            addPetsCards();
        }, 500);
    })





























});

