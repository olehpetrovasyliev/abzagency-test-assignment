import React from "react";
import { AddUserForm } from "./AddUserForm";

export const AddUserSection = () => {
  return (
    <section className="addUser">
      <div className="addUser__container">
        <h1 className="title addUser__title">Working with POST request</h1>
        <AddUserForm />
      </div>
    </section>
  );
};
