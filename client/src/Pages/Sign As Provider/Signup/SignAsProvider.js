import React from "react";
import "./SignAsProvider.css";
// import { useTranslation } from "react-i18next";
export default function SignAsProvider() {
  // const [t, i18n] = useTranslation();
  return (
    <div className="container con">
      <h1>Register as a craft owner</h1>
      <div className="h-Line"></div>
      <div className=" form-container">
        <form className="signProviderForm">
          <div className="row">
            <div class="col">
              <label for="first-name" className="form-label">
                first name
              </label>
              <input
                type="text"
                class="form-control"
                aria-label="First name"
                required
              />
            </div>
            <div class="col">
              <label for="last-name" className="form-label">
                last name
              </label>
              <input
                type="text"
                class="form-control"
                aria-label="Last name"
                required
              />
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">
              user name
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
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          {/* رقم الهاتف */}
          <div className="mb-3">
            <label for="Phone-num" className="form-label">
              phone number
            </label>

            <input
              type="tel"
              pattern="[0-9]{01}"
              class="form-control"
              id="Phone-num"
              style={{ width: "270px" }}
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              required
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              // style={{ width: "270px" }}
              required
            />
          </div>
          {/* العنوان */}
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="123 main-st"
              required
            />
          </div>

          <div class="row">
            <div class="col">
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  city
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
                <label for="inputState" class="form-label">
                  state
                </label>
                <select
                  id="inputState"
                  class="form-select"
                  style={{ width: "200px" }}
                  required
                >
                  <option selected>choose</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  zip
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  style={{ width: "100px" }}
                  required
                />
              </div>
            </div>
          </div>
          {/* كلمة المرور */}
          <div className="mb-3">
            <label for="Password1" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password1"
              style={{ width: "270px" }}
              required
            />
          </div>
          {/* اختيار الحِرفة */}
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            style={{ width: "270px" }}
          >
            <option selected> choose your craft</option>
            <option value="1">Electricity</option>
            <option value="2">Carpentry</option>
            <option value="3">Conditioning</option>
            <option value="3">Cleaning service</option>
            <option value="3">Painting</option>
            <option value="3">Plastering</option>
            <option value="3">Plumbing</option>
            <option value="3">Home Appliances</option>
            <option value="3">Satellite&Receiver</option>
          </select>

          <button type="submit" className="btn btn-sign">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
