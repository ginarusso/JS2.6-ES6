const colours = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
const spanEl = document.createElement('span')
const colorValue = colours.map(color => color.value)
// for (let i=0; i < colours.length; i++) {
//     console.log(colours[i].value)
//     colorEl.innerHTML += `<span style="background-color:${colours[i].value}">HEllo</span>`
// }

// let colorValue = colours.map(function (color) {
//     return color.value
// })
// let colorValue = colours.map(color => color.value)
// let colorsValue = colours.map((color) => {
//     console.log(color.value)
//     colorEl.innerHTML += `<span style="background-color:${color.value}">Hello</span>`
// })

let colorIndex = 0
let intervalID = null

function changeColors() {
    spanEl.style.backgroundColor = colorValue[colorIndex]
    spanEl.innerText = `Color Change Interval`
    const colorEl = document.getElementById('target')
    colorEl.appendChild(spanEl)

    colorIndex = (colorIndex + 1) % colorValue.length
    // console.log(colorIndex)
}

intervalID = setInterval(changeColors, 1000)

const stopColorCheckBox = document.getElementById('stop')
stopColorCheckBox.addEventListener('change', () => {
    console.log("checkbox checked")
    if (stopColorCheckBox.checked) {
        clearInterval(intervalID)
    } else {
        intervalID = setInterval(changeColors, 1000)
    }
})


