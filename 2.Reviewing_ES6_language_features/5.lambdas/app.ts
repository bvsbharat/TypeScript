var container = document.getElementById('container');

function Counter(el) {

    let self = this;
    self.count = 0;

    el.innerHTML = self.count;

    el.addEventListener('click',() =>{
            this.count += 1;
            el.innerHTML = this.count+"update";
        })
}

new Counter(container);