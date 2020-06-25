import {connect} from "react-redux";
import React from 'react'
import {cleanMessages} from "../Actions";
import MessageComp from "../Components/Message/MessageComp";

const mapStateToProps = state => ({
    message: state.message,
});

const mapDispatchToProps = dispatch => ({
    cleanMessages: (body) => dispatch(cleanMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageComp);