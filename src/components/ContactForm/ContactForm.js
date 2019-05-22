import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = e => {
    e.preventDefault();
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div className={classes.FormWrapper}>
      <Form className={`${classes.Form} clearfix`} onSubmit={e => submit(e)}>
        <FormGroup className={classes.InputWrapper}>
          <Input
            type="text"
            name="name"
            id="nameField"
            className={classes.NameField}
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <Label for="nameField">Name</Label>
        </FormGroup>
        <FormGroup className={classes.InputWrapper}>
          <Input
            type="email"
            name="email"
            id="emailField"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={classes.EmailField}
            required
          />
          <Label for="emailField">Email</Label>
        </FormGroup>
        <FormGroup className={classes.InputWrapper}>
          <Input
            type="textarea"
            name="message"
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className={classes.MessageField}
          />
        </FormGroup>
        <Button className={`${classes.SubmitBtn} float-right`}>Send</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
