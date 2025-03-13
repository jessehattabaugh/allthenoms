/**
 * Main JavaScript for the homepage
 * 🍔 Handles components and interactions for the ALL THE NOMS! homepage
 */

// Import web components
import { CarouselItem } from '/components/carousel-item.js';
import { ImageCarousel } from '/components/image-carousel.js';
import { SiteFooter } from '/components/site-footer.js';
import { SiteHeader } from '/components/site-header.js';
import { ThemeToggle } from '/components/theme-toggle.js';

// Register custom elements if not already registered
if (!customElements.get('site-header')) {
	customElements.define('site-header', SiteHeader);
}

if (!customElements.get('site-footer')) {
	customElements.define('site-footer', SiteFooter);
}

if (!customElements.get('theme-toggle')) {
	customElements.define('theme-toggle', ThemeToggle);
}

if (!customElements.get('image-carousel')) {
	customElements.define('image-carousel', ImageCarousel);
}

if (!customElements.get('carousel-item')) {
	customElements.define('carousel-item', CarouselItem);
}

/**
 * Sample dish data for the homepage
 * @type {Array<Object>}
 */
const FEATURED_DISHES = [
	{
		id: 'burger-collection',
		name: 'Smash Burgers',
		category: 'Burgers',
		topRestaurant: 'Shake Shack',
		rating: 5,
		reviews: 243,
		locations: 147,
		image: '/images/burgers.jpg'
	},
	{
		id: 'ramen-collection',
		name: 'Tonkotsu Ramen',
		category: 'Noodles',
		topRestaurant: 'Ichiran',
		rating: 4,
		reviews: 187,
		locations: 92,
		image: '/images/ramen.jpg'
	},
	{
		id: 'pizza-collection',
		name: 'Neapolitan Pizza',
		category: 'Pizza',
		topRestaurant: 'Roberta\'s',
		rating: 5,
		reviews: 324,
		locations: 213,
		image: '/images/pizza.jpg'
	},
	{
		id: 'taco-collection',
		name: 'Al Pastor Tacos',
		category: 'Tacos',
		topRestaurant: 'La Taqueria',
		rating: 4,
		reviews: 276,
		locations: 168,
		image: '/images/tacos.jpg'
	}
];

/**
 * Update dynamic content on the page
 */
function updateDynamicContent() {
	// Update current year in footer
	const yearElement = document.getElementById('current-year');
	if (yearElement) {
		yearElement.textContent = new Date().getFullYear();
	}

	// Dynamically populate featured dishes if needed
	populateFeaturedDishes();
}

/**
 * Populate featured dishes from data (if not already in the HTML)
 */
function populateFeaturedDishes() {
	// Only populate if dishes aren't already in the HTML
	const dishGrid = document.querySelector('.dish-grid');
	if (!dishGrid || dishGrid.children.length > 0) {
		return;
	}

	// Create dish cards from data
	FEATURED_DISHES.forEach((dish) => {
		const dishCard = createDishCard(dish);
		dishGrid.appendChild(dishCard);
	});

	console.debug('🍔 ✨ Dynamically added featured dishes');
}

/**
 * Create a dish card element from dish data
 * @param {Object} dish - The dish data
 * @param {string} dish.id - Unique identifier for the dish collection
 * @param {string} dish.name - Name of the dish
 * @param {string} dish.category - Category of the dish
 * @param {string} dish.topRestaurant - Most popular restaurant for this dish
 * @param {number} dish.rating - Average rating (1-5)
 * @param {number} dish.reviews - Number of reviews
 * @param {number} dish.locations - Number of restaurants in collection
 * @param {string} dish.image - Image URL
 * @returns {HTMLElement} The created dish card element
 */
