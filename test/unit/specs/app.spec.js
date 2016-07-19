import Vue from 'vue'
import App from 'app.vue'

describe('app.vue', () => {
  let el

  beforeEach(() => {
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  afterEach(() => {
    document.body.removeChild(el)
  })

  it('should render correct contents', () => {
    const vm = new Vue({
      el,
      replace: false,
      template: '<app></app>',
      components: {
        App
      }
    })

    expect(vm.$children.length).to.equal(1)
    expect(vm.$children[0].$el.localName).to.equal('div')
  })
})
