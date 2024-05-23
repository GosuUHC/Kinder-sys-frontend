import { Select, Option } from "@material-tailwind/react";

const SelectionYearItem = ({ label, data, onChange }) => {
  return (
    <Select variant="standard" label={label}>
      {data.map((year) => (
        <Option key={year} onClick={() => onChange(year)}>
          {year}
        </Option>
      ))}
    </Select>
  );
};

export default SelectionYearItem;
