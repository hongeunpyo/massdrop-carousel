# massdrop-carousel
Carousel implementation imitating Massdrop's carousel feature on item details page

![component-screen-capture](documentation/image-carousel-demo.gif)

Massdrop-carousel is an implementation of the image carousel component of Massdrop's item details page using raw HTML and CSS. This component is built as a fullstack application utilizing Express and SQL to serve data to the front-end component made using React.

## Related Projects
**massdrop-main-content is a static component to host the following components includng massdrop-carousel**
[massdrop-main-content](https://github.com/hrnyc20-agrabah/massdrop-main-content) Author: me
**massdrop-carousel was developed along with two other developers in charge of different components**
[massdrop-reviews](https://github.com/hrnyc20-agrabah/massdrop-ratings) Author: [bradleymorgan05](https://github.com/bradleymorgan05)
[massdrop-discussions](https://github.com/hrnyc20-agrabah/massdrop-discussion) Author: [junjo255](https://github.com/junjo255)
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
## Performance Optimzations
**Performance before optimization on 3g network:**
___
![component-screen-capture](documentation/performance-before-optimization-3g.png)
**Performance after optimization on 3g network:**
___
![component-screen-capture](documentation/performance-after-optimization-3g.png)
**Performance before optimization without throttling:**
___
![component-screen-capture](documentation/performance-before-optimization-none.png)
**Performance after optimization without throttling:**
___
![component-screen-capture](documentation/performance-after-optimization-3g.png)

