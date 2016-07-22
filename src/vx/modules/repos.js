import createPersist from 'vuex-localstorage'
import request from 'plato-request'

import {
  GET_REPOS
} from '../types'

import {
  REPOS_KEY,
  ONE_MINUTE,
  PROMISE_SUCCESS
} from '../constants'

const persist = createPersist(REPOS_KEY, {
  repos: null
}, {
  expires: ONE_MINUTE
})

const state = persist.get()

const getters = {
  repos: state => state.repos || {}
}

const actions = {
  getRepos ({ commit }, payload) {
    commit(GET_REPOS, request('{base}', {
      params: {
        base: 'https://api.github.com/user/repos'
      },
      query: {
        type: 'owner'
      },
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token 97521d6208ff758d8131be99dfdbc6e2e85bacc6'
      }
    }))
  }
}

const mutations = {
  [GET_REPOS] (state, { payload, meta }) {
    if (meta === PROMISE_SUCCESS) {
      state.repos = payload
      persist.set(state)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
