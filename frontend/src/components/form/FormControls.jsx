import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

function FormControls({
  formControls = [],
  formData,
  setFormData,
  register,
  control,
  errors,
}) {
  function renderComponentByType(fieldItem) {
    let element = null;

    const { onChange, ...rest } = register(
      fieldItem.name,
      fieldItem.validation
    );

    switch (fieldItem.componentType) {
      case "Input":
        element = (
          <Input
            id={fieldItem.name}
            name={fieldItem.name}
            placeholder={fieldItem.placeholder}
            type={fieldItem.type}
            value={formData[fieldItem.name] || ""}
            onChange={(e) => {
              setFormData({
                ...formData,
                [fieldItem.name]: e.target.value,
              });
              onChange(e);
            }}
            {...rest}
          />
        );
        break;

      case "Select":
        element = (
          <Controller
            name={fieldItem.name}
            control={control}
            rules={fieldItem.validation}
            render={({ field }) => (
              <Select
                value={formData[fieldItem.name] || ""}
                onValueChange={(val) => {
                  setFormData((prev) => ({
                    ...prev,
                    [fieldItem.name]: val,
                  }));
                  field.onChange(val);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={fieldItem.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {fieldItem.options && fieldItem.options.length > 0
                    ? fieldItem.options.map((optionItem) => (
                        <SelectItem
                          key={optionItem.id}
                          value={optionItem.id || optionItem.value}
                        >
                          {optionItem.label}
                        </SelectItem>
                      ))
                    : null}
                </SelectContent>
              </Select>
            )}
          />
        );
        break;

      case "Textarea":
        element = (
          <Textarea
            id={fieldItem.name}
            name={fieldItem.name}
            placeholder={fieldItem.placeholder}
            value={formData[fieldItem.name] || ""}
            onChange={(e) => {
              setFormData({
                ...formData,
                [fieldItem.name]: e.target.value,
              });
              onChange(e);
            }}
            {...rest}
          />
        );
        break;

      default:
        element = (
          <Input
            id={fieldItem.name}
            name={fieldItem.name}
            placeholder={fieldItem.placeholder}
            type={fieldItem.type}
            value={formData[fieldItem.name] || ""}
            onChange={(e) => {
              setFormData({
                ...formData,
                [fieldItem.name]: e.target.value,
              });
              onChange(e);
            }}
            {...rest}
          />
        );
        break;
    }

    return element;
  }

  return (
    <div>
      {formControls.map((field) => (
        <div className="flex flex-col space-y-2 mb-3" key={field.name}>
          <Label>{field.label}</Label>
          {renderComponentByType(field)}
          {errors[field.name] && (
            <p className="text-red-500">{errors[field.name]?.message}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FormControls;
