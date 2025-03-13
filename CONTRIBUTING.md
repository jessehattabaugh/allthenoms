# 🚀 Contributing to ALL THE NOMS!

## 📝 Project Overview

**ALL THE NOMS!** is a foodie social network built around users' favorite dishes. Our platform allows food enthusiasts to track where they've had their favorite dishes, rank them, share photos and reviews, and connect with other foodies who share similar taste preferences. The app guides users through discovering new versions of their favorite foods while gamifying the experience of collecting and reviewing dishes.

### 🧠 Core Principles

-   **User Experience**: Creating an intuitive and delightful interface for food enthusiasts
-   **Performance**: Ensuring fast load times even with image-heavy content
-   **Modularity**: Building reusable components for different food categories and review systems
-   **Testing**: Thoroughly testing all features with real-world foodie scenarios
-   **Documentation**: Providing clear guidelines for contributors to enhance the platform

## 📐 Project Structure

### Full Directory Structure

```
/
├── www/              # Web assets
│   ├── components/   # Web components
│   │   ├── site-footer.css
│   │   ├── site-footer.js
│   │   ├── site-header.css
│   │   ├── site-header.js
│   │   ├── dish-card.css    # New component
│   │   ├── dish-card.js     # New component
│   │   ├── review-form.css  # New component
│   │   ├── review-form.js   # New component
│   ├── scripts/      # JavaScript files
│   │   ├── async.js
│   │   ├── index.js
│   │   ├── dishes.js        # New script
│   │   ├── reviews.js       # New script
│   │   └── recommendations.js # New script
│   ├── styles/       # CSS files
│   │   ├── all.css
│   │   ├── light.css
│   │   ├── print.css
│   │   └── wide.css
│   └── icon/         # PWA icons
│       ├── 192.png
│       └── 512.png
├── test/             # Test files
│   └── index.spec.js
│   └── dish-collection.spec.js # New test
├── bin/              # Build scripts and utilities
├── netlify/          # Netlify configuration
│   └── functions/    # Serverless functions
│       ├── auth.js           # Authentication functions
│       ├── restaurants.js    # Restaurant API functions
│       └── recommendations.js # Recommendation engine
```

### Frontend Architecture

-   **Component Structure**: Web Components for dish cards, review forms, and restaurant listings
-   **State Management**: Context-based state for user preferences and dish collections
-   **Routing**: Client-side routing for dish collections, restaurant pages, and user profiles

## 🛠️ Tech Stack

-   **Frontend**: HTML/CSS/JavaScript with Web Components
-   **State Management**: Custom state management with localStorage persistence
-   **Storage**: Netlify Functions + FaunaDB for dish and restaurant data
-   **Testing**: Playwright for end-to-end testing of foodie user journeys

## 🏗️ Technical Architecture

### Key Principles

-   **Module System**: ES modules for direct imports
-   **Web Components**: Custom elements for modular UI components like dish cards and review forms
-   **Progressive Enhancement**: Core dish browsing functionality works without JavaScript
-   **Offline-First**: Save dish reviews offline when connectivity is unavailable
-   **Test-Driven Development**: Red/green testing approach for all new foodie features

## 📝 Code Style Guidelines

### General Guidelines

-   **Indentation:** Use tabs for indentation, not spaces
-   **File Organization:** Group related functionality by dish types and review components
-   **Component Structure:** Each component should serve a singular purpose (e.g., dish display, review form)

### Naming Conventions

-   **Files:** Use kebab-case for filenames (`dish-card.js`, not `dishCard.js`)
-   **Components:** Use PascalCase for component names (`DishCard`, not `dishCard`)
-   **Functions:** Use camelCase for function names (`submitReview`, not `submit_review`)
-   **CSS Classes:** Use kebab-case for CSS classes (`.dish-card-wrapper`, not `.dishCardWrapper`)
-   **Constants:** Use UPPER_SNAKE_CASE for constants (`MAXIMUM_REVIEW_LENGTH`, not `maximumReviewLength`)
-   **Test Files:** Use the same naming as the page they test with `.spec.js` suffix (`dish-collection.spec.js`)

### JavaScript Guidelines

-   **ES Modules:** Use ES modules exclusively for imports/exports
-   **Modern JavaScript:** Embrace template literals, destructuring, and other modern features
-   **Function Creation:** Only create new functions for code reuse (at least two call sites)
-   **JSDoc Comments:** Include JSDoc type annotations to ensure code clarity

### CSS Guidelines

-   **Selectors:** Use simple, shallow selectors to target elements efficiently
-   **Variables:** Define CSS custom properties at the :root level for consistent food-themed colors
-   **Nesting:** Avoid deeply nested CSS rules for better performance

### Console Logging

-   Use two emojis per console message—one representing the file's domain, one for the specific message
-   Suggested emoji domains:
    -   🍔 Dish-related functionality
    -   🌮 Review system
    -   🍕 Restaurant listings
    -   🗺️ Map and location features
    -   🧪 Testing infrastructure
-   Console methods:
    -   `console.debug()`: Minor information, loop iterations, internal workings
    -   `console.info()`: Useful but non-critical messages
    -   `console.log()`: General information useful for development
    -   `console.warn()`: Important notices or potential issues
    -   `console.error()`: Only for unrecoverable errors; always include relevant debugging information

