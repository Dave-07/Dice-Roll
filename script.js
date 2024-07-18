 const diceBtn = document.querySelector('.btn');
    const dice = document.querySelector('i');
    const container = document.querySelector('.container');
    const color = document.querySelector('.color');
    const rollCount = document.querySelector('.roll-count');
    const diceArr = [{ num: 'one', color: 'red' }, { num: 'two', color: 'orange' }, { num: 'three', color: 'yellow' }, { num: 'four', color: 'green' }, { num: 'five', color: 'blue' }, { num: 'six', color: 'violet' }];

    let roll = 1;

    function diceRoll() {
        const rand = Math.floor(Math.random() * 6) + 1;
        const setColorEl = diceArr[rand - 1].color;
        dice.className = `fa-solid fa-dice-${diceArr[rand - 1].num}`;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div>
            <span>Roll ${roll}: </span>
            <i style="color: ${setColorEl}" class="fa-solid fa-dice-${diceArr[rand - 1].num}"></i>
        </div>`;
        setTimeout(() => {
            newDiv.style.opacity = '.7';
        }, 100);
        newDiv.classList.add('history');
        color.style.visibility = 'hidden';
        color.style.backgroundColor = setColorEl;

        if (roll % 2 == 0){
            dice.classList.add('rotateY');
        } else {
            dice.classList.add('rotateX');
        }
       
        setTimeout(() => {
            dice.classList.remove('rotateY');
            dice.classList.remove('rotateX');
            color.style.visibility = 'visible';
        }, 300);

        container.appendChild(newDiv);
        rollCount.innerText = roll;
        roll++;   
    }

    diceBtn.addEventListener('click', diceRoll);