import { useFormContext, useWatch } from "react-hook-form";
import { isEmpty } from "lodash-es";

export function FormDependency(props) {
  const { children, name } = props;
  const methods = useFormContext();

  const watchedValues = useWatch({
    control: methods.control,
    name,
    defaultValue: {},
  });

  return children(isEmpty(watchedValues) ? [] : watchedValues, methods);
}
