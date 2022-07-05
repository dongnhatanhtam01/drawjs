class MyElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<div id="tools">
        <button onclick="undo()">undo</button>
        <button onclick="redo()">redo</button>

        <button onclick="setTool('rect')">rect</button>
        <button onclick="setTool('pen')">Pen</button>
        <button onclick="setTool('line')">Line</button>

        <button onclick="changeColor('#ff0000')">Red</button>
        <button onclick="changeColor('#000000')">Black</button>
        <button onclick="changeColor('#00ff00')">Green</button>

        <button onclick="changeLineWidth(1)">1</button>
        <button onclick="changeLineWidth(2)">2</button>
        <button onclick="changeLineWidth(3)">3</button>
        <button onclick="changeLineWidth(4)">4</button>
        <button onclick="changeLineWidth(10)">10</button>
    </div>
    `;
    }

    disconnectedCallback() { }

    static get observedAttributes() {
        return [/* array of attribute names to monitor for changes */];
    }

    attributeChangedCallback(name, oldValue, newValue) { }

    adoptedCallback() { }
}
customElements.define("my-element", MyElement);
