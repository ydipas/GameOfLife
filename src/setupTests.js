import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';

import initialStateFunc from 'reducers';

const mockStore = configureStore();
const initialState = initialStateFunc();
export const store = mockStore(initialState);
global.document = document;
configure({ adapter: new Adapter() });
export default store;
