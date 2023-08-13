import { FormEventHandler, MouseEventHandler, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const SignupForm = ({ }: {}) => {
  const { register, handleSubmit, reset, formState } = useForm();

  const handleClearForm: MouseEventHandler = () => {
    reset();
  }

  // const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(event);
  // }
  const handleFormSubmit: SubmitHandler<FieldValues> = (data: any) => {
    console.log(data);
  }
  console.log(formState.errors);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label htmlFor="">
          Name
          <input type="text"
            {...register("name", { required: true })}
          />
        </label>
        <label htmlFor="">
          Age
          <input type="text"
            {...register("age", { required: true })}
          />
        </label>
        <label htmlFor="">
          Address
          <input type="text"
            {...register("address", { required: true })}
          />
        </label>
        <label htmlFor="">
          Zip Code
          <input type="text"
            {...register("zipCode", { required: true })}
          />
        </label>
        <label htmlFor="">
          Phone
          <input type="text"
            {...register("phone", { required: true })}
          />
        </label>
      </div>
      <div>
        <button type="button" onClick={handleClearForm}>Clear</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
export default SignupForm;