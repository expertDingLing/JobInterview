import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({
	component: Component,
	isAuthenticated,
	...rest
}) {

	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated === false ? (
					<Redirect to="/signin" />
				) : (
						<Component {...props} />
					)
			}
		/>
	)
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps, null)(PrivateRoute);