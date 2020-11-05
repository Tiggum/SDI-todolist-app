const InputForm = ({defaultValue, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} style={{display:'inline'}}>
      <input type="text" defaultValue={defaultValue}/>
    </form>
  );
}

export default InputForm;