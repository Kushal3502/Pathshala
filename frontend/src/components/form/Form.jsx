import React from "react";
import { FormControls } from "..";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

function Form({
  onSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
        register={register}
        control={control}
        errors={errors}
      />
      <Button
        disabled={isButtonDisabled}
        type="submit"
        className="w-full mt-2 text-base"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default Form;
