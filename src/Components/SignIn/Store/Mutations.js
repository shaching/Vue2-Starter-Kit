import * as MutationsType from './MutationsType';

/* eslint-disable no-param-reassign */
export default {
  [MutationsType.SIGN_IN_SUCCESS](state, payload) {
    state.SignInResponse.token = payload;
    state.isSignIn = true;
  },
  [MutationsType.SIGN_IN_ERROR](state, payload) {
    state.error = payload;
    state.SignInResponse.token = '';
    state.isSignIn = false;
  },
  [MutationsType.SET_EMAIL](state, payload) {
    state.SignInRequest.email = payload;
    state.SignInResponse.token = '';
    state.isSignIn = false;
  },
  [MutationsType.SET_PASSWORD](state, payload) {
    state.SignInRequest.password = payload;
    state.SignInResponse.token = '';
    state.isSignIn = false;
  },
};
