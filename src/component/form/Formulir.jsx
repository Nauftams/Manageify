import React from "react";
import { Form, Button } from "react-bootstrap";

const Formulir = ({ handleChange, handleSubmit, task, target }) => {
  return (
    <Form onSubmit={handleSubmit} className="my-form">
      <Form.Group className="mb-3" controlId="task">
        <Form.Label>Task</Form.Label>
        <Form.Control name="task" type="text" placeholder="What you have to do" value={task} onChange={(event) => handleChange(event)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="target">
        <Form.Label>Target</Form.Label>
        <Form.Control name="target" type="text" value={target} placeholder="Your target time or objective" onChange={(event) => handleChange(event)} />
      </Form.Group>
      <Button className="tombol" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Formulir;
