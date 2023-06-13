const input = document.querySelector('.passbox__func-input')
const genBtn = document.querySelector('.passbox__func-btns-generate')
const copyBtn = document.querySelector('.passbox__func-btns-copy')
const inputNumber = document.querySelector('.passbox__func-input-range-inputNumber')
const slider = document.querySelector('.passbox__func-input-range-slider')
const parag = document.querySelector('.passbox__func-text')

function generateChar(length2) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-=+'
	let result = ''
	const charactersLength = characters.length
	for (let i = 0; i < length2; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	input.value = result
	return result
}

function copy() {
	const copyText = input
	copyText.select()
	copyText.setSelectionRange(0, 25)
	navigator.clipboard
		.writeText(copyText.value)
		.then(() => {
			if (inputNumber.value < 26 && inputNumber.value >= 5 && input.value !== '') {
				parag.classList.add('copied')
				parag.textContent = 'Password copied'
				parag.classList.remove('generated')
				parag.classList.remove('wrong')
			} else {
				parag.classList.remove('copied')
				parag.classList.remove('generated')
			}
		})
		.catch(() => {
			alert('something went wrong')
		})
}

function checkValue(param) {
	inputNumber.value = param
	slider.value = param
}

function changes() {
	checkValue(this.value)
	inputNumber.setAttribute('value', inputNumber.value)
}

function generatePass() {
	if (inputNumber.value < 26 && inputNumber.value >= 5) {
		generateChar(inputNumber.value)
		parag.classList.remove('copied')
		parag.textContent = 'Password created'
		parag.classList.add('generated')
		parag.classList.remove('wrong')
	} else {
		parag.textContent = 'Wrong value'
		parag.classList.remove('copied')
		parag.classList.remove('generated')
		parag.classList.add('wrong')
	}
}

// input.oninput = function () {
// 	if (this.value.max > 25) {

// 	}
// }

input.oninput = function () {
	if (this.value.length > 4) {
		this.value = this.value.slice(0, 4)
	}
}

genBtn.addEventListener('click', generatePass)
copyBtn.addEventListener('click', copy)
slider.addEventListener('mousemove', changes)
slider.addEventListener('touchmove', changes)
inputNumber.addEventListener('change', changes)
