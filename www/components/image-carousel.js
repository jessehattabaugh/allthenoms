/**
 * Image carousel component
 * @module components/image-carousel
 */
export class ImageCarousel extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.currentIndex = 0;
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                .carousel {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                ::slotted(*) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out;
                }
                ::slotted(.active) {
                    opacity: 1;
                }
                .controls {
                    position: absolute;
                    bottom: 1rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 0.5rem;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--color-text-light, #594a4e);
                    opacity: 0.5;
                    cursor: pointer;
                    transition: opacity 0.3s ease;
                }
                .dot.active {
                    opacity: 1;
                }
            </style>
            <div class="carousel">
                <slot></slot>
                <div class="controls"></div>
            </div>
        `;

		this.setupCarousel();
	}

	setupCarousel() {
		const items = this.querySelectorAll('carousel-item');
		if (!items.length) return;

		// Create control dots
		const controls = this.shadowRoot.querySelector('.controls');
		items.forEach((_, i) => {
			const dot = document.createElement('div');
			dot.className = 'dot';
			dot.addEventListener('click', () => this.goToSlide(i));
			controls.appendChild(dot);
		});

		// Show first slide
		this.goToSlide(0);

		// Auto-advance slides
		setInterval(() => {
			this.goToSlide((this.currentIndex + 1) % items.length);
		}, 5000);
	}

	/**
	 * @typedef {Object} SlideChangeDetail
	 * @property {number} index - The current slide index.
	 * @property {number} total - Total number of slides.
	 */

	/**
	 * Change the active slide.
	 * @param {number} index - The index of the slide to show.
	 * @returns {void}
	 */
	goToSlide(index) {
		/** @type {NodeListOf<HTMLElement>} */
		const items = this.querySelectorAll('carousel-item');
		/** @type {NodeListOf<HTMLElement>} */
		const dots = this.shadowRoot.querySelectorAll('.dot');

		// Update items
		items.forEach((item, i) => {
			item.classList.toggle('active', i === index);
		});

		// Update dots
		dots.forEach((dot, i) => {
			dot.classList.toggle('active', i === index);
		});

		// Update index and dispatch event
		this.currentIndex = index;
		this.dispatchEvent(
			new CustomEvent('slide-change', {
				detail: /** @type {SlideChangeDetail} */ ({
					index: this.currentIndex,
					total: items.length,
				}),
			}),
		);
	}
}
