import { FormEventHandler, MouseEventHandler, useState } from "react";

const SignupForm = ({ }: {}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');

  const handleClearForm: MouseEventHandler = () => {
    setName("");
    setAge("");
    setAddress("");
    setZipCode("");
    setPhone("");
  }

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="">
          Name
          <input type="text" value={name}
            onChange={(event) => setName(event?.target.value)} />
        </label>
        <label htmlFor="">
          Age
          <input type="text" value={age}
            onChange={(event) => setAge(event?.target.value)} />
        </label>
        <label htmlFor="">
          Address
          <input type="text" value={address}
            onChange={(event) => setAddress(event?.target.value)} />
        </label>
        <label htmlFor="">
          Zip Code
          <input type="text" value={zipCode}
            onChange={(event) => setZipCode(event?.target.value)} />
        </label>
        <label htmlFor="">
          Phone
          <input type="text" value={phone}
            onChange={(event) => setPhone(event?.target.value)} />
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