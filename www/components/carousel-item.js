/**
 * Carousel item component
 * @module components/carousel-item
 */
export class CarouselItem extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
                .carousel-item {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <div class="carousel-item">
                <slot></slot>
            </div>
        `;
	}
}
