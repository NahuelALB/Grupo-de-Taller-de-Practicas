import React from 'react';

function FormApplicant() {
  return (
    <>
      <h1>Complete the application form to apply</h1>
      <form
        className="formApplicant"
        action="http://localhost:3030/applicants"
        method="POST"
      >
        <label htmlFor="name">
          Name:
          <br />
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <br />
          <input type="text" name="lastName" id="lastName" />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <br />
          <input type="text" name="lastName" id="lastName" />
        </label>
        <label htmlFor="email">
          Email:
          <br />
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password:
          <br />
          <input type="password" name="password" id="password" />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <br />
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </label>
        <label htmlFor="phone">
          Phone:
          <br />
          Area Code:
          <input type="text" name="areaCode" id="areaCode" />
          Number:
          <input type="text" name="phone" id="phone" />
        </label>
        <label htmlFor="linkedIn">
          URL of LinkedIn:
          <br />
          <input type="url" name="linkedIn" id="linkedIn" />
        </label>
        <label htmlFor="genre">
          Genre:
          <br />
          <select name="genre" id="genre">
            <option value="Masculino">Masculino</option>
            <option value="Masculino">Masculino</option>
            <option value="Masculino">Masculino</option>
          </select>
        </label>
        <label htmlFor="image">
          Image:
          <br />
          <input type="file" name="image" id="image" />
        </label>
        <label htmlFor="profession">
          Profession:
          <br />
          <select name="professionId" id="professionId"></select>
        </label>
      </form>
    </>
  );
}
export default FormApplicant;
