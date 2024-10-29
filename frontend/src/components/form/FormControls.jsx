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

    switch (fieldItem.componentType) {
      case "Input":
        element = (
          <Input
            id={fieldItem.name}
            name={fieldItem.name}
            placeholder={fieldItem.placeholder}
            type={fieldItem.type}
            onChange={(e) => {
              setFormData({
                ...formData,
                [fieldItem.name]: e.target.value,
              });
              console.log(e.target.value);
            }}
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
              <Select
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
            onChange={(e) =>
              setFormData({
                ...formData,
                [fieldItem.name]: e.target.value,
              })
            }
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
            onChange={(e) =>
              setFormData({
                ...formData,
                [fieldItem.name]: e.target.value,
              })
            }
            {...register(fieldItem.name, fieldItem.validation)}
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
