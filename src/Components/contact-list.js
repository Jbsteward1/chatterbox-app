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
        return <Contact {...contact} />
        })}
    </ul>

};

export default ContactList;