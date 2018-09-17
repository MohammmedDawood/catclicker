/* ======= Model ======= */

let model = {
    currentCat: null,
    cats: [
        {
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        },
        {
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        },
        {
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
        },
        {
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
        },
        {
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
        },
        {
            name : 'cutee',
            imgSrc : 'img/cat_picture1.jpeg',
        },
        {
            name : 'Grey',
            imgSrc : 'img/cat_picture2.jpeg',
        },
        {
            name : 'whityy',
            imgSrc : 'img/cat_picture3.jpeg',
        },
        {
            name : 'maxx',
            imgSrc : 'img/cat_picture4.jpeg',
        },
        {
            name : 'purr',
            imgSrc : 'img/cat_picture5.jpeg',
        }
    ]
};

/* ======= Octopus ======= */

let Octopus = {
    init:function() {
        View.init();
    },
    increment:function() {
        //count clicks
        let catClick = document.getElementsByClassName('clicker');
        let catCounter = document.getElementsByTagName('span');

        return function count() {
            Array.from(catClick).forEach(function (element, index) {
                element.addEventListener("click", function () {
                    catCounter[index].innerHTML =Number(catCounter[index].innerHTML)+1;
                });
            });
        }
    }()
}




/* ======= View ======= */

let View = {
    init: function() {
        // adding html elements first
        this.render();

        //catlist elements
        let catHdn = document.getElementsByClassName('cat');
        //button list element
        let buttons = document.getElementsByClassName("button");
        //hide all cats
        hideCats();

        function hideCats() {
            for (let item of catHdn) {
                item.classList.add('hidden');
            }
        }

        //select a cat
        selectCat();
        function selectCat() {
            Array.from(buttons).forEach(function (element, index) {
                element.addEventListener("click", function () {
                    hideCats();
                    catHdn[index].classList.remove('hidden');
                    counter = Number(catCounter[index].innerHTML);
                });
            });
        }
        Octopus.increment();
    },
    render:(function() {
        //creating HTML elements
        return function createHTML() {
            myArray = [0,1,2,3,4,5,6,7,8,9];
            let catBtn = document.createElement('div');
            catBtn.setAttribute('id', 'catlist'); // and make sure myclass has some styles in css
            document.body.appendChild(catBtn);
            const catlist = document.getElementById('catlist');
            for (let num of myArray) {
                //create buttons
                let btn = document.createElement('button');
                btn.id = `button${num}`;
                btn.setAttribute('class', 'button');
                btn.innerHTML = `${model.cats[num].name}`;
                catlist.appendChild(btn);
                //create images
                let catImg = document.createElement('div');
                catImg.setAttribute('id', `cat${num}`);
                catImg.setAttribute('class', `cat`);
                catImg.innerHTML = `<span class="counter">0</span> clicks <br><img class="clicker" src=${model.cats[num].imgSrc}>`;
                document.body.appendChild(catImg);
            }
        };
    })()
};
// start the game
Octopus.init();

