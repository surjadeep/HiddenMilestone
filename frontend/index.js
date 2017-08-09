import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';
import Footer from './components/footer';
import Home from './containers/home';
import Travels from './containers/travels';
import Events from './containers/events';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Layout } from 'antd';

render(
	<Provider store={store}>
		<BrowserRouter>
			<Layout>
				<Header />
				<Switch>
					<Route exact={true} path="/" component={Home}/>
					<Route path="/travels" component={Travels}/>
					<Route path="/events" component={Events}/>
				</Switch>
				<Footer/>
     </Layout>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
