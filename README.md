# massdrop-carousel
Carousel implementation imitating Massdrop's carousel feature on item details page

![component-screen-capture](documentation/image-carousel-demo.gif)

Massdrop-carousel is a replication of the image carousel component of Massdrop's item details page. This component is built as a fullstack application utilizing Express and SQL to serve data to the front-end component made using React.

## Dependencies
- [React](https://reactjs.org/docs/getting-started.html) front-end framework
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- Testing
  - [Jest](https://jestjs.io/)
  - [Enzyme](https://airbnb.io/enzyme/)

## Getting Started
After cloning the Repo to your machine move to root directory
```
# Install dependencies
npm install

# Run database seeder
node db/dbSeeder.js

# Run the server locally
node server/server.js
```
