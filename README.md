# Math App

## Project Overview
This is an interactive web application developed with React that features practice problems in a variety of topics. It offers various subjects (like math and science) and topics (like algebra and geometry) with descriptions and practice problems for each.

### Features:

- A homepage displaying different subjects
- A topic page for each subject displaying descriptions and links to related practice problems
- Interactive multiple-choice questions with dynamic feedback based on user selections
- Mobile-friendly design

## Online Demo

The online demo can be accessed [here](https://rosej12.github.io/).

## Setup Instructions

### Prerequisites for Running Locally

Make sure you have **Node.js** and **npm** installed on your system. You can verify if they are installed by running the following commands:

`
node -v
npm -v
`

### Steps for Running Locally
1. Clone the repository
`git clone https://github.com/rosej12/rosej12.github.io.git`
2. Install the necessary dependencies in the project directory
`npm install`
3. Run the app locally
`npm start`

## Technologies Used

- JavaScript
- React
- React Router
- CSS

## Challenges Faced

1. Unfamiliarity with React

One of the biggest challenges I faced during this project was that I was completely unfamiliar with React beforehand, and although I had some experience with Javascript, it had been quite a while since I last worked with it. Many aspects of React, such as its component-based architecture, hooks, and state management were all new to me, so the learning curve was quite steep at first. As a result, I spent a significant amount of time going through tutorials and the React documentation to get a good grasp of the basics before and while working on the project. I was also unfamiliar with common React errors so debugging those took time, but reading carefully through error messages and the documentation and other tutorials helped resolve most issues.

2. Limited Timeframe
Another challenge for me was the short timeframe in which I had to complete the project. This required me to prioritize the core features and also led to a lot of trial and error, especially since I was working with React for the first time. From this, I have learned to balance keeping things simple and functional while still meeting the requirements. If I had more time, I would be able to further refine the current features, add additional ones, and also work on improving styling.

## Future Improvements
- External Data Source: Currently, all the questions and information are hardcoded. In the future, they could be moved to an input file (e.g., JSON or CSV), which would make it easier to manage. Alternatively, a backend server or API could be integrated for fetching questions and other data to provide even more flexibility.

- More Content: The current app has a limited number of questions. More subjects, topics, and questions could be added to provide a broader range of content for practice.

- User Progress Tracking: It would be beneficial to implement a feature to track the user's progress. This could include keeping track of how many questions they've answered correctly and allowing them to resume their practice session later.

- Different Types of Questions: Currently, the app only includes multiple-choice questions. In the future, we could introduce other question types, such as:

	- Text input for open-ended questions where users can type their answers.
	- Drag-and-drop functionality for sorting items, matching questions, or arranging sequences.
	- True/False or other interactive question formats to diversify the way users engage with the content.