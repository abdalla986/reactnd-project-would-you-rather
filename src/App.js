import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import QuestionResults from './components/QuestionResults'
import Nav from './components/Nav'
import Leaderboard from './components/Leaderboard'
import './App.css'
import NewQuestion from './components/NewQuestion'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import { LoadingBar } from 'react-redux-loading'


class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

	render() {
		return (
			<Router>
				<Fragment>
					<div className='container'>
            <LoadingBar />
						<Nav />
							<div className="main-content"> 
								<Switch>
									<Route path="/" exact component={Login}/>
									<ProtectedRoute path='/dashboard' exact component={Dashboard} />
									<ProtectedRoute path='/add' exact component={NewQuestion} />
									<ProtectedRoute path='/question/:id' component={QuestionResults} />
									<ProtectedRoute path='/leaderboard' component={Leaderboard} />
									<Route path="/not-found" component={NotFound} />
								</Switch>
							</div>
					</div>
				</Fragment>
			</Router>
		)
	}
}


export default connect()(App)
