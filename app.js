// window.alert('1')

// window.confirm('Как тебя зовут?')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello')

console.log(heading2)

console.dir(heading.textContent)

setTimeout (() => {
    addStyleTo(heading)
}, 1500)

function addStyleTo(node) {
    node.textContent = 'Changed from JavaScript'
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
}