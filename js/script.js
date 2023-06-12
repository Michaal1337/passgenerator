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
			parag.classList.add('copied')
			parag.textContent = "Password copied"
			parag.classList.remove('generated')
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
	generateChar(inputNumber.value)
	parag.classList.remove('copied')
	parag.textContent = "Password created"
	parag.classList.add('generated')
}

genBtn.addEventListener('click', generatePass)
copyBtn.addEventListener('click', copy)
slider.addEventListener('mousemove', changes)
inputNumber.addEventListener('change', changes)
