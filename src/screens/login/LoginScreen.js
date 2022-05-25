import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './login.css';


function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const contentState = {
  hidden: {
    opacity: 0,
    scale: 10,
    x: 1000,
    y: -1000,
    transition: {
      duration: 2
    },
  },
  active: {
    opacity: 1,
    scale: 2,
    x: 400,
    y: -5,

  },
  exit: {
    opacity: 0,
  },
}

const intelligenceState = {
  hidden: {
    opacity: 0,
    scale: 10,
    x: -1000,
    y: 1000,
    transition: {
      duration: 2
    },
  },
  active: {
    opacity: 1,
    scale: 2,
    x: 400,
    y: 0,

  },
  exit: {
    opacity: 0,
  },
}

const levelsState = {
  hidden: {
    opacity: 0,
    scale: 10,
    x: -1000,
    y: -1000,
    transition: {
      duration: 2
    },
  },
  active: {
    opacity: 1,
    scale: 2,
    x: 400,
    y: 5,
  },
  exit: {
    opacity: 0,
  },
}

  return (
    <main
    className="loginScreenMain"
    >
      <Container fluid>
        <Row className="loginRow">
          <Col>
    <Form>

      <Form.Group className="emailContainer" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        />

      </Form.Group>

      <Form.Group className="passwordContainer" controlId="formBasicPassword">

        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button className="loginButton" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    <Col>
    <motion.div>
      <motion.h1
      whileHover={{ y: -25}}
      initial="hidden"
      animate="active"
      variants={contentState}
      >
        Content
      </motion.h1>
      <motion.h1
      initial="hidden"
      animate="active"
      variants={intelligenceState}
      >
        Intelligence
      </motion.h1>
      <motion.h4
        whileHover={{ y: 25}}
      initial="hidden"
      animate="active"
      variants={levelsState}
      >
        by Levels
      </motion.h4>

      </motion.div>
    </Col>
    </Row>
    </Container>
  </main>

  );
}

export default Login;
