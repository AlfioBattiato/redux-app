import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {getFetchAction} from '../redux/actions'


const MainSearch = () => {
  const jobs=useSelector(state=> state.data.data)

const dispatch=useDispatch()

  const myjob = useSelector((state) => {

    return state.favourites.content
})

  const [query, setQuery] = useState("");


  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(getFetchAction(query))

  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to={"/favourites"} className="ms-auto mt-auto "><Button variant="warning" className="position-relative">Favourites 
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{myjob.length}</span>
          </Button></Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
