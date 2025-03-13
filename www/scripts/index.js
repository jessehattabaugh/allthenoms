/**
 * Main JavaScript for the homepage
 * 🍔 Handles components and interactions for the ALL THE NOMS! homepage
 */

// Import web components
import { CarouselItem } from '../components/carousel-item.js';
import { ImageCarousel } from '../components/image-carousel.js';
import { SiteFooter } from '../components/site-footer.js';
import { SiteHeader } from '../components/site-header.js';
import { ThemeToggle } from '../components/theme-toggle.js';

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

/** @typedef {CustomEvent<{ index: number; total: number }>} SlideChangeEvent */

/**
 * @typedef {Object} DishData
 * @property {string} id
 * @property {string} name
 * @property {string} category
 * @property {string} topRestaurant
 * @property {number} rating
 * @property {number} reviews
 * @property {number} locations
 * @property {string} image
 */

/** @type {DishData[]} */
const FEATURED_DISHES = [
	{
		id: 'burger-collection',
		name: 'Smash Burgers',
		category: 'Burgers',
		topRestaurant: 'Shake Shack',
		rating: 5,
		reviews: 243,
		locations: 147,
		image: '/images/burgers.jpg',
	},
	{
		id: 'ramen-collection',
		name: 'Tonkotsu Ramen',
		category: 'Noodles',
		topRestaurant: 'Ichiran',
		rating: 4,
		reviews: 187,
		locations: 92,
		image: '/images/ramen.jpg',
	},
	{
		id: 'pizza-collection',
		name: 'Neapolitan Pizza',
		category: 'Pizza',
		topRestaurant: "Roberta's",
		rating: 5,
		reviews: 324,
		locations: 213,
		image: '/images/pizza.jpg',
	},
	{
		id: 'taco-collection',
		name: 'Al Pastor Tacos',
		category: 'Tacos',
		topRestaurant: 'La Taqueria',
		rating: 4,
		reviews: 276,
		locations: 150,
		image: '/images/tacos.jpg',
	},
];

/**
 * Create a dish card element from dish data
 * @param {DishData} dish - The dish data
 * @returns {HTMLElement} The created dish card element
 */
function createDishCard(dish) {
    const article = document.createElement('article');
	article.className = 'dish-card';
    article.innerHTML = `
        <h2>${dish.name}</h2>
        <img src="${dish.image}" alt="${dish.name}" />
        <p>${dish.category}</p>
        <p>Reviews: ${dish.reviews}</p>
        <p>Rating: ${dish.rating}</p>
    `;
	return article;
}

/**
 * Navigate to a specific dish collection
 * @param {string} dishId - The ID of the dish collection to navigate to
 */
function navigateToDishCollection(dishId) {
    window.location.href = `/dishes/${dishId}`;
}

/**
 * Update dynamic content on the page
 */
function updateDynamicContent() {
	const yearElement = document.getElementById('current-year');
	if (yearElement) {
		yearElement.textContent = new Date().getFullYear().toString();
	}
	populateFeaturedDishes();
}

/**
 * Populate the featured dishes section
 */
function populateFeaturedDishes() {
    const featuredDishesSection = document.getElementById('featured-dishes');
    if (!featuredDishesSection || !FEATURED_DISHES) return;

    FEATURED_DISHES.forEach((dish) => {
		const dishCard = createDishCard(dish);
		featuredDishesSection.appendChild(dishCard);
	});
}

/**
 * Set up event listeners for navigation and interactions
 */
function setupEventListeners() {
	const dishLinks = document.querySelectorAll('a[dish-id]');
	dishLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			const dishId = link.getAttribute('dish-id');
			navigateToDishCollection(dishId);
		});
	});
}

/**
 * Subscribe to the newsletter
 * @param {HTMLElement} form - The form element
 */
function subscribeToNewsletter(form) {
	if (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			console.log(e);
		});
	}
}

// Export key functions for potential reuse or testing
export {
	updateDynamicContent,
	setupEventListeners,
	createDishCard,
	navigateToDishCollection,
	subscribeToNewsletter,
};
