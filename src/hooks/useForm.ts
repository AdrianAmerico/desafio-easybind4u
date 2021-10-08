import { useState } from "react";

const useForm = (initialState: any) => {
  const [body, setBody] = useState(initialState);

  const onChange = (event: { target: { name?: any; value?: any } }) => {
    const { name } = event.target;
    let { value } = event.target;

    // if (name === "cpf") {
    //   value = value.replace(/\D/g, "");

    //   value = value.replace(/(\d{3})(\d)/, "$1.$2");

    //   value = value.replace(/(\d{3})(\d)/, "$1.$2");

    //   value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    // }
    if (name === "cnpj") {
      value = value.replace(/^(\d{2})(\d)/, "$1.$2");

      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

      value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");

      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }
    setBody({ ...body, [name]: value });
  };

  const clear = () => {
    setBody(initialState);
  };
  return { body, onChange, clear };
};

export default useForm;
