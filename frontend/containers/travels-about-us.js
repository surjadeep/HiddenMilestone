import React, { Component } from 'react';
import { Layout, Button } from 'antd';
const { Content } = Layout;

export default class TravelsAboutUs extends Component {
	render() {
		console.log(this)
		return (
			<Content className="mainContent">
				<div>
					We feel immense pleasure to introduce ourselves as a distinguished and one of the leading tour maker and event planner in Kolkata.<br/><br/>
					The name & the style Hidden Milestone Tours and Event Planners means everything, which is related to travel and anything related to an event. Our state of the art & unique method of rendering service has gained the faith of the customer within a short span of time. Thus Hidden Milestone has become the most familiar name in arranging group or tailor-made package tours and as well as arranging any event.<br/><br/>
					Running regular package tours to different tourist / historical / religious / adventure / wild life destinations in India is our specialty. We also engage in providing hotel accommodation all over India, Rail / Air Ticket reservations throughout India and Luxury Bus / Car Rental Services. Our other speciality is event management both corporate and social. Our service has been acclaimed as one of the best in the industry, by one and all. In this era of specialization, we at Hidden Milestone work hard to provide best services and make them feel a home away from home.<br/><br/>
					The wealth of experience shared by our experts ensures that the customer gets a superior service at the most competitive price. We blend our service with style together with elegance faith and hospitality. With our team comprising of professionals with caring attitude you will find sweeter fruits of customer satisfaction than expected.<br/><br/>
					All event management service mentioned here offer one of the best of experiences to all our customer. All tours mentioned here offer one of the best of experiences to the traveller. The effort has been to enrich event / traveling with lasting memories.
					You will find the MILESTONE hidden in bush besides the roads to help you to show the right way of your destination. Similarly we will assist you like that hidden milestone to show the right way and be a part of your event / journey.<br/><br/>
					<h4><b>We are specialized in the following Services:</b></h4><br/>
					<ul><li>E-Ticketing (Air / Bus / Rail)</li><li>Car / Bus Rental services</li><li>Weekend Tour</li><li>Adventure Tour</li><li>Honeymoon Tour</li><li>Wild Life Tour</li><li>Corporate Tour</li><li>School College Excursion</li><li>Customized Tour Packages</li><li>Corporate Events</li><li>Social Events (Marriage/Other Ceremonies)</li></ul>
				</div>
			</Content>
		);
  }
}
