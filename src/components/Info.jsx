import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstName: 'FirstName',
      lastName: 'LastName',
      email: 'me@mail.com',
      phone: '07696969696',
      description: 'some info about me',
    };
  }

  render() {
    const { firstName, lastName, email, phone, description } = this.state;

    return (
      <div>
        <button>edit</button>
        <h1>{firstName} {lastName}</h1>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <p>{description}</p>
      </div>
    );
  }
}

export default Info;