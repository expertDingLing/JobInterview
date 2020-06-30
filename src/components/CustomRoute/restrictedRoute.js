import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

function RestrictedRoute({
	component: Component,
	isAuthenticated,
	role,
	...rest
}) {
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated === true ? (
					<Redirect to="/" />
				) : (
						<Component {...props} />
					)
			}
		/>
	)
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.Auth.isAuthenticated,
	role: state.Auth.user.role
})

export default connect(mapStateToProps, null)(RestrictedRoute);