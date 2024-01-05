# Project Documentation

This document outlines the development journey and setup instructions for a Vite + React project. It provides a detailed account of the features implemented, the styling enhancements made, and the configurations adjusted throughout the development process.

## Starting Vite in Development Environment

1. **Open Terminal:** Navigate to your project's directory.
2. **Install Dependencies:** Run `npm install`.
3. **Start the Development Server:** Run `npm run dev`.
   - This starts the local development server. Your application should open in your default browser. If not, manually visit the URL logged to the console (usually `http://localhost:3000`).
4. **Development:** Start developing your application. Vite provides hot module replacement for seamless development.

> **Note:** The exact commands may vary slightly depending on your setup or if you're using `yarn` instead of `npm`. Always refer to your `package.json` file to see the exact scripts available to you.

## Project Setup and Initial Configuration

- **Initialized a new Vite + React project:** Started a new project using Vite to provide a faster and leaner development experience for modern web projects.
- **Added Dependencies:**
  - `react-icons`: To use popular icons in the project.
  - `vite-plugin-svgr`: To transform SVGs into React components directly.
- **Updated Vite Configuration:** Modified `vite.config.js` to include necessary plugins and settings.
- **Updated App Component:** Made changes to `App.jsx`, likely to include new components or configurations.
- **Removed Default Assets:** Removed `vite.svg`, a default asset from the starter template.

## Feature Development

### Navbar

- **Added NavBar Component:** Created and integrated it into the `HomepageTemplate`.
- **Merged Feature:** Merged the 'feature/navbar' branch into the 'develop' branch.

### Hero Section

- **Added HeroSection:** Integrated into the `HomepageTemplate` for a prominent section on the homepage.
- **Updated Assets and Styles:** Added new images and updated the CSS for `HeroSection.jsx`.

### Styling and Assets Enhancement

- **Added and Updated Assets:** Introduced new assets and updated various CSS styles.
- **Updated Styling:** Made additional styling updates to refine the look and feel of various components.

### Car Category Cards

- **Added Car Category Cards and Styles:** Created components to display different car categories and styled them.

### Car Deals Cards

- **Updated Car Deals Card:** Added new assets and updated styles for the car deals card.

## Refactoring and Enhancements

- **Added Rating Components:** Introduced `Rating` and `Ratings` components and updated card styles with transition animations.
- **Refactoring:** Merged the 'refactor/homepage' branch into 'develop'.

## Final Touches and Configuration

- **Updated Metadata:** Changed the favicon and page title.
- **Server Configuration:** Added configuration related to the server host.
- **Gitignore Updates:** Removed the `data json` folder from `.gitignore`.

## List Generation Methods

### First Way: Direct Import of Images and Inline Data

- **File:** `CarCategoryList` component.
- **Method:** Directly imported image assets and defined category data within the component.
- **Implementation Details:**
  - Imported images from the assets directory.
  - Defined the `CarCategory` array with category details.
  - Mapped over the `CarCategory` array to render a list of `CarCategoryCard` components.

### Second Way: Importing Data from JSON File

- **File:** `CarDealsList` component.
- **Method:** Used a JSON file to define and import the data for the list.
- **Implementation Details:**
  - Created a `deals.json` file in the assets directory with the list of deals.
  - Imported the `deals` data from the JSON file.
  - Mapped over the `deals` array to render a list of `CarDealsCard` components.
