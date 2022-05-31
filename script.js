function changeColor() {
    if(document.querySelector('.pink')){
      document.querySelector('.Upper-table').classList.add('green')
      document.querySelector('.Mid-table').classList.add('yellow')
      document.querySelector('.Low-table').classList.add('red')
      document.querySelector('.Upper-table').classList.remove('red')
      document.querySelector('.Mid-table').classList.remove('black')
      document.querySelector('.Low-table').classList.remove('pink')
    }
    else{
      document.querySelector('.Upper-table').classList.add('red')
      document.querySelector('.Mid-table').classList.add('black')
      document.querySelector('.Low-table').classList.add('pink')
      document.querySelector('.Upper-table').classList.remove('green')
      document.querySelector('.Mid-table').classList.remove('yellow')
      document.querySelector('.Low-table').classList.remove('red')
      }
    }