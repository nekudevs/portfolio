# Tamagotchi Page Implementation Plan

## Objective
Design, plan, and implement a new page in the portfolio where visitors can play with a Tamagotchi. The Tamagotchi's state must persist locally to incentivize returning.

## Features & Architecture

### 1. State Persistence
- **Storage Strategy**: Use `localStorage` to save the Tamagotchi's state on the client side.
- **State Data**: 
  - `hunger` (0-100)
  - `happiness` (0-100)
  - `energy` (0-100)
  - `lastInteractionTime` (timestamp to calculate decay while the user was away)
  - `isAlive` (boolean)

### 2. Time-Based Decay
- Calculate the time difference between `now` and `lastInteractionTime` to decay stats dynamically every time the user loads the page or returns.

### 3. UI/UX grid
- A retro-style "pixel" display inside a container. We will use CSS grids/blocks to build a simple visual or retro styling.
- **Actions**:
  - 🍕 Feed (refills hunger)
  - ⚽ Play (refills happiness)
  - 💤 Sleep (refills energy)
- **Status Bars**: Visual indicators for stats.

### 4. Navigation
- Add a new icon/link to the `DATA.navbar` array in `src/data/resume.tsx`.

## Execution Steps

- [x] Step 1: Create this planning document.
- [x] Step 2: Update `src/data/resume.tsx` to include the Tamagotchi route in the navigation.
- [x] Step 3: Create the Tamagotchi React component (`src/components/tamagotchi.tsx`) handling logic, state, and UI.
- [x] Step 4: Create the Next.js page route (`src/app/tamagotchi/page.tsx`) to render the component.
