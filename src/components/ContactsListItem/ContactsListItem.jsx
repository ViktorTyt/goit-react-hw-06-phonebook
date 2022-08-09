import PropTypes from 'prop-types';
import { ContactItem, DeleteButton } from './ContactsListItem.styled';

export const ContactListItem = ({ id, name, number, deleteItem }) => {
  return (
    <ContactItem>
      <span>•</span> {name} <br /> tel: {number}
      <DeleteButton id={id} type="button" onClick={() => deleteItem(id)}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
