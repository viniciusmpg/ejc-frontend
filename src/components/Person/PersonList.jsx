import React, { useState, useEffect } from "react";
import PersonItem from "./PersonItem";
import List from "@material-ui/core/List";
import * as actionCreators from "../../actions/actions";
import { connect } from "react-redux";

class PersonList extends React.Component {
  async componentDidMount() {
    await this.props.loadPersonList();
  }

  render() {
    return (
      <List>
        {this.props.persons &&
          this.props.persons.map(person => (
            <PersonItem key={person._id} person={person}></PersonItem>
          ))}
      </List>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(PersonList);
