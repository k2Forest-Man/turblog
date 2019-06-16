var divs = document.querySelectorAll('.gallery div');
divs.forEach(div => {
  div.addEventListener('click', function (e) {
    div.classList.add('big')
    if(div.classList('big'))
      div.remove('big')
  }
  )
})
