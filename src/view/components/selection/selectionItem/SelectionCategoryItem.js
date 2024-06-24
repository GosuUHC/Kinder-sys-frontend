import { Select, Option } from "@material-tailwind/react";

const SelectionCategoryItem = ({ label, data, onChange }) => {
  return (
    <Select variant="standard" label={label}>
      {data.map((category) => (
        <Option key={category.id} onClick={() => onChange(category.id)}>
          {category.id} {category.name}
        </Option>
      ))}
    </Select>
  );
};

export default SelectionCategoryItem;
