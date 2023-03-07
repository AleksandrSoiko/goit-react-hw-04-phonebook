import PropTypes from 'prop-types';
import { Item, Contact, DeleteBtn } from './ItemContact.styled';

export const ContactItem = ({ name, contact, onDelete }) => {
  return (
    <Item>
      <Contact>
        {name}: {contact}
      </Contact>
      <DeleteBtn type="button" onClick={onDelete}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
