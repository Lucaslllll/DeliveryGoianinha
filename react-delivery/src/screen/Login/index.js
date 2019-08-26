import React, { useContext } from 'react';

import Register from '../../components/Register/';
import Login from '../../components/Login';
import beforeLogin from '../../components/beforeLogin/';
import Wallpaper from '../../components/Wallpaper';

import { useTransition, animated } from 'react-spring';

import { Route, Switch, __RouterContext } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './styles.css';

function LoginScreen(){

	const { location } = useContext(__RouterContext);
	const transition = useTransition(location, location => location.pathname, {
		from: { opacity: 0, transform: 'translate(100%, 0)'},
		enter: { opacity: 1, transform: 'translate(0%, 0)'} },
		leave: { opacity: 0, transform: 'translate(-50%, 0)'} }
	});

	return (
			<div className="containerLogin">
	        	<div className="wallpaper">
	            	<Wallpaper />
	         	</div>
	         	<div className="login">
	         		<Switch>
		        		<Route exact path="/" component={beforeLogin} />
		        		<Route path="/Login" component={Login} />
		        		<Route path="/Register" component={Register} />
	         		</Switch>
	         	</div>
			</div>

	);
}


export default LoginScreen;