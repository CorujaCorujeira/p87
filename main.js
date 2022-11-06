
var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function (Img) {
		blockImageObject = Img;

		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
			top:block_y,
			left:block_x
		});
		CanvasCaptureMediaStreamTrack.add(blockImageObject);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		block_x = 200;
		new_image()
		
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('gr.png');
		console.log("v")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('gr.png');
		console.log("a")
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('rr1.png');
		console.log("a")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('gr.png');
		console.log("v")
	}
	
}

