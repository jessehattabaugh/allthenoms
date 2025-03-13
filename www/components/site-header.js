/**
 * Site header component
 * @module components/site-header
 */
export class SiteHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/site-header.css">
            <header class="site-header">
                <div class="header-content">
                    <a href="/" class="logo" aria-label="ALL THE NOMS! Homepage">
                        <span>🍔</span> ALL THE NOMS!
                    </a>
                    <nav>
                        <ul>
                            <li><a href="/about.html">About</a></li>
                            <li><a href="/contact.html">Contact</a></li>
                            <li><theme-toggle></theme-toggle></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
	}
}