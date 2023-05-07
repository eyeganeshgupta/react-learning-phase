import { useState } from "react";
import "./Info.css";

export default function Info() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <form className="Info">
      <div>
        <label htmlFor="firstName">First name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(synEventObj) => {
            setFirstName(synEventObj.target.value);
          }}
          id="firstName"
        />
      </div>

      <div>
        <label htmlFor="lastName">Last name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(synEventObj) => {
            setLastName(synEventObj.target.value);
          }}
          id="lastName"
        />
      </div>

      {(firstName.length > 0 || lastName.length > 0) && (
        <p>
          Hello {firstName} {lastName}
        </p>
      )}
    </form>
  );
}
