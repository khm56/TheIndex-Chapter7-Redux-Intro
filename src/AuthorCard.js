import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

class AuthorCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={this.props.author.imageUrl}
              alt={
                this.props.author.first_name + " " + this.props.author.last_name
              }
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>
                {this.props.author.first_name +
                  " " +
                  this.props.author.last_name}
              </span>
            </h5>
            <small className="card-text">
              {this.props.author.books.length} books
            </small>
          </div>
          <button
            onClick={() => {
              console.log(this.props.deleteAuthor(this.props.author));
            }}
            className="btn btn-danger"
          >
            {" "}
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors,
    newAuthorId: state.newAuthorId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAuthor: newAuthor => dispatch(actionCreators.addAuthor(newAuthor)),
    deleteAuthor: author => dispatch(actionCreators.deleteAuthor(author))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorCard);
