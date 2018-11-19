import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import "./AppMain.scss";
import ChallengeCarousel from "../ChallengeCarousel/ChallengeCarousel";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import FeaturetteComponent from "../FeaturetteComponent/FeaturetteComponent";

const headings = [
  {
    key: "uniquelyAwesome",
    caption:
      "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."
  },
  {
    key: "theBestHeading",
    caption:
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
  },
  {
    key: "wasThereEverABetterHeading",
    caption:
      "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
  }
];

const featurettes = [
  {
    key: "featurette1",
    primaryHeading: "First featurette heading.",
    secondaryHeading: "It'll blow your mind.",
    caption:
      "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
  },
  {
    key: "featurette2",
    primaryHeading: "Oh yeah, it's that good.",
    secondaryHeading: "See for yourself.",
    isReversed: true,
    caption:
      "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
  },
  {
    key: "featurette3",
    primaryHeading: "And lastly, this one. ",
    secondaryHeading: "Checkmate.",
    caption:
      "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
  }
];

class AppMain extends Component {
  render() {
    const buttonText = "View details »";
    const headingText = "Heading";
    const headingComponents = headings.map(heading => {
      return (
        <Col key={heading.key} lg="4">
          <HeadingComponent
            key={heading.key}
            caption={heading.caption}
            heading={headingText}
            buttonText={buttonText}
          />
        </Col>
      );
    });

    const featuretteComponents = featurettes.map(featurette => {
      return (
        <Fragment key={featurette.key}>
          <FeaturetteComponent
            key={featurette.key}
            primaryHeading={featurette.primaryHeading}
            secondaryHeading={featurette.secondaryHeading}
            caption={featurette.caption}
            isReversed={featurette.isReversed}
          />
          <hr className="challenge-divider" />
        </Fragment>
      );
    });

    return (
      <>
        <ChallengeCarousel />
        <Container className="marketing">
          <Row>{headingComponents}</Row>
          <hr className="challenge-divider" />
          {featuretteComponents}
        </Container>
      </>
    );
  }
}

export default AppMain;
