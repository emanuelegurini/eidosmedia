export const createForm = (list, handleChange) =>
  Object.entries(list).map(([, value]) => (
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
  ));
