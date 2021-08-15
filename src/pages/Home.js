import React, { Fragment } from "react";
import useAuth from '../auth/useAuth';
import { Row, Col } from "antd";
import "../assets/home.css";
import { Preview } from "../components/Preview";
import { CoreApp } from "../components/CoreApp";
export const Home = () => {
  const { logout } = useAuth();
  return (
    <div>
    <Fragment>
      <Row> 
        <Col className="color2" xs={{ span: 24, order: 2 }} sm={{ span: 16, order: 1 }} md={{ span: 16, order: 1 }} lg={{ span: 1, order: 1 }}>
        <button onClick={() => logout()}>Cerrar sesion</button>
        </Col>
        <Col className="color1" xs={{ span: 24, order: 1 }} sm={{ span: 8, order: 2 }} md={{ span: 8, order: 2 }} lg={{ span: 12, order: 2 }}>
          <CoreApp/>
        </Col>
        <Col className="color2" xs={{ span: 24, order: 1 }} sm={{ span: 8, order: 2 }} md={{ span: 8, order: 2 }} lg={{ span: 11, order: 2 }}>
          <Preview />
        </Col>
      </Row>
    </Fragment>
    </div>
  )
}
