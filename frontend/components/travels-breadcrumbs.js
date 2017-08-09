import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';

const breadcrumbNameMap = {
  '/travels/about-us': 'About Us',
  '/travels/contact-us': 'Contact Us',
	'/travels/services': 'Services'
};

const TravelsBreadcrumbs = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		if (index > 0) {
			const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
			return (
	      <Breadcrumb.Item key={url}>
	        <Link to={url}>
	          {breadcrumbNameMap[url]}
	        </Link>
	      </Breadcrumb.Item>
	    );
		}
  });
  const breadcrumbItems = [(
    <Breadcrumb.Item key="#">
      <Link to='/travels'><Icon type="home" /></Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return (
		<Breadcrumb>
			{breadcrumbItems}
		</Breadcrumb>
  );
});
export default TravelsBreadcrumbs;