function createDishCard(dish) {
	const article = document.createElement('article');
	article.className = 'dish-card';
	article.id = dish.id;

	// Generate star rating HTML
	const stars = '★'.repeat(dish.rating) + '☆'.repeat(5 - dish.rating);

	article.innerHTML = `
		<div class="dish-image" style="background-image: url('${dish.image}')">
			<span class="dish-category">${dish.category}</span>
		</div>
		<div class="dish-content">
			<h3 class="dish-name">${dish.name}</h3>
			<p class="dish-restaurant">Most collected at: ${dish.topRestaurant}</p>
			<div class="dish-rating">
				<div class="dish-rating-stars">${stars}</div>
				<span class="dish-rating-count">${dish.reviews} reviews</span>
			</div>
		</div>
		<div class="dish-footer">
			<span class="dish-info">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
					<path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
					<path d="M8 4C6.9 4 6 4.9 6 6s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
				</svg>
				${dish.locations} locations
			</span>
		</div>
	`;

	// Make the card interactive
	article.addEventListener('click', () => {
		navigateToDishCollection(dish.id);
	});

	return article;
}

/**
 * Navigate to a specific dish collection
 * @param {string} dishId - The ID of the dish collection to navigate to
 */
function navigateToDishCollection(dishId) {
	console.info(`🍔 🧭 Navigating to dish collection: ${dishId}`);
	window.location.href = `/dish-collection.html?id=${dishId}`;
}

/**
 * Setup event listeners for page interactions
 */
function setupEventListeners() {
	// Listen for carousel events
	const carousel = document.querySelector('image-carousel');
	if (carousel) {
		carousel.addEventListener('slide-change', (e) => {
			console.info('🍔 🎠 Testimonial slide changed', {
				current: e.detail.index + 1,
				total: e.detail.total,
			});
		});
	}

	// Handle CTA button interactions
	const ctaButton = document.querySelector('.cta-button');
	if (ctaButton) {
		ctaButton.addEventListener('click', (e) => {
			// If it's not the newsletter button, track the signup click
			if (!e.currentTarget.closest('form')) {
				console.debug('🍔 🔘 Sign-up CTA button clicked');
				trackUserAction('signup_click');
			}
		});
	}

	// Handle newsletter form submission
	const newsletterForm = document.querySelector('.newsletter-form');
	if (newsletterForm) {
		newsletterForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const emailInput = newsletterForm.querySelector('input[type="email"]');
			if (emailInput && emailInput.value) {
				subscribeToNewsletter(emailInput.value);
				emailInput.value = '';
			}
		});
	}

	// Make dish cards interactive if they aren't already
	const dishCards = document.querySelectorAll('.dish-card');
	dishCards.forEach((card) => {
		if (!card.hasAttribute('listener')) {
			card.setAttribute('listener', 'true');
			card.addEventListener('click', () => {
				const id = card.id || `dish-${Math.floor(Math.random() * 1000)}`;
				navigateToDishCollection(id);
			});
		}
	});
}

/**
 * Track user actions for analytics
 * @param {string} action - The action to track
 * @param {Object} [data] - Additional data to track
 */
function trackUserAction(action, data = {}) {
	console.info(`🍔 📊 User action: ${action}`, data);
	// In a real implementation, this would send data to an analytics service
	// Example: analyticsService.track(action, data);
}

/**
 * Subscribe user to the newsletter
 * @param {string} email - User's email address
 */
function subscribeToNewsletter(email) {
	console.info(`🍔 📧 Newsletter subscription for: ${email}`);

	// Show success message to user
	const newsletterSection = document.querySelector('.newsletter');
	if (newsletterSection) {
		const successMessage = document.createElement('div');
		successMessage.className = 'success-message';
		successMessage.innerHTML = `
			<p>Thanks for subscribing! We'll keep you updated with the latest foodie news.</p>
		`;

		const form = newsletterSection.querySelector('form');
		if (form) {
			form.style.display = 'none';
			newsletterSection.appendChild(successMessage);
		}
	}

	// In a real implementation, this would send the email to a service
	// Example: api.subscribeNewsletter(email);
}

// Initialize page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
	updateDynamicContent();
	setupEventListeners();
	console.log('🍔 🏠 ALL THE NOMS! Homepage initialized successfully');
});

// Support for browsers that don't emit DOMContentLoaded when scripts are loaded with defer
if (document.readyState === 'interactive' || document.readyState === 'complete') {
	updateDynamicContent();
	setupEventListeners();
	console.log('🍔 🏠 ALL THE NOMS! Homepage initialized (document already loaded)');
}

// Export key functions for potential reuse or testing
export {
	updateDynamicContent,
	setupEventListeners,
	createDishCard,
	navigateToDishCollection,
	subscribeToNewsletter,
};
