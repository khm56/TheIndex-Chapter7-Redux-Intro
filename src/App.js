import React, { Component } from "react";

// Data
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  render() {
    let newAuthor = {
      first_name: "Author",
      last_name: `${this.props.newAuthorId}`,
      imageUrl:
        "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
      books: [
        {
          title: "Anonymous book",
          color: "mysterious color"
        }
      ]
    };
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar
              addAuthorHandler={() => {
                console.log(this.props.addAuthor(newAuthor));
              }}
            />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.authors} />
          </div>
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
)(App);
