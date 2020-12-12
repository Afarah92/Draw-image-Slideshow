const canvasTag = document.querySelector("canvas")

canvasTag.width = window.innerWidth * 2
canvasTag.height = window.innerHeight * 2

canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px"

const context = canvasTag.getContext("2d")
context.scale(2, 2)

let aimX = null
let aimY = null
let currentX = null
let currentY = null

let i = 0 
const images = ["https://images.unsplash.com/photo-1560918801-53fe5c710a80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1250&q=80", "https://images.unsplash.com/photo-1607556114526-058f5efdf49e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80", "https://images.unsplash.com/photo-1607591605038-08cf899600f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80", "https://images.unsplash.com/photo-1607556114466-937705f5fed1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"].map(src => {
  const image = document.createElement("img")
  image.src = src
  return image
})

document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
  if (currentX === null) {
    currentX = event.pageX
    currentY = event.pageY
  }
//  if (images[i].complete) {
//    context.drawImage(images[i], event.pageX - 200, event.pageY - 300, 400, 600)
//  }
})

canvasTag.addEventListener("click", function (){
  i = i + 1
  if (i >= images.length) {
    i = 0
  }
})

const draw = function () {
  if (currentX) {
   	if (images[i].complete) {
  		context.drawImage(images[i], currentX - 200, currentY - 300, 400, 600)
		}
    
    currentX = currentX + (aimX - currentX) * 0.1
    currentY = currentY + (aimY - currentY) * 0.1
  }
  
  requestAnimationFrame(draw)
}

draw()