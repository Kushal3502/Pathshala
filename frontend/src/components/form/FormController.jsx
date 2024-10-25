import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function FormController({ formControlData = [], formData, setFormData }) {
  function renderComponent(controlItem) {
    let element = null;

    switch (controlItem.componentType) {
      case "textarea":
        element = (
          <Textarea
            id={controlItem.name}
            placeholder={controlItem.placeholder}
            name={controlItem.name}
          />
        );
        break;

      default:
        element = (
          <Input
            id={controlItem.name}
            type={controlItem.type}
            placeholder={controlItem.placeholder}
                name={controlItem.name}
                className=" border border-zinc-700"
          />
        );
        break;
    }

    return element;
  }

  return (
    <div className="space-y-2">
      {formControlData.map((controlItem) => (
        <div key={controlItem.name} className="space-y-1">
          <Label htmlFor={controlItem.name}>
            {controlItem.label}
          </Label>
          {renderComponent(controlItem)}
        </div>
      ))}
    </div>
  );
}

export default FormController;
