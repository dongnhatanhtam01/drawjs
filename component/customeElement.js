class AppDrawer extends HTMLElement {}
window.customElements.define('app-drawer', AppDrawer)

// Or use an anonymous class if you don't want a named constructor in current scope.
// window.customElements.define('app-drawer', class extends HTMLElement {})

window.customElements.define('x-foo-with-markup', class extends HTMLElement {
    connectedCallback() {
    this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
    }
});