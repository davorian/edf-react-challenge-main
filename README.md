# React Challenge

## Instructions

This repository includes a naive implementation of a React application designed to search for, and display, information about countries (using https://restcountries.com/).

Your task is to refactor and improve the application.

Focus on clean, maintainable code and your proficiency with components, state management, and API integration.

Commit your changes as you go & submit your work via a GitHub repository link.

Update this `README` with anything that you'd like to do if you had more time.

### Things to consider

1. Accessibility - added on ui - Voiceover and navigation to interactive elements works - colour contrasts
2. Robust error handling - No results aka 404s, api failures and inconsistent (no capital or 3 capitals) handling.
3. Testing - Extensive on errors 
4. Responsiveness -  Used Chakra UI for basic responsiveness w/o media queries
5. Ease of updating the data source - factored out source api url, and typed response - can be easily updated for new source
6. Appearance: Style is secondary; however, a basic, user-friendly UI is appreciated - Chakra removed capital title as superfluous in this context.
7. Anything else: You are welcome to add any features that highlight your capabilities - Used yarn rather than npm & see below:


// TODOS //
// Vite's env variables.
// Dark mode with high contrast.
// media queries for increased responsiveness
// Make CountryContext more reusable by creating a GetItemsContext - possibly with a dynamic fetcher to
// customise different handling of errors from different APIs.
// Cypress testing.
// Storybook.

## Getting Started

### Scripts

1. Install packages

```sh
yarn install
```

2. Run locally

```sh
yarn dev
```
