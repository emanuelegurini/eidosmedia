export const createForm = (list, handleChange, handleClick) =>
  Object.entries(list).map(([, value]) => (
    <div className="flex">
      <input
        key={value.id}
        type={value.type}
        name={value.name}
        placeholder={value.placeholder}
        value={value.value}
        id={value.id}
        className={value.classNames}
        onChange={handleChange}
      />
      
      <button id={value.id} onClick={handleClick}>Delete</button>
  </div>
  ));
