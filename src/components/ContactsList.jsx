import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import { listUpdated } from 'redux/contacts/slice';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  /* const updatedNoticed = useSelector( (state) => state.contacts.updated) */
 
  const filteredbyName = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
 

  return (
    <ul>
      <h1>{filteredbyName}</h1>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filteredbyName)
        )

        .map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.phone}
            <button
              onClick={() => {
                dispatch(deleteContact(contact.id));
                dispatch(listUpdated());
                
              }}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactsList;
