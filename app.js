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
    let catHdn = document.getElementsByClassName('cat');
    for (let item of catHdn) {
        item.classList.add('hidden');
    }
}
//select a cat
addEventListener
