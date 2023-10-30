const whereAreYou = document.getElementById('where-are-you')

const parentWhereAreYou = whereAreYou.parentElement
parentWhereAreYou.style.color = 'red'

const firstChildOfChilf = whereAreYou.firstElementChild
firstChildOfChilf.innerText = 'texto adicionado a ele'

const firstChild = parentWhereAreYou.firstChild

const firstChild2 = whereAreYou.previousElementSibling

const attention = whereAreYou.nextSibling

const thirdChild = whereAreYou.nextElementSibling

const thirdChild2 = parentWhereAreYou.lastElementChild.previousElementSibling
