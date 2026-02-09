# E2E Testing - Technical Test

This repository contains end-to-end (E2E) automated tests developed as part of a technical assessment for Papeleria IDTGT.

## Technology Stack

- **WebdriverIO v9.23.3** - E2E testing framework
- **Mocha** - Test framework
- **Page Object Model** - Design pattern for test organization
- **Node.js** - Runtime environment

## Project Structure

```
E2E-Test/
├── test/
│   ├── pageobjects/          # Page Object Model classes
│   │   ├── page.js           # Base page class
│   │   ├── login.page.js     # Login page selectors and methods
│   │   ├── home.page.js      # Home page selectors and methods
│   │   ├── shop.page.js      # Shop page selectors and methods
│   │   └── cart.page.js      # Cart page selectors and methods
│   └── specs/
│       └── test.e2e.js       # E2E test scenarios
├── wdio.conf.js              # WebdriverIO configuration
└── package.json              # Project dependencies
```

## Test Scenarios

### 1. User Authentication Flow
**Test Suite:** My Login application

#### Test Case 1.1: Login with Valid Credentials
- **Description:** Validates that a user can successfully log in with valid credentials
- **Steps:**
  1. Navigate to the application
  2. Click on the menu icon
  3. Click on "My Account"
  4. Enter valid credentials (email: gerardo.zuleta15@gmail.com)
  5. Submit the login form
- **Expected Result:** User is redirected to the cart page with "Cart" text displayed

#### Test Case 1.2: Return to Shop
- **Description:** Verifies that the user can navigate back to the shop from the cart
- **Steps:**
  1. Click on "Return to Shop" button
- **Expected Result:** User is redirected to the shop page with "Shop" text displayed

### 2. Product Management Flow
**Test Suite:** Search and add to cart a product

#### Test Case 2.1: Add Product to Cart
- **Description:** Validates that a user can search for and add a product to the cart
- **Steps:**
  1. Search for "ACTIVE SHIELD SUNGLASSES" product
  2. Click on the product
  3. Click "Add to Cart" button
- **Expected Result:** Cart list becomes visible with the added product

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd E2E-Test
```

2. Install dependencies:
```bash
npm install
```

## Running the Tests

Execute all E2E tests:
```bash
npm run wdio
```

Or use the WebdriverIO CLI directly:
```bash
npx wdio wdio.conf.js
```

---

**Author:** Gerardo Zuleta  
**Email:** gerardo.zuleta15@gmail.com  
**Date:** February 2026
