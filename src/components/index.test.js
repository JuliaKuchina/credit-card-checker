import React from 'react';
import Input from './';
import renderer from 'react-test-renderer';

let focusOnInputSpy = jest.fn();

jest
  .spyOn(Input.prototype, 'focusOnInput')
  .mockImplementation(focusOnInputSpy);


it('Input renders correctly', () => {
  const tree = renderer
    .create(<Input page="http://www.facebook.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(focusOnInputSpy).toHaveBeenCalled();
});