import React from 'react';
import TodoItem from './TodoItem';
import InputForm from './InputForm';
import SimpleDatePicker from './SimpleDatePicker';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filterDate: 'monday'
    };
  }

  addToList = (event) => {
    event.preventDefault();

    let textbox = event.target.children[0];
    let itemname = textbox.value;
    let item = TodoItem(itemname, false);

    let newList = this.state.list.concat(item);
    this.setState({list: newList});

    textbox.value = '';
  }

  deleteItem = (item) => {
    let newList = this.state.list.filter(li => li !== item);
    this.setState({list: newList});
  }

  toggleItemState = (item) => {
    let newItem = {...item, edit: !item.edit};
    this._updateItemState(item, newItem);
  }

  updateItemName = (event, item) => {
    event.preventDefault();
    let newItem = {...item, name: event.target.firstChild.value, edit: false};
    this._updateItemState(item, newItem);
  }

  updateItemDate = (event, item) => {
    let newItem = {...item, dueDate: event.target.value};
    this._updateItemState(item, newItem);
  }

  _updateItemState = (item, newItem) => {
    let newList = this.state.list.map(li => li === item ? newItem : li);
    this.setState({list: newList})
  }

  createFancyListItem = (item) => {
    return (
      <li key={item.name} style={item.dueDate === this.state.filterDate ?  {color : 'red'} : {color: 'white'}}>
        <div className='container'>
          {item.edit ?
            <InputForm defaultValue={item.name} onSubmit={(e) => this.updateItemName(e, item)}/> :
            <span onClick={() => this.toggleItemState(item)}>{item.name}</span>
          }
          <SimpleDatePicker onInput={(e) => this.updateItemDate(e, item)} day={item.dueDate}/>
          <button className='bubbly-button' onClick={() => this.deleteItem(item)}>X</button>
        </div>
      </li>
    );
  }

  handleDayHighlight = (e) => {
    this.setState({filterDate: e.target.value})
  }


  render() {
    return (
      <div className='App-header'>
        <h1>To Do List</h1>
        
        {(this.state.list.length === 0) ?
          <h3>No Todos!</h3> :
          <ul>
            {this.state.list.map(item => {
              return this.createFancyListItem(item);
            })}
          </ul>
        }
        <InputForm defaultValue={''} onSubmit={(e) => this.addToList(e)}/>
        <SimpleDatePicker onInput={(e) => this.handleDayHighlight(e)} day={this.state.filterDate}/>
      </div>
    );
  }
}

export default TodoList;