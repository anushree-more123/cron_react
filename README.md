# Cron Expression Visualizer & Recurrence Pattern Generator

## Problem Statement

Cron expressions and recurrence rules are widely used for scheduling tasks, but they are often difficult to read and configure manually.

This project provides a simple web interface that helps users both **understand cron expressions** and **generate human-readable recurrence schedules**.

The application solves two main problems:

1. **Cron Expression Visualization**  
   Users can input a cron expression and view each scheduling field (seconds, minutes, hours, days, month, and day of week) in a readable format.

2. **Recurrence Pattern Description Generator**  
   Users can configure daily, weekly, or monthly recurrence patterns and automatically generate a human-readable description of the schedule.

This tool helps developers and users easily understand scheduling logic without manually interpreting cron syntax.

---

## Features

- Cron expression parsing and visualization
- Handles wildcard (`*`) values
- Resets fields on invalid expressions
- Daily, weekly, and monthly recurrence generation
- Weekly fallback when no day is selected
- Correct ordinal suffix handling (1st, 2nd, 3rd, etc.)
- Dynamic description generation

---

## Tech Stack

- React.js
- JavaScript
- CSS

---

## Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js**
- **npm** or **Yarn** package manager

### Installation

1. Install dependencies:

   ```bash
   npm install

   ```

2. To run the development server:

   ```bash
   npm run dev
   ```
