import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import classnames from 'classnames';

const mapStateToProps = state => {
    return {
        pageContent: state.pageContent,
    };
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      changeContent: (content) => dispatch({type: "GET_CONTENT", content: content}),
    }
  }


const NavbarItems = (props) => {
    const className = classnames("nav-link", {
        "active" : props.name === props.pageContent,
    })
    return (
        <Link
        className= {className}
        role="tab"
        aria-controls="v-pills-home"

        onClick = {() => {
            props.changeContent(props.name);
        }}
        to = {props.to}
       >
        {props.name}
        </Link>

    )
};
export default connect(mapStateToProps,mapDispatchToProps)(NavbarItems);
