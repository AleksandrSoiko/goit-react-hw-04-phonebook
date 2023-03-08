import PropTypes from 'prop-types';
import { Input, Label, Span } from './FilterContacts.styled';

export const Filter = ({ value, OnFilterChange }) => {
  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={OnFilterChange}
      />
    </Label>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  OnFilterChange: PropTypes.func.isRequired,
};
//