## 🎨 Visual Style Guide

### Color Palette

```css
:root {
	--color-primary: #ff6b35; /* Vibrant orange for CTAs */
	--color-secondary: #7dcfb6; /* Teal for secondary elements */
	--color-accent: #fbd1a2; /* Soft peach for accents */
	--color-text: #33272a; /* Dark brown for text */
	--color-text-light: #594a4e; /* Lighter brown for secondary text */
	--color-background: #ffffff; /* White background */
	--color-background-alt: #f9f9f7; /* Off-white for card backgrounds */
	--color-border: #e0e0e0; /* Light gray for borders */
	--color-success: #79b473; /* Green for success messages */
	--color-warning: #ffc857; /* Yellow for warnings */
	--color-error: #e5323b; /* Red for errors */
	--shadow-default: 0 2px 5px rgba(0, 0, 0, 0.1);
	--shadow-hover: 0 5px 15px rgba(0, 0, 0, 0.1);
}
```

### Typography

-   **Headings:** 'Montserrat', sans-serif (fallback: sans-serif)
-   **Body Text:** 'Open Sans', system-ui, sans-serif
-   **Monospace:** 'Fira Code', monospace
-   **Font Sizes:** Use relative units (rem) with a base size of 16px
-   **Line Heights:** 1.5 for body text, 1.2 for headings

## 🧪 Testing Guidelines

> **IMPORTANT:** When creating tests with GitHub Copilot, include this file as context to ensure adherence to these guidelines.

-   **End-to-End Focus:** Tests must interact with actual HTML pages through the user interface
-   **User-Centric:** Focus on what real foodie users would see and interact with
-   **No Mocks:** Avoid mock objects, unit tests, or test fixtures
-   **Browser Compatibility:** Ensure tests run on all modern browsers

### Test Structure

-   **Test Files:** Correspond to actual pages in the `/www` directory
-   **Test Naming:** Use descriptive names that reflect the foodie journey or interaction being tested
-   **URL Format:** Use relative URLs without the `/www/` prefix in test navigation (e.g., `/index.html` not `/www/index.html`)

### Test-Driven Development Process

-   **Red Tests First:** Always begin with a failing test that defines expected functionality
-   **Green Implementation:** Then implement just enough code to make the test pass
-   **User-Focused Testing:** Tests should reflect actual foodie interactions and experiences
-   **Accessibility Testing:** Ensure all tests interact with the page in ways that support screen readers
-   **Test Organization:** Group related tests in logical describe blocks
-   **Test Naming:** Tests should clearly describe the expected behavior being verified

## 🚀 Example Test

This example demonstrates how to test the dish collection feature with Playwright:

```javascript
/**
 * @file Dish collection test example
 * @module tests/dish-collection
 */
import { test, expect } from '@playwright/test';

test.describe('Dish Collection Feature 🍔', () => {
	// Shared emoji for this file domain
	const fileEmoji = '🍔';

	test('should allow users to add a new dish to their collection', async ({ page }) => {
		// Navigate to the user's collection page
		await page.goto('/my-collection.html');

		// Verify we're on the right page
		await expect(page).toHaveTitle('My Dish Collection | ALL THE NOMS!');

		// Check for the add dish button
		const addDishButton = page.locator('[role="button"][aria-label="Add new dish"]');
		await expect(addDishButton).toBeVisible();

		// Click the add button
		await addDishButton.click();

		// Verify the add dish form appears
		const dishForm = page.locator('[role="form"][aria-labelledby="add-dish-heading"]');
		await expect(dishForm).toBeVisible();

		// Fill out the form
		await page.fill('#dish-name', 'Spicy Ramen');
		await page.fill('#restaurant-name', 'Noodle House');
		await page.selectOption('#rating', '5');

		// Submit the form
		await page.click('[type="submit"]');

		// Verify the new dish appears in the collection
		const newDish = page.locator('[role="listitem"]:has-text("Spicy Ramen")');
		await expect(newDish).toBeVisible();

		// Log the successful test
		console.info(`${fileEmoji} ✅ Dish successfully added to collection.`);
	});
});
```

## 📚 Development Setup

### Installation

```bash
# Clone the repository
git clone https://github.com/username/allthenoms.git

# Navigate to the project directory
cd allthenoms

# Install dependencies
npm install
```

### Development Workflow

```bash
# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 📄 Documentation Index

-   [README.md](README.md) - Project overview and roadmap
-   [CHANGELOG.md](CHANGELOG.md) - Update history
-   [DISH_TAXONOMY.md](DISH_TAXONOMY.md) - Food categorization system
-   [API_DOCS.md](API_DOCS.md) - API documentation for restaurant data

## 🔄 Contribution Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-dish-filter`)
3. Commit your changes (`git commit -m 'Add new dish filtering by spice level'`)
4. Push to the branch (`git push origin feature/new-dish-filter`)
5. Open a Pull Request

### Pull Request Process

1. Ensure all tests pass
2. Update documentation as needed
3. Get approval from at least one reviewer
4. Merge once approved
