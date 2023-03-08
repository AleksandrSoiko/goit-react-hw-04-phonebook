import { useState, useEffect } from 'react';
import { ListContact } from './ListContacts/ListContacts';
import { Layout } from './Layout/Layout.styled';
import { ContactForm } from './FormsAdd/FormsAdd';
import { nanoid } from 'nanoid';
import { Title } from './App.styled';
import { Filter } from './FilterContacts/FilterContacts';
import phones from '../../src/data.json';

const getInitialContacts = () => {
  const savedContact = localStorage.getItem('contacts');
  if (savedContact !== null) {
    const parsedContacts = JSON.parse(savedContact);
    return parsedContacts;
  }
  return phones;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onDelete = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  const onSubmit = data => {
    const equalName = contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (equalName) return alert(equalName.name + ' is already in contacts.');

    data.id = nanoid();
    setContacts(prevState => [data, ...prevState]);
  };

  const filterName = event => {
    setFiltered(event.currentTarget.value);
  };

  const filterNormilized = filtered.toLowerCase().trim();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormilized)
  );
  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={onSubmit}></ContactForm>
      <Title>Contacts</Title>
      <Filter value={filtered} OnFilterChange={filterName} />
      <ListContact contacts={visibleContacts} onDelete={onDelete} />
    </Layout>
  );
};
