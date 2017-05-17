import { connect } from 'react-redux'
import AppComponent from '../components/AppComponent'
import AccountActions from '../redux/AccountRedux'

const mapStateToProps = (state) => {
  const { account } = state
  
  return {
    account
  }
}

const mapStateToDispatch = (dispatch) => ({
  loginRequest: () => dispatch(AccountActions.loginRequest("foo@bar.com")),
  logout: () => dispatch(AccountActions.reset())
})

export default connect(mapStateToProps, mapStateToDispatch)(AppComponent)
