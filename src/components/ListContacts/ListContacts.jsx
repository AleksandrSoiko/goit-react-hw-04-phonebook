import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { List } from './ListContacts.styled';
import { ContactItem } from 'components/ItemContact/ItemContact';

export const ListContact = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={nanoid()}
            name={contact.name}
            contact={contact.number}
            onDelete={() => {
              onDelete(contact.id);
            }}
          />
        );
      })}
    </List>
  );
};

ListContact.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};
