import React from 'react';
import { Tab, Nav } from 'react-bootstrap';

import { CONTACTS_KEY, CONVERSATIONS_KEY } from '../constants/constants';

const SideBar = ({ id }) => {
	return (
		<div className="d-flex flex-column" style={{ width: '250px' }}>
			<Tab.Container>
				<Nav className="justify-content-center" variant="tabs">
					<Nav.Item>
						<Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
					</Nav.Item>
				</Nav>
			</Tab.Container>
		</div>
	);
};

export default SideBar;
