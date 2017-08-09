import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class SiteFooter extends Component {
	render() {
		return (
			<Footer style={{ width: '100%', backgroundColor:'#000', color:'#eee' }}>
				 <div>Copyright © 2017. Hidden Milestone | All rights reseved.</div>
				 <div style={{ float: 'right', marginTop:'-18px', color:'red' }}>Developed & Maintained by Surjadeep</div>
			 </Footer>
		);
  }
}
