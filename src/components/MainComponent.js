import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { actions } from 'react-redux-form';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {return {};};

const mapDispatchToProps = {
    resetReservationForm: () => (actions.reset('reservationForm')),
};

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        const MenuPage = () => {
            return (
                <Menu />
            );
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route path='/menu' component={MenuPage} />
                            <Route exact path='/contact' render={() => <Contact resetReservationForm={this.props.resetReservationForm} /> } />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));