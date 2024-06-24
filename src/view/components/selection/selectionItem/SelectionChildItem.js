import { Select, Option } from "@material-tailwind/react";

const SelectionChildItem = ({ label, data, onChange }) => {
  console.log("DATA");
  console.log(data);

  return (
    <Select variant="standard" label={label}>
      {data.map((child) => (
        <Option key={child.id} onClick={() => onChange(child.id)}>
          {child.lastName} {child.firstName} {child.middleName}
        </Option>
      ))}
    </Select>
  );
};

export default SelectionChildItem;
