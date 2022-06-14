import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinForm() {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: ""
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let token;

    if (inputValues.token == 'shiv-meet') {
      token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjJhN2I2ZDZiODczNzg3YWEyNzBhYjI4Iiwicm9vbV9pZCI6IjYyYTg0MDVjMjYzMDIyMWM3NWE0NTY3ZSIsInVzZXJfaWQiOiJlZWRlYmdzdyIsInJvbGUiOiJ1c2VyIiwianRpIjoiMWJhNzA3MTUtMGNkMy00ZTlhLWJiODctZGQyY2FhY2JhMTc3IiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImV4cCI6MTY1NTI4NDIyNn0.ug_sS6qj7JEMslLWNu_lS1wzCNGO0zz_OpTv-I2t6bw`;
    }
    hmsActions.join({
      userName: inputValues.name,
      authToken: token
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Room</h2>
      <div className="input-container">
        <input
          required
          value={inputValues.name}
          onChange={handleInputChange}
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
        />
      </div>
      <div className="input-container">
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          type="text"
          name="token"
          placeholder="Meeting passcode"
        />
      </div>
      <button className="btn-primary">Join Meeting</button>
    </form>
  );
}

export default JoinForm;
