import React from "react";
import { Button } from "reactstrap";
import "./SearchBar.scss";

export default props => {
  return (
    <form className="form-inline mt-2 mt-md-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </Button>
    </form>
  );
};
