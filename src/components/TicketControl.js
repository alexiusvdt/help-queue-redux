import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    console.log("constructor consolelog", props);
    this.state = {
      selectedTicket: null,
      editing: false
    };
  }
  //probably better off as two separate methods as now this is quite clunky
  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        selectedTicket: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      //new code here!
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTicket(id)
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  //add ticket does double duty with here and new ticket to list
  // the only difference between these two is whether or not an id already exists
  // if it's a new id, a new ticket will fire, otherwise existing ticket will be replaced
  // consider updating type to ADD_OR_UPDATE_TICKET ?
  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    //this can go 
    // const { id, names, location, issue } = ticketToEdit;
    const action = a.addTicket(ticketToEdit)
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }


  // this method now dispatches 2 actions. be wary of this as it may create race conditions due to the async nature of these calls
  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    const action = a.addTicket(newTicket)
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({selectedTicket: selectedTicket});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail 
      ticket={this.state.selectedTicket} 
      onClickingDelete={this.handleDeletingTicket}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Ticket List";
      //formvisible is now in props
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>;
      buttonText = "Return to Ticket List"; 
    } else {
      currentlyVisibleState = <TicketList ticketList= {this.props.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
      buttonText = "Add Ticket"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

TicketControl.propTypes = {
  mainTicketList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};


const mapStateToProps = state => {
  return {
    mainTicketList: state.mainTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
// this doesnt need to change on redux implementation
// pass in the map so TicketControl component has mapStateToProps when connect() redifines a component
// always call connect() right before export
TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;

