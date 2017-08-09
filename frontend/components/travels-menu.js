import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button, Sider } from 'antd';
const SubMenu = Menu.SubMenu;

export default class TravelsMenu extends Component {
	state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
	render() {
		return (
			<div style={{ width: 240, marginTop:'75px', paddingLeft:'20px', position:'fixed' }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: '0px', borderRadius:'0px' }}>
          <Icon type={this.state.collapsed ? 'right' : 'left'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Link to='/travels'>
							<div>
								<Icon type="home" />
            		<span>Home</span>
							</div>
						</Link>
          </Menu.Item>
          <Menu.Item key="2">
						<Link to='/travels/about-us'>
							<div>
								<Icon type="desktop" />
								<span>About Us</span>
							</div>
						</Link>
          </Menu.Item>
					<Menu.Item key="3">
						<Link to='/travels/services'>
							<div>
								<Icon type="inbox" />
								<span>Services</span>
							</div>
						</Link>
          </Menu.Item>
					<Menu.Item key="4">
						<Link to='/travels/contact-us'>
							<div>
								<Icon type="inbox" />
								<span>Contact Us</span>
							</div>
						</Link>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Theme Packages</span></span>}>
            <Menu.Item key="5">Coming soon</Menu.Item>
            <Menu.Item key="6">Coming soon</Menu.Item>
            <Menu.Item key="7">Coming soon</Menu.Item>
            <Menu.Item key="8">Coming soon</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Destinations</span></span>}>
            <Menu.Item key="9">Coming soon</Menu.Item>
            <Menu.Item key="10">Coming soon</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
		);
	}
}
