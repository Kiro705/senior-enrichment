import React from 'react';
import {connect} from 'react-redux';
import {writeCampusName, writeCampusURL, postCampus} from '../store.jsx';

const mapStateToProps = function(state) {
  return {
    newCampusName: state.newCampusName,
    newCampusURL: state.newCampusURL
  }
}

function FoundReturn(props){
  return (
    <div className=" campusList col-sm-6 col-11">
      <h2 className="floatCenter">Building a School on :{props.campusName}</h2>
      <form id="enroll-form" onSubmit={props.handleSubmit}>
        <div className="inputGroup">
          <span>
            <h5>Campus Name</h5>
          </span>
          <input
            className="inputField inputTextBox"
            autoComplete= "off"
            type="text"
            name="campusName"
            value={props.newChannelEntry}
            onChange={props.handleName}
          />
        </div>
        <div className="inputGroup">
          <span>
            <h5>Image URL</h5>
          </span>
          <input
            className="inputField inputTextBox"
            autoComplete= "off"
            type="text"
            name="imgURL"
            onChange={props.handleImgURL}
          />
        </div>
        <button type="submit" id="submit">Click to Found</button>
      </form>
    </div>
  );
}

function mapDispatchToProps (dispatch, ownProps){
  return {
    handleName: function(evt){
      dispatch(writeCampusName(evt.target.value))
    },
    handleImgURL: function(evt){
      dispatch(writeCampusURL(evt.target.value))
    },
    handleSubmit: function(evt){
      evt.preventDefault();
      dispatch(postCampus({name: evt.target.campusName.value, imgURL: evt.target.imgURL.value}, ownProps.history))
      dispatch(writeCampusName(''));
      dispatch(writeCampusURL(''));
    }
  }
}


const FoundContainer = connect(mapStateToProps, mapDispatchToProps)(FoundReturn);

export default FoundContainer;
