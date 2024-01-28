class HeaderFooter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
          <style>
            header {
                background-color: lightblue;
                padding: 10px;
                text-align: center;
                color: black;
            }
            footer {
                background-color: lightblue;
                padding: 10px;
                text-align: center;
                margin-top: 10px;
                color: black;
            }
            /* Style the slots */
            ::slotted(div) {
                margin: 20px 0;
                padding: 20px;
                border: 1px solid #cccccc;
                border-radius: 5px;
            }
          </style>
          <header>
              <h1>Web-component with micro-frontends demo</h1>
          </header>
          <slot name="first-app"></slot>
          <slot name="second-app"></slot>
          <footer>
              <p>Webcomponent Footer</p>
          </footer>
      `;
	}
}
window.customElements.define('my-header-footer', HeaderFooter);
