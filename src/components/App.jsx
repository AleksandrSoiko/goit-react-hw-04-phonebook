import { Component } from 'react';
import { ListContact } from './ListContacts/ListContacts';
import { Layout } from './Layout/Layout.styled';
import { ContactForm } from './FormsAdd/FormsAdd';
import { nanoid } from 'nanoid';
import { Title } from './App.styled';
import { Filter } from './FilterContacts/FilterContacts';
import phones from '../../src/data.json';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContact = localStorage.getItem('contacts');
    if (savedContact !== null) {
      const parsedContacts = JSON.parse(savedContact);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [...phones] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onSubmit = data => {
    const equalName = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (equalName) return alert(equalName.name + ' is already in contacts.');

    data.id = nanoid();
    this.setState(prev => ({ contacts: [data, ...prev.contacts] }));
  };

  filterName = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const filterNormilized = this.state.filter.toLowerCase().trim();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormilized)
    );
    return (
      <Layout>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.onSubmit}></ContactForm>
        <Title>Contacts</Title>
        <Filter value={this.state.filter} OnFilterChange={this.filterName} />
        <ListContact contacts={visibleContacts} onDelete={this.onDelete} />
      </Layout>
    );
  }
}
