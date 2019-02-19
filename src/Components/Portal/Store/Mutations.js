import MutationsType from './MutationsType';

/* eslint-disable no-param-reassign */
export default {
  [MutationsType.PORTAL_PATH](state, payload) {
    state.path = payload;
  },
};
