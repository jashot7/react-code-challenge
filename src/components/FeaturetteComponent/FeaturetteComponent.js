import React from "react";
import { Row, Col } from "reactstrap";
import "./FeaturetteComponent.scss";
import placeHolderImage500Square from "../../images/500x500.svg";

export default props => {
  return (
    <>
      <Row className="featurette">
        <Col md={{ size: 7, order: props.isReversed ? 2 : 1 }}>
          <h2 className="featurette-heading">
            {props.primaryHeading}
            <span className="text-muted">{props.secondaryHeading}</span>
          </h2>
          <p className="lead">{props.caption}</p>
        </Col>
        <Col md={{ size: 5, order: props.isReversed ? 1 : 2 }}>
          <img
            className="featurette-image img-fluid mx-auto"
            alt="500x500"
            src={placeHolderImage500Square}
          />
        </Col>
      </Row>
    </>
  );
};
