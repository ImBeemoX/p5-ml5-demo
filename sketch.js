let mobilenet
let puffin

function modelReady(){
	console.log('Model ready')
	puffin = loadImage('images/3500.jpg', img => {
		image(puffin, 0, 0)
		mobilenet.predict(puffin, gotResults)
	})
}
function gotResults(error, results){
	if(error){
		console.error(error)
	}else{
		console.log(results)
		let label = results[0].confidence
		text(label, 10, windowHeight - 100)
	}
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255)
	mobilenet = ml5.imageClassifier('MobileNet', modelReady)
	
	
}

function draw() {

}