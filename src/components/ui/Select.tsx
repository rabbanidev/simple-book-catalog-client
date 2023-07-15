import React, { ChangeEvent } from "react";

interface SelectProps {
  name: string;
  value: string | number;
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ name, value, options, onChange }) => {
  return (
    <select
      id={name}
      defaultValue={"DEFAULT"}
      //   value={value}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
      onChange={onChange}
    >
      <option value="DEFAULT" disabled>
        Choose a country
      </option>
      {options.map((option) => (
        <option key={option} value={option} className="capitalize">
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
