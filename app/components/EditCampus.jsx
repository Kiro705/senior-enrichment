import React from 'react';
import {connect} from 'react-redux';
import {writeCampusName, writeCampusURL, editCampus} from '../store.jsx';

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
    newCampusName: state.newCampusName,
    newCampusURL: state.newCampusURL
  }
}

function EditCampusReturn(props){
	const campusId = Number(props.match.params.campusId);
	const campus = props.campuses.filter(oneCampus => oneCampus.id === campusId)[0];
  if (campus){
    return (
      <div className=" campusList col-sm-6 col-11">
        <h2 className="floatCenter">Editing Data for: {campus.name}</h2>
        <form id="enroll-form" onSubmit={props.handleSubmit}>
          <div className="inputGroup">
            <span>
              <h5>Campus Name</h5>
            </span>
            <input
              className="inputField inputTextBox"
              autoComplete= "off"
              defaultValue={campus.name}
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
              defaultValue={campus.imgURL}
              type="text"
              name="imgURL"
              onChange={props.handleImgURL}
            />
          </div>
          <button type="submit" id="submit">Click to Edit</button>
        </form>
      </div>
    );
  } else {
    return (<div>heyo</div>);
  }
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
      dispatch(editCampus({id: Number(ownProps.match.params.campusId), name: evt.target.campusName.value, imgURL: evt.target.imgURL.value}, ownProps.history))
      dispatch(writeCampusName(''));
      dispatch(writeCampusURL(''));
    }
  }
}


const EditCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampusReturn);

export default EditCampusContainer;
