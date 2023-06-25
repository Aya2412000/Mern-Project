import React, { useState } from "react";
import "./SignUpClient.css";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function SignUpClient() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Kind, setKind] = useState("");
  const [Service, setService] = useState("");
  const handelKind = () => {
    const craftSelect = document.getElementById("craft");
    craftSelect.style.display = "flex";
  };
  const RegisterNow = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/register", {
      username,
      password,
      firstName,
      lastName,
      email,
      address,
      zip,
      phoneNumber,
      Kind,
      Service,
    });
    alert("Admin created");
  };
  const { t } = useTranslation();

  return (
    <div className="container con">
      <h1>{t("Welcome to Herfa, register now")}</h1>
      <div className="h-Line"></div>
      <div className=" form-container">
        <form className="signProviderForm" onSubmit={RegisterNow}>
          <div className="row">
            <div class="col">
              <label htmlfor="first-name" className="form-label">
                {t("first name")}
              </label>
              <input
                type="text"
                class="form-control"
                aria-label="First name"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div class="col">
              <label htmlfor="last-name" className="form-label">
                {t("last name")}
              </label>
              <input
                type="text"
                class="form-control"
                aria-label="Last name"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div class="col-md-4">
            <label htmlfor="validationCustomUsername" class="form-label">
              {t("user name")}
            </label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          {/* رقم الهاتف */}
          <div className="mb-3">
            <label htmlfor="Phone-num" className="form-label">
              {t("phone number")}
            </label>

            <input
              type="tel"
              // pattern="[0-9]{01}"
              class="form-control"
              id="Phone-num"
              style={{ width: "270px" }}
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlfor="email" className="form-label">
              {t("email")}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              // style={{ width: "270px" }}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* العنوان */}
          <div class="col-12">
            <label htmlfor="inputAddress" class="form-label">
              {t("address")}
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder={t("placeholder")}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div class="row">
            <div class="col">
              <div class="col-md-6">
                <label htmlfor="inputCity" class="form-label">
                  {t("city")}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  required
                  style={{ width: "270px" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="col-md-4">
                <label htmlfor="inputState" class="form-label">
                  {t("state")}
                </label>
                <select
                  id="inputState"
                  class="form-select"
                  style={{ width: "200px" }}
                >
                  <option selected>{t("choose")}</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="col-md-2">
                <label htmlfor="inputZip" class="form-label">
                  {t("zip")}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  style={{ width: "100px" }}
                  required
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* كلمة المرور */}
          <div className="mb-3">
            <label htmlfor="Password1" className="form-label">
              {t("password")}
            </label>
            <input
              type="password"
              className="form-control"
              id="Password1"
              style={{ width: "270px" }}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="Kind">
            <input
              type="radio"
              class="btn-check"
              name="Client"
              id="option1"
              autocomplete="off"
              onChange={(e) => setKind(e.target.name)}
              onClick={(e) => console.log(e.target.name)}
            />
            <label class="btn btn-secondary" for="option1">
              Client
            </label>

            <input
              type="radio"
              class="btn-check"
              name="Craftman"
              id="option2"
              autocomplete="off"
              onClick={handelKind}
              onChange={(e) => setKind(e.target.name)}
              
            />
            <label class="btn btn-secondary" for="option2">
              Crafman
            </label>
          </div>
          <br />
          <select
            id="craft"
            className="form-select mb-3"
            aria-label="Default select example"
            style={{ width: "270px" }}
            onChange={(e) => setService(e.target.value)}
          >
            <option selected> choose your craft</option>
            <option value="Electricity">Electricity</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Conditioning">Conditioning</option>
            <option value="Cleaning service">Cleaning service</option>
            <option value="Painting">Painting</option>
            <option value="Plastering">Plastering</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Satellite&Receiver">Satellite&Receiver</option>
          </select>
          <br />
          <button type="submit" className="btn btn-sign">
            {t("register")}
          </button>
        </form>
      </div>
    </div>
  );
}
