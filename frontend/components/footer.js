import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class SiteFooter extends Component {
	render() {
		return (
			<Footer className="SiteFooterCls">
				 <div>Copyright © 2017. Hidden Milestone | All rights reseved.</div>
				 <div style={{ float: 'right', marginTop:'-18px', color:'red' }}>Developed & Maintained by Surjadeep</div>
			 </Footer>
		);
  }
}
