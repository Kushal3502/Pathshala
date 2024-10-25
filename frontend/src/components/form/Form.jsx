import React from "react";
import FormController from "./FormController";
import { Button } from "../ui/button";

function Form({ formControl, buttonText = "Submit" }) {
  return (
    <form>
      <FormController formControlData={formControl} />
      <Button type="submit" className="mt-5 w-full">
        {buttonText}
      </Button>
    </form>
  );
}

export default Form;
