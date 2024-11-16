import { FormInput } from "@/app/Types/FormInput";

export const registerInputProperties: FormInput[] = [
  {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "First and last name",
    icon: "person",
  },
  {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Email",
    icon: "mail",
  },
  {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "Password",
    icon: "lock",
  },
  {
    type: "tel",
    id: "phone",
    name: "phone",
    placeholder: "Phone",
    icon: "phone",
  },
];
