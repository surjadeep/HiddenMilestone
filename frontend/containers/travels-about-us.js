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
					<div dangerouslySetInnerHTML={{__html: this.props.data.aboutus}} />
				</div>
			</Content>
		);
  }
}
function mapStateToProps(state) {
	return {
		data: state.aboutusData
	}
}
export default connect(mapStateToProps)(TravelsAboutUs);
