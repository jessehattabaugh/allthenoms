/**
 * Site footer component
 * @module components/site-footer
 */
export class SiteFooter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/site-footer.css">
            <footer class="site-footer">
                <div class="footer-content">
                    <div class="footer-brand">
                        <span class="logo">🍔 ALL THE NOMS!</span>
                        <p>Find and collect your favorite dishes!</p>
                    </div>
                    <nav class="footer-nav">
                        <div class="footer-section">
                            <h3>About</h3>
                            <ul>
                                <li><a href="/about.html">Our Story</a></li>
                                <li><a href="/contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="/privacy.html">Privacy Policy</a></li>
                                <li><a href="/terms.html">Terms of Service</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div class="footer-bottom">
                        <p>&copy; <span id="current-year"></span> ALL THE NOMS! All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;

		// Update current year
		const yearElement = this.shadowRoot.querySelector('#current-year');
		if (yearElement) {
			yearElement.textContent = new Date().getFullYear().toString();
		}
	}
}