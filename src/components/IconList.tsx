import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconListType = {
    icon: any,
    size?: any,
    color?: any,
    className?: string,
    children?: any,
    onClick?: any
    key?: any,
    role?:string
}

const IconList = ({ icon, size = 1, color = "#000", className, children, onClick, key, role }: IconListType) => {
    return (
        <Row className="my-2 justify-content-center">
            <Col xs={1} className="d-flex justify-content-center">
                <FontAwesomeIcon role={role} icon={icon} size={size} color={color} onClick={onClick} />
            </Col>
            <Col xs={11} className={className}> 
                {children} 
            </Col>
        </Row>
    )
}

export default IconList