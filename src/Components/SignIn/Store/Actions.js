import is from 'is_js';
import * as MutationsType from './MutationsType';

export default {
  signInAction({ commit }, request) {
    if (is.equal(request.email, '123@gmail.com') && is.equal(request.password, '123456')) {
      commit(MutationsType.SIGN_IN_SUCCESS, '!QAZ@WSX#EDC$RFV%TGB');
    } else {
      commit(MutationsType.SIGN_IN_ERROR, MutationsType.SIGN_IN_ERROR);
    }
  },
  setEmailAction({ commit }, value) {
    commit(MutationsType.SET_EMAIL, value);
  },
  setPasswordAction({ commit }, value) {
    commit(MutationsType.SET_PASSWORD, value);
  },
};
