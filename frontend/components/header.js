import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Header } = Layout;

export default class SiteHeader extends Component {
	render() {
		return (
			<Header style={{ position: 'fixed', width: '100%' }}>
	      <div className="logo">
					<img src="http://hiddenmilestone.com/webadmin/uploadImages/logo%20newest%2001%20-%20Copy%20(2)%20-%20Copy.jpg" style={{width:'154px'}} />
				</div>
	    </Header>
		);
	}
}
