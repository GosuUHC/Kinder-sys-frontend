import { Select, Option } from "@material-tailwind/react";

const SelectionGroupItem = ({ label, data, onChange }) => {
  return (
    <Select variant="standard" label={label}>
      {data.map((group) => (
        <Option key={group.id} onClick={() => onChange(group.id)}>
          {group.id}
        </Option>
      ))}
    </Select>
  );
};

export default SelectionGroupItem;
