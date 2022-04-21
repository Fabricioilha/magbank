import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./CardList.scss";

type Posts = {
    id:number,
    title:string,
    image:string,
    excerpt:string,
    action:string
}

const CardList = ({ array }: any) => {
    return (
        <Container>
            <Row>
                {array && array.map(({id, title, image, excerpt, action}: Posts) => (
                    <Col xs={12} lg={4} key={id}>
                        <Card className="mx-auto my-3">
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text className="text-muted">
                                    {excerpt}
                                </Card.Text>
                                <Button variant="danger">{action}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col lg={12} className=" my-5 d-flex">
                    <Button className='mx-auto' variant='success' size="lg">Abra sua conta</Button>
                </Col>
            </Row>
        </Container>
    )
}


export default CardList