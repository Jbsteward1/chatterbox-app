import React from "react";
import "../App.css";

class Tabs extends React.Component {
    render() {
        return (
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
        >
            <Tab eventKey="home" title="Home">
                <Sonnet />
            </Tab>
            <Tab eventKey="message" title="Messages">
                <Sonnet />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                <Sonnet />
            </Tab>
        </Tabs>
        );
    }
}

export default Dashboard;
