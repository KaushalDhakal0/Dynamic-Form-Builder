import React from "react";
import {
  InputField,
  TextAreaField,
  SelectField,
  CheckboxField,
  RadioField,
} from "./Components";

const FormExample = ({ schema }) => {
  const renderField = (field) => {
    const { type, label, name, placeholder, options, rows, value } = field;

    switch (type) {
      case "text":
        return (
          <InputField
            key={name}
            label={label}
            name={name}
            placeholder={placeholder}
            defaultValue={value}
          />
        );
      case "textarea":
        return (
          <TextAreaField
            key={name}
            label={label}
            name={name}
            placeholder={placeholder}
            rows={rows || 4}
            defaultValue={value}
          />
        );
      case "select":
        return (
          <SelectField
            key={name}
            label={label}
            name={name}
            options={options || []}
            defaultValue={value}
          />
        );
      case "checkbox":
        return (
          <CheckboxField
            key={name}
            label={label}
            name={name}
            defaultChecked={value}
          />
        );
      case "radio":
        return (
          <RadioField
            key={name}
            label={label}
            name={name}
            options={options || []}
            defaultValue={value}
          />
        );
      default:
        return null;
    }
  };

  return <form>{schema.map((field) => renderField(field))}</form>;
};

export default FormExample;
