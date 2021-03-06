import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
const { Content } = Layout;

export default class Home extends Component {
	render() {
		return (
			<Layout className="layout">
	      <Content className="mainContent">
		      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
						<Link to="/travels" className="btn btn-lg btn-default">Travels Agency</Link>
						<Link to="/events" className="btn btn-lg btn-default">Event Organizer</Link>
					</div>
		    </Content>
	    </Layout>
		);
	}
}
