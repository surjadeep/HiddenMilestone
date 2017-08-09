import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Button } from 'antd';
const { Content } = Layout;

class TravelsAboutUs extends Component {
	render() {
		console.log(this)
		return (
			<Content className="mainContent">
				<div>
					{this.props.aboutus}
				</div>
			</Content>
		);
  }
}

function mapStateToProps(state) {
	return {
		aboutus: state.aboutus
	}
}

export default connect(mapStateToProps)(TravelsAboutUs);
