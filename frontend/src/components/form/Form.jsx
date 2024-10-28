import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function Form({ formData = [], onSubmit, buttonText }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  function renderComponentByType(fieldItem) {
    let element = null;

    switch (fieldItem.componentType) {
      case "Input":
        element = (
          <Input
            id={fieldItem.name}
            name={fieldItem.name}
            placeholder={fieldItem.placeholder}
            type={fieldItem.inputType || "text"}
            {...register(fieldItem.name, fieldItem.validation)}
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
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={fieldItem.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {fieldItem.options && fieldItem.options.length > 0
                    ? fieldItem.options.map((optionItem) => (
                        <SelectItem
                          key={optionItem.id}
                          value={optionItem.value}
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
            {...register(fieldItem.name, fieldItem.validation)}
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
            {...register(fieldItem.name, fieldItem.validation)}
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formData.map((field) => (
        <div className="flex flex-col space-y-2 mb-3" key={field.name}>
          <Label>{field.label}</Label>
          {renderComponentByType(field)}
          {errors[field.name] && (
            <p className="text-red-500">{errors[field.name]?.message}</p>
          )}
        </div>
      ))}
      <Button className="w-full mt-2 text-base">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default Form;
