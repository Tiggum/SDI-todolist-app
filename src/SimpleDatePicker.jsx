const SimpleDatePicker = ({onInput, day}) => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  return (
    <form onInput={onInput} style={{display: "inline"}}>
      <select defaultValue={day}>
        <option value={days[0]}>{days[0]}</option>
        <option value={days[1]}>{days[1]}</option>
        <option value={days[2]}>{days[2]}</option>
        <option value={days[3]}>{days[3]}</option>
        <option value={days[4]}>{days[4]}</option>
        <option value={days[5]}>{days[5]}</option>
        <option value={days[6]}>{days[6]}</option>
      </select>
    </form>
  );
}

export default SimpleDatePicker;