import { Formik, Field } from 'formik';
import { Component } from 'react';
import { Form, FormField, SubmitBtn, ErrorMessage } from './FormsAdd.styled';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import capitalize from 'lodash.capitalize';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  number: Yup.number('')
    .typeError(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(5, 'Too Short!')
    .required('Required'),
});

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, action) => {
    this.props.onSubmit(values);
    action.resetForm();
  };

  render() {
    const fields = Object.keys(this.state);
    return (
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={this.handleSubmit}
      >
        <Form>
          {fields.map(item => {
            return (
              <FormField key={nanoid()}>
                {capitalize(item)}
                <Field name={item}></Field>
                <ErrorMessage name={item} component="span" />
              </FormField>
            );
          })}
          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </Form>
      </Formik>
    );
  }
}
