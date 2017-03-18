/* globals grecaptcha: false */
import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import * as ContactStatus from '../constants/contact-status';
import * as ContactActions from '../actions/contact-actions';
import * as ContactApi from '../api/contact-api';
import Copyright from '../sections/copyright';
import siteConfig from '../../config/global';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let state                    = Object.assign({}, this.props.state);
        state[event.target.id].value = event.target.value;
        state[event.target.id].empty = false;

        state.valid = document.getElementById('contactForm').checkValidity();

        store.dispatch(ContactActions.setContactData(state));
    }

    checkRecaptcha() {
        if ('undefined' === typeof(grecaptcha)) {
            window.setTimeout(function () {
                store.dispatch(ContactActions.setContactData({
                    status: ContactStatus.WAITING_FOR_RECAPTCHA
                }));
            }, 250);

        } else {
            let state            = Object.assign({}, this.props.state);
            state.captcha.widget = grecaptcha.render('cap', {
                'sitekey' : siteConfig.recaptcha,
                'callback': function (response) {
                    store.dispatch(ContactActions.setContactData({
                        captcha: {
                            value: response
                        },
                        status : ContactStatus.CAPTCHA_ACQUIRED
                    }));
                },
                'badge'   : 'inline',
                'size'    : 'invisible'
            });
            state.status         = ContactStatus.READY;

            store.dispatch(ContactActions.setContactData(state));
        }
    }

    componentDidMount() {
        this.checkRecaptcha();
    }

    componentWillReceiveProps(props) {
        switch (props.state.status) {
            case ContactStatus.WAITING_FOR_RECAPTCHA:
                this.checkRecaptcha();
                break;

            case ContactStatus.MUST_INITIALISE:
                grecaptcha.reset(props.state.captcha.widget);

                props.state.captcha.value = '';
                props.state.status        = ContactStatus.READY;

                store.dispatch(ContactActions.setContactData(props.state));
                break;

            case ContactStatus.CAPTCHA_ACQUIRED:
                store.dispatch(ContactActions.setContactData({
                    status: ContactStatus.SENDING
                }));

                ContactApi.sendMessage(props.state);
                break;

            case ContactStatus.FAILED:
            case ContactStatus.SENT:
                window.setTimeout(function () {
                    store.dispatch(ContactActions.resetContactData());

                }, 10000);
                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        let state             = Object.assign({}, this.props.state);
        state.name.enabled    = false;
        state.email.enabled   = false;
        state.message.enabled = false;
        state.status          = ContactStatus.ACQUIRE_CAPTCHA;

        store.dispatch(ContactActions.setContactData(state));

        grecaptcha.execute(state.captcha.widget);
    }

    render() {
        let status = '';
        switch (this.props.state.status) {
            case ContactStatus.ACQUIRE_CAPTCHA:
                status = (<span>Validating</span>);
                break;

            case ContactStatus.CAPTCHA_ACQUIRED:
            case ContactStatus.SENDING:
                status = (<span>Sending message</span>);
                break;

            case ContactStatus.SENT:
                status = (<span><i className="material-icons">check_circle</i><span>Message sent</span></span>);
                break;

            case ContactStatus.FAILED:
                status = (<span><i className="material-icons">error</i><span>Message could not be sent</span></span>);
                break;

            default:
                status = (<button type="submit" disabled={!this.props.state.valid}>Send Message</button>);
                break;
        }

        return (
            <div className="homeContactContainer" id="contact">
                <div className="homeContact">
                    <h1>Let's talk</h1>
                    <p>Do you have questions or comments? Or maybe you just want to have a friendly chat? Reach out
                       today.</p>
                    <form id="contactForm" onSubmit={this.handleSubmit}>
                        <label> Full Name: <input type="text" id="name" name="name" required="required" maxLength="50"
                                                  disabled={!this.props.state.name.enabled}
                                                  value={this.props.state.name.value} onInput={this.handleChange}
                                                  onChange={this.handleChange}
                                                  className={this.props.state.name.empty ? 'empty' : ''}/> </label>

                        <label> Email Address: <input type="email" id="email" name="email" required="required"
                                                      maxLength="50" disabled={!this.props.state.email.enabled}
                                                      pattern="^[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
                                                      value={this.props.state.email.value} onInput={this.handleChange}
                                                      onChange={this.handleChange}
                                                      className={this.props.state.email.empty ? 'empty' : ''}/> </label>

                        <label> Your Message: <textarea id="message" name="message" required="required"
                                                        disabled={!this.props.state.message.enabled}
                                                        value={this.props.state.message.value}
                                                        onInput={this.handleChange}
                                                        onChange={this.handleChange}
                                                        className={this.props.state.message.empty ? 'empty' : ''}/>
                        </label>

                        <div className="formBottom">
                            <div id="cap" className="captcha"/>

                            <div className="buttons">{status}</div>
                        </div>
                    </form>
                </div>
                <Copyright/>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        state: store.contactState
    }
};

export default connect(mapStateToProps)(ContactForm);
