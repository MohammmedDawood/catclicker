//catlist elements
let catHdn = document.getElementsByClassName('cat');
//button list element
let buttons = document.getElementsByClassName("button");
//creating HTML elements
createHTML();
function createHTML() {
    let catBtn = document.createElement('div');
    catBtn.setAttribute('id', 'catlist'); // and make sure myclass has some styles in css
    document.body.appendChild(catBtn);
    const catlist = document.getElementById('catlist');
    for (let num of [1, 2, 3, 4, 5]) {
        //create buttons
        let btn = document.createElement('button');
        btn.id = `button${num}`;
        btn.setAttribute('class', 'button');
        btn.innerHTML = `cat ${num}`;
        catlist.appendChild(btn);
        //create images
        let catImg = document.createElement('div');
        catImg.setAttribute('id', `cat${num}`);
        catImg.setAttribute('class', `cat`);
        catImg.innerHTML = `<span class="counter">0</span> clicks <br><img class="clicker" src="cat_picture${num}.jpeg">`;
        document.body.appendChild(catImg);
    }
}
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
        });
    });
}

