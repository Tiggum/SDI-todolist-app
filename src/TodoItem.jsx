const TodoItem = (itemName, editMode, date=0) => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  return ({
    name: itemName,
    edit: editMode,
    dueDate: days[date]
  });
}


// class TodoItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: props.name,
//       completed: false,
//     };
//   }

//   changeCompleted = () => {
//     this.setState({completed: !this.completed})
//   }

//   render() {
//     return (
//       <li 
//         key={this.state.name}
//         style={this.state.completed ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {textDecorationLine: 'none'}}>
//         {this.state.name}
//       </li>
//     );
//   }
// }


export default TodoItem;