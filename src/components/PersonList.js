
import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css';

class PersonList extends Component {

    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container-fluid">

                <h1 className="user-header">
                    User List
                </h1>

                {this.state.persons.map(person => (

                    <div className="user-card" key={person.login.uuid}>

                        <div className="user-card-header">
                            {person.name.title} {person.name.first} {person.name.last}
                            {' - '}
                            {person.login.uuid}
                        </div>

                        <div className="user-card-body">

                            <div className="user-left">

                                <img
                                    src={person.picture.large}
                                    alt="User"
                                    className="user-image"
                                />

                                <button className="btn btn-primary user-button">
                                    Details
                                </button>

                            </div>

                            <div className="user-details">

                                <div className="detail-row">
                                    <span className="detail-label">User Name:</span>
                                    <span className="username-value">
                                        {person.login.username}
                                    </span>
                                </div>

                                <div className="detail-row">
                                    <span className="detail-label">Gender:</span>
                                    <span>{person.gender.toUpperCase()}</span>
                                </div>

                                <div className="detail-row">
                                    <span className="detail-label">Time Zone Description:</span>
                                    <span>{person.location.timezone.description}</span>
                                </div>

                                <div className="detail-row">
                                    <span className="detail-label">Address:</span>
                                    <span>
                                        {person.location.street.number}{' '}
                                        {person.location.street.name},{' '}
                                        {person.location.city},{' '}
                                        {person.location.state},{' '}
                                        {person.location.country} - {person.location.postcode}
                                    </span>
                                </div>

                                <div className="detail-row">
                                    <span className="detail-label">Email:</span>
                                    <span>{person.email}</span>
                                </div>

                                <div className="detail-row">
                                    <span className="detail-label">Birth Date and Age:</span>
                                    <span>
                                        {person.dob.date} ({person.dob.age})
                                    </span>
                                </div>

                                <div className="detail-row">
                                    <span className="detail-label">Register Date:</span>
                                    <span>{person.registered.date}</span>
                                </div>

                                <div className="detail-row">
                                    <span className="detail-label">Phone#:</span>
                                    <span>{person.phone}</span>
                                </div>

                                <div className="detail-row">
                                    <span className="detail-label">Cell#:</span>
                                    <span>{person.cell}</span>
                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>
        );
    }
}

export default PersonList;
