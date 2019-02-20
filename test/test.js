const app = require('../server/app.js');
const request = require('supertest')
import React from 'react';
import App from '../client/app';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
 
//test server implementation
describe('Test api path /api/item/:item_id', () => {
  test('Should return status code of 200', (done) => {
    request(app).get('/api/item/1')
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('Expect response to be an array', () => {
  test('Should return true if response is an array', (done) => {
    request(app).get('/api/item/1')
    .then((response) => {
      expect(Array.isArray(response.body)).toBe(true);
      done();
    });
  });
});

describe('Expect url to begin with http', () => {
  test('Should return true if response is an array', (done) => {
    request(app).get('/api/item/1')
    .then((response) => {
      expect(response.body[0].img_url.substring(0, 5)).toBe('https');
      done();
    });
  });
});

// React Client Testing
describe('Expect client to render properly', () => {
  it('renders correctly', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
});

describe('Expect App to have class portal-container imported from Modal', () => {
  it('will render image carousel portal', () => {
    const app = shallow(<App />);
    expect(app.find('.portal-container')).toBeDefined();
  });
});

// describe('Expect Modal to render when clicked on', () => {
//   it('will render the modal component', () => {
//     const onButtonClick = sinon.spy();
//     const app = shallow(<App onButtonClick = {onButtonClick}/>);
//     console.log("testing output", app.find('#myBtn').length)
//     app.find('#myBtn').at(0).simulate('click');
//     expect(onButtonClick).toHaveProperty('callCount', 1);
//   });
// });