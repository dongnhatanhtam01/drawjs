console.log('Welcome to paint js');

class paint {
    constructor() {
        this.canvas = document.getElementById('board')
        this.canvas.width = 800
        this.canvas.height = 500
        this.ctx = this.canvas.getContext('2d')
        this.drawBackground()

        this.color = "#00ff00"
        this.tool = 'pen' // circle / rectangle / line
        this.lineWidth = 1

        this.currentPos = { // current position (default)
            x: 0,
            y: 0
        }

        this.drawing = false
        this.oldImage = null
        this.newImage = null

        // for line function only
        this.startPos = {
            x: 0,
            y: 0
        }

        this.listenEvent() // listen mouse event        
        this.drawLine(10, 10, 100, 100) // this.drawLine(10, 10, 100, 100)
    }

    getMousePos(evt) {
        var rect = this.canvas.getBoundingClientRect();

        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        }
    }

    mouseDown(event) {
        console.log("mousedown");
        this.saveState()

        // document.body.appendChild(this.image)

        let mousePos = this.getMousePos(event)
        this.startPos = this.getMousePos(event) // line function : to get first poitn
        this.drawing = true
    }
    mouseMove(event) {
        let mousePos = this.getMousePos(event)
        if (this.drawing) {
            switch (this.tool) {
                case 'pen':
                    this.drawLine(this.currentPos, mousePos)
                    // debugger
                    break;
                case 'line':
                    this.undo()
                    this.drawLine(this.startPos, mousePos)
                    break;
                case 'rect':
                    this.undo()
                    console.log('a');
                    this.drawRectangle(this.startPos, mousePos)
                    break;
            }
        }
        this.currentPos = mousePos
    }
    mouseUp(event) {
        // console.log("mouseup");
        this.drawing = false
    }

    listenEvent() {
        this.canvas.addEventListener('mousedown', (event) => {
            this.mouseDown(event)
        });
        this.canvas.addEventListener('mousemove', (event) => {
            this.mouseMove(event)
        });
        this.canvas.addEventListener('mouseup', (event) => {
            this.mouseUp(event)
        });
    }

    saveState() {
        this.oldImage = new Image
        this.oldImage.src = this.canvas.toDataURL("image/bmp", 1.0) //.replace("data:image/png;base64,","")
    }

    undo() {
        this.newImage = new Image
        this.newImage.src = this.canvas.toDataURL("image/bmp", 1.0) //.replace("data:image/png;base64,","")
        this.ctx.drawImage(this.oldImage, 0, 0, 800, 500)
    }

    redo() {
        this.ctx.drawImage(this.newImage, 0, 0, 800, 500)
    }

    drawBackground() {
        this.ctx.fillStyle = "#ffffff"
        this.ctx.fillRect(0, 0, 800, 500)
    }

    drawLine(startPos, endPos) {
        this.ctx.lineWidth = this.lineWidth
        this.ctx.strokeStyle = this.color
        this.ctx.beginPath();
        this.ctx.moveTo(startPos.x, startPos.y); // Start point
        this.ctx.lineTo(endPos.x, endPos.y); // End point
        this.ctx.stroke();
    }

    drawRectangle=(startPos, endPos)=> {
        this.ctx.lineWidth = this.lineWidth
        this.ctx.strokeStyle = this.color
        this.ctx.beginPath()
        this.ctx.rect(
            startPos.x
            , startPos.y
            , endPos.x - startPos.x
            , endPos.y - startPos.y);
        this.ctx.stroke()
    }
}

var p = new paint()
