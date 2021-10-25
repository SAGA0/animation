'use strict'

const btn = document.querySelector('.btn')

let timeId,
	i = 0

function myAnimation() {
	const elem = document.querySelector('.box')
	let pos = 0
	let forward = false

	const id = setInterval(frame, 10)
	function frame() {
		if (pos < 301 && !forward) {
			pos++
			elem.style.top = pos + 'px'
			elem.style.left = pos + 'px'
		}

		if (pos == 299) {
			forward = true
		}

		if (pos < 0 || pos == 300 || forward) {
			pos--
			elem.style.top = pos + 'px'
			elem.style.left = pos + 'px'
		}

		if (pos == 0) {
			clearInterval(id)
		}
	}
}

btn.addEventListener('click', myAnimation)

// function logger() {
// 	if (i === 3) {
// 		clearInterval(timeId)
// 	}
// 	console.log('text')
// 	i++
// }
