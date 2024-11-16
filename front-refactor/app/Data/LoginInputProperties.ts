import { FormInput } from "@/app/Types/FormInput";

export const loginInputProperties: FormInput[] = [
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
];
