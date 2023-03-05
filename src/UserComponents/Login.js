import React, { useState, useContext } from "react";
// import UsersContext from "../store/users-context";
const RegistrationForm = () => {
  // const usersCtx = useContext(UsersContext);

  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
  });

  let initVal = false;

  const addFormHandler = (event) => {
    initVal = false;

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    initVal = true;
    console.log(initVal);
    // usersCtx.onAddUser({
    //   id: Math.random(),
    //   name: addFormData.name,
    //   email: addFormData.email,
    //   city: addFormData.city,
    //   street: addFormData.street,
    //   houseNumber: addFormData.houseNumber,
    //   zipCode: addFormData.zipCode,
    // });
  };

  return (
    <div>sdwdasdwdw</div>
  );
};

export default RegistrationForm;