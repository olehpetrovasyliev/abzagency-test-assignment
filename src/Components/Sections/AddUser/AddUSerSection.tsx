import React from "react";
import AddUserform from "./AddUserForm";

export const AddUserSection = () => {
  return (
    <section className="addUser">
      <div className="addUser__container">
        <h1 className="addUser__title">Working with POST request</h1>
        <AddUserform />
      </div>
    </section>
  );
};
