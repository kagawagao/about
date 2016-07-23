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
  repos: state => state.repos || []
}

const actions = {
  getRepos ({ commit }, payload) {
    commit(GET_REPOS, request('{base}', {
      params: {
        base: 'https://api.github.com/users/kagawagao/repos'
      },
      headers: {
        'Accept': 'application/vnd.github.v3+json'
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
