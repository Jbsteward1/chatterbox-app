import React from 'react';

const contacts = [
    {
        firstName: "";
        lastName: "";
        phoneNumber: "";
        dateNumber: "";
    },

    {
        firstName: "";
        lastName: "";
        phoneNumber: "";
        dateNumber: "";
    },

    {
        firstName: "";
        lastName: "";
        phoneNumber: "";
        dateNumber: "";
    },
    
    {
        firstName: "";
        lastName: "";
        phoneNumber: "";
        dateNumber: "";
    },
]

const Contact = ({firstName, lastName, phoneNumber, date}) => {
    return <li key={Contact}>
    <h3>{firstName}</h3>
    <div>
      <strong>{lastName}</strong>
    </div>
    <div>{phoneNumber}</div>
    <div>{date} </div>
  </li>
}

const ContactList = () => {

    return (
    <ul>
    {contacts.map((contact) => {
      return (
        <li key={contact}>
          <h3>{contact.first.Name}</h3>
          <div>
            <strong>{contact.lastName}</strong>
          </div>
          <div>{contact.phone}</div>
          <div>{contact.date}</div>
        </li>
      );
    })}
  </ul>;

};

export default ContactList;