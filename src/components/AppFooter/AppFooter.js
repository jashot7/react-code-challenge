import React, { Component } from "react";

import { Container } from "reactstrap";

class AppFooter extends Component {
  render() {
    return (
      <>
        <Container>
          <p className="float-right">
            <a href="/">Back to top</a>
          </p>
          <p>
            © 2017-2018 Company, Inc. · <a href="/">Privacy</a> ·{" "}
            <a href="/">Terms</a>
          </p>
        </Container>
      </>
    );
  }
}

export default AppFooter;
