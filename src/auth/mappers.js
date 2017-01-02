import _ from 'lodash'
import { SubmissionError } from 'redux-form'
import { UserSignIn } from './models'
import { app } from '../index'

export default {
  'auth.user': {
    data: ({ state }) => {
      return {
        user: state.user
      }
    },
    method: {
      onLogout: ({ dispatch }) => () => {
        dispatch({ type: '@@xadmin/AUTH_SIGN_OUT' })
      }
    }
  },
  'auth.sign_in': {
    method: {
      onSignIn: ({ dispatch, router }, { location: { query } }) => (item) => {
        const { _t } = app.context
        return new Promise((resolve, reject) => {
          dispatch({ model: UserSignIn(app), type: 'SAVE_ITEM', item, promise: { resolve, reject }, 
            message: false })
        }).then(user => {
          dispatch({ type: '@@xadmin/AUTH_SIGN_IN', payload: _.omit(user, 'password') })
          router.push(query && query.redirect || '/app/')
        }).catch(error => {
          throw new SubmissionError({ password: _t('Incorrect username or password') })
        })
      }
    },
    event: {
      mount: ({ dispatch, router }, { location: { query } }) => {
        const { _t } = app.context
        if(query.verifyEmail == 'success') {
          dispatch({ type: '@@xadmin/ADD_NOTICE', payload: {
            type: 'success', headline: 'Success', message: _t('Verify email success, please login')
          } })
        }
      }
    }
  },
  'auth.sign_up': {
    method: {
      onSuccess: ({ dispatch, router }) => (resp) => {
        if(resp.key) {
          dispatch({ type: '@@xadmin/AUTH_VERIFY_EMAIL', payload: resp })
        } else if(resp.detail) {
          dispatch({ type: '@@xadmin/ADD_NOTICE', payload: {
            type: 'success', headline: 'Success', message: resp.detail
          } })
        }
        router.push('/login')
      }
    }
  },
  'auth.forget_password': {
    method: {
      onSuccess: ({ dispatch, router }) => (user) => {
        router.push('/login')
      }
    }
  },
  'auth.reset_password': {
    method: {
      onSuccess: ({ dispatch, router }) => (user) => {
        router.push('/login')
      }
    }
  }
}