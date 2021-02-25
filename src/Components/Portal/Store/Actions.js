import router from '@/router';
import MutationsType from './MutationsType';

export default {
  goToUrlWithReplace({ commit }, value) {
    router.replace(value);
    commit(MutationsType.PORTAL_PATH, value);
  },
  goToUrlWithPush({ commit }, value) {
    router.push(value);
    commit(MutationsType.PORTAL_PATH, value);
  },
};
