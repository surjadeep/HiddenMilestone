import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TravelsMenu from '../components/travels-menu';
import TravelsBreadcrumbs from '../components/travels-breadcrumbs';
import TravelsHome from './travels-home';
import TravelsAboutUs from './travels-about-us';
import TravelsContactUs from './travels-contact-us';
import TravelsPackages from './travels-packages';
import TravelsDestinations from './travels-destinations';
import TravelsServices from './travels-services';
import { Layout } from 'antd';

export default class Travels extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: null
		};
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Layout>
						<TravelsBreadcrumbs/>
						<TravelsMenu/>
							<Route exact path={this.props.match.url} component={TravelsHome} />
							<Route path={`${this.props.match.url}/about-us`} component={TravelsAboutUs}/>
							<Route path={`${this.props.match.url}/contact-us`} component={TravelsContactUs}/>
							<Route path={`${this.props.match.url}/packages`} component={TravelsPackages}/>
							<Route path={`${this.props.match.url}/destinations`} component={TravelsDestinations}/>
							<Route path={`${this.props.match.url}/services`} component={TravelsServices}/>
					</Layout>
				</BrowserRouter>
			</div>
		);
  }
}
