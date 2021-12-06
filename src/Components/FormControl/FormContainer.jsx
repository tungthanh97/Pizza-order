import { useForm, FormProvider } from "react-hook-form";
import { isFunction } from "../../Utils";

export function FormContainer(props) {
  const { defaultValues, children } = props;
  const methods = useForm({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues,
    criteriaMode: "firstError",
    shouldUnregister: false,
  });

  return (
    <FormProvider {...methods}>
      {isFunction(children) ? children(methods) : children}
    </FormProvider>
  );
}
