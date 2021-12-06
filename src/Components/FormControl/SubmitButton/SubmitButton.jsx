import { useFormContext } from "react-hook-form";

export const SubmitButton = (props) => {
  const { onSubmit, children, ...remainProps } = props;
  const { handleSubmit } = useFormContext();

  return (
    <button onClick={handleSubmit(onSubmit)} {...remainProps}>
      {children}
    </button>
  );
};
