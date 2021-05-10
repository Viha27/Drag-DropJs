const fill = Array.from(document.querySelectorAll('.fill'));
const empties = Array.from(document.querySelectorAll('.empty'));
// Fill listeners

fill.forEach(fill => {
    fill.addEventListener('click', current)
    fill.addEventListener('dragstart', dragStart)
})

// Loop through empty boxes and add listeners
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
    empty.addEventListener('click', current)
}

// Current function
function current(e) {
    e.preventDefault();
    console.log(e.target)
}

// Drag Functions

function dragStart(e) {
    return dragObject = e.target;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
        this.className += ' hovered';
}

function dragLeave(e) {
    e.preventDefault();
    this.className = 'empty';
}

function dragDrop(e) {

    let empties = e.target;
    if(empties.classList.contains('empty')) {
        this.append(dragObject);
        this.classList.remove('hovered');
    } else {
        this.className = 'empty';
    }
    score = 0;

        if(empties.dataset.number === dragObject.dataset.number) {
            score++
            console.log('match')
            console.log(score);
            message = 'You got that right';
            document.querySelector('.score').innerHTML = message
        } else {
            message = 'You got that wrong';
            document.querySelector('.score').innerHTML = message
            console.log('did not match')
        }
}





