import 'babel-polyfill'
import * as actions from './actionCreators';
import * as types from './actionTypes';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'



const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


describe('actions', () => {
  it('should create an action to add a project', () => {
    const project = {
       "code":"BAcyDyQwcXX",
       "caption":"Lunch #hamont",
       "likes":56,
       "id":"1161022966406956503",
       "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
    }
    const expectedAction = {
      type: types.ADD_PROJECT,
      project
    }
    expect(actions.addProject(project)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_PROJECTS when fetching projects has been done', () => {
    nock('http://localhost:4000/api/')
      .get('/projects')
      .reply(200, { projects: ['do something'] })

    const expectedActions = [
      { type: types.REQUEST_PROJECTS },
      { type: types.RECEIVE_PROJECTS,
        projects: {
          projects: ['do something']
        },
        receivedAt: expect.any(Number)}
    ]

    const store = mockStore({ projects: [] })

    return store.dispatch(actions.fetchProjects())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
