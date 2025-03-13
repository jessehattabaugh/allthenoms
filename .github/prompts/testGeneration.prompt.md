When generating end-to-end functional browser tests using Playwright:

Focus exclusively on real user interactions within actual HTML pages. Do not use mocks or fixtures.
Structure tests to reflect authentic user journeys and interactions relevant to food enthusiasts, prioritizing accessibility (e.g., proper use of roles, labels, and interactions compatible with screen readers).
Follow a strict test-driven approach:
Write the test first (red), clearly describing expected behavior.
Implement just enough code to pass the test (green).
Avoid mocks or unit-level abstractions; interact directly with live HTML pages.
Clearly organize tests by feature, aligned with page structure (e.g., /index.html → /index.spec.js).
Ensure tests interact through the user interface (buttons, forms, navigation) exactly as users would, without mocks or fixtures.
Adhere to project naming conventions and structure:
Tabs for indentation
PascalCase or kebab-case for component names and file paths, respectively
UPPER_SNAKE_CASE for constants
Include meaningful JSDoc comments for clarity, and use emojis (🍔, 🌮, 🍕, 🗺️, 🧪) in console messages for debugging purposes relevant to feature areas.