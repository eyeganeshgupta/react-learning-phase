import { useState } from "react";

export default function Greet() {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  return (
    <section>
      <div>
        <label htmlFor="firstName">First name: </label>
        <input
          type="text"
          id="firstName"
          value={fullName.firstName}
          onChange={(synBaseEvent) => {
            setFullName({ ...fullName, firstName: synBaseEvent.target.value });
          }}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last name: </label>
        <input
          type="text"
          id="lastName"
          value={fullName.lastName}
          onChange={(synBaseEvent) => {
            setFullName({ ...fullName, lastName: synBaseEvent.target.value });
          }}
        />
      </div>

      {(fullName.firstName.length > 0 || fullName.lastName.length > 0) && (
        <p>
          Hello {fullName.firstName} {fullName.lastName}
        </p>
      )}
    </section>
  );
}
