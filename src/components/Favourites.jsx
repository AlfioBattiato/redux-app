import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'



function Favourites() {
    const myjob = useSelector((state) => {

        return state.favourites.content
    })
    const dispatch = useDispatch()


    return (<Container className="mt-5">
        <Link to={"/"}><Button variant="success">Back</Button></Link>
        <h1 className="text-center">Lista preferiti:</h1>
        <Row className="mt-5">
            {myjob.map((myjob, index) => {
                return <Col xs={12} className="border p-1" key={index}>
                    <Row>
                   

                        <Col xs={4}><p className="fw-bold"> <Link to={`/${myjob.company_name}`}>{myjob.company_name}</Link></p></Col>
                        <Col xs={6}> <p className="">{myjob.title}</p></Col>
                        <Col xs={1}><Button variant="danger"
                            onClick={() => {
                                dispatch({
                                    type: 'DELETE_JOB',
                                    payload: index,
                                })

                            }}
                        >Remove</Button></Col>
                    </Row>

                </Col>

            })}
        </Row>


    </Container>)
}
export default Favourites