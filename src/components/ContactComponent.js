import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form} from 'react-redux-form';
import { Fade } from 'react-animation-components';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            phoneNum: "",
            email: "",
            reservation: "",
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetReservationForm();
    }

    render() {
        return (
            <React.Fragment>
                <div className="masthead3"></div>
                <div className="container">
                    <div className="row row-content align-items-center">
                        <div className="col-sm-4">
                            <h4>Our Address</h4>
                            <address>
                                58 London Street<br />
                                Sacramento, CA 94550<br />
                                U.S.A.
                            </address>
                        </div>
                        <div className="col">
                            <a role="button" className="btn btn-link" href="tel:+19258675309"><i className="fa fa-phone" /> 1-925-867-5309</a><br />
                            <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> amorefood@gmail.com</a>
                        </div>
                        <div className="col">
                            <h4>Hours</h4>
                            <p>Monday-Thursday: 11:30am-10:00pm</p>
                            <p>Friday-Sunday: 11:30am-11:30pm</p>
                        </div>    
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <Fade in>
                            <h2>Apply for a Reservation</h2>
                            <hr />
                            <p>Reservations are first come, first serve. Please do not request reservations outside of business hours.</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <Fade in timeout={800}>
                        <Form model="reservationForm" onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                    <Control.text model=".firstName" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="reservation" md={2}>Reservation Details</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".reservation" id="reservation" name="reservation"
                                            rows="12"
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                            </Fade>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default Contact;