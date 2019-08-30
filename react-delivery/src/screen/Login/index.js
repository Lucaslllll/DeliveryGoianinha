import React, { useContext } from 'react';

import Register from '../../components/Register/';
import Login from '../../components/Login';
import beforeLogin from '../../components/beforeLogin/';
import Wallpaper from '../../components/Wallpaper';

import { useTransition, animated } from 'react-spring';

import {BrowserRouter, Route, Switch, __RouterContext } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './styles.css';

function LoginScreen(){
	const { location } = useContext(__RouterContext);
	const transitions = useTransition(location, location => location.pathname, {
		from: { opacity: 0},
		enter: { opacity: 1},
		leave: { opacity: 0},
	});
	return (
		<>
			<div className="containerLogin">
	        	<div className="wallpaper">
	            	<Wallpaper />
	         	</div>
						<div className="wallpaperLogin">
						{ transitions.map(({ item, props, key }) => (
							<animated.div key={key} style={props} className="login" >
								<Switch location={item}>
									<Route exact path="/" component={beforeLogin} />
									<Route path="/Login" component={Login} />
									<Route path="/Register" component={Register} />
								</Switch>
							</animated.div>
						)) }
						</div>
			</div>
		</>
	);
}


export default LoginScreen;