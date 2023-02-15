import * as c from '../../actions/ActionTypes';
import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form visibility state to true', () => {
    expect(formVisibleReducer(false, { type: c.TOGGLE_FORM })).toEqual(true);
  });

});
