import FormExample from "./FormExample";

const schema = [
  {
    type: "text",
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
    value: "John Doe",
  },
  {
    type: "textarea",
    label: "Description",
    name: "description",
    placeholder: "Enter a description",
    rows: 5,
    // value: "This is a prepopulated description.",
  },
  {
    type: "select",
    label: "Choose an option",
    name: "option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
    value: "option2",
  },
  {
    type: "checkbox",
    label: "I agree to the terms and conditions",
    name: "terms",
    value: true,
  },
  {
    type: "radio",
    label: "Select your gender",
    name: "gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    value: "male",
  },
];

export default async function Page() {
  return (
    <div className="w-max mx-auto p-4">
      <h1 className="mb-[100px] text-4xl text-red-600">Dynamic Form Builder</h1>
      <FormExample schema={schema} />
    </div>
  );
}
