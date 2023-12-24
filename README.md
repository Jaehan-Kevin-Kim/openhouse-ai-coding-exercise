# Getting Started with Openhouse AI Listings by Community App

## Introduction

**This application is built using React with TypeScript, showcasing modern web application practices and interactive features. Key aspects of this project include:**

- **React and TypeScript**: Used React combined with TypeScript for the application.
- **RESTful API Integration**: Utilizing the `axios` package to handle network requests to REST APIs.
- **Routing**: Implemented using the `react-router-dom` package to enable navigation between different components.
- **Styling**: Styled using `ant.design` and `emotion` packages for a sleek and responsive UI.
- **Error Handling**: Used modal pop-ups to notify users of errors during data fetching.
- **Invalid Data Handling**: Used default no-image png file to handle image retrieving error, and displayed 'N/A' if average price is not exist in community
- **Loading State**: Implements a skeleton component to enhance user experience during data fetching.
- **Interactive Elements**: Features hover effects on community posts, revealing a 'contact' button (Note: button functionality not implemented).
- **Responsive Design**: Adapts responsive design to various screen sizes, ensuring full functionality on mobile devices.

  <br>

## How to Run the Application

1. **Clone the Repository**:
   ```
   git clone https://github.com/Jaehan-Kevin-Kim/openhouse-ai-coding-exercise.git
   ```
2. **Install Dependencies of the application**:
   ```
   npm install
   ```
3. **Start the Application**:

   ```
   npm start
   ```

   This will launch the application on `localhost:3000` (or your default React port).

   <br>

## Things To do

- **Backend Integration**: Implement pagination for front-end, and back-end, and lazy loading to manage extensive data efficiently.
- **Advanced Sorting Options**: Expand sorting functionalities to include descending order by community name in alphabetical order, price, and other fields.
- **Optimize Card Sizing**: Refining the responsive design to optimize card sizes dynamically as the screen width changes.
- **Unify Emotion styling**: Standardizing the code styling to use styled or inline-style only. I used both styled and inline styling methods with Emotion to demonstrate the ability.
- **Dark Mode**: Introducing a dark mode option for enhanced user experience and accessibility.
