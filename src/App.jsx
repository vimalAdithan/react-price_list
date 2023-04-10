// import { useState } from "react";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <div className="outer">
      <Frame />
    </div>
  );
}
function Frame() {
  return (
      <div className="price-outline">
        <div className="price-inline">
          <h5 className="head text-light">FREE</h5>
          <h6 className="head dollor">
            $0<span className="month">/month</span>
          </h6>
          <hr />
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Single User
          </p>

          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            5GB Storage
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Unlimited Public Projects
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Community Access
          </p>
          <p className="text-light">
            <ClearIcon
              style={{ verticalAlign: " text-bottom", opacity: "0.7" }}
            />
            Unlimited Private Projects
          </p>
          <p className="text-light">
            <ClearIcon
              style={{ verticalAlign: " text-bottom", opacity: "0.7" }}
            />
            Dedicated Phone Support
          </p>
          <p className="text-light">
            <ClearIcon
              style={{ verticalAlign: " text-bottom", opacity: "0.7" }}
            />
            Free Subdomain
          </p>
          <p className="text-light">
            <ClearIcon
              style={{ verticalAlign: " text-bottom", opacity: "0.7" }}
            />
            Monthly Status Reports
          </p>
         
            <a className="button" href="#">
              Button
            </a>
        </div>

        <div className="price-inline">
          <h5 className="head text-light">PLUS</h5>
          <h6 className="head dollor">
            $9<span className="month">/month</span>
          </h6>
          <hr />
          <p className="inline">
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />5 User
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            50GB Storage
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Unlimited Public Projects
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Community Access
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Unlimited Private Projects
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Dedicated Phone Support
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Free Subdomain
          </p>
          <p className="text-light">
            <ClearIcon
              style={{ verticalAlign: " text-bottom", opacity: "0.7" }}
            />
            Monthly Status Reports
          </p>
          <a className="button" href="#">
              Button
            </a>
        </div>
        <div className="price-inline">
          <h5 className="head text-light">PRO</h5>
          <h6 className="head dollor">
            $49<span className="month">/month</span>
          </h6>
          <hr />
          <p className="inline">
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Unlimited User
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            150GB Storage
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Unlimited Public Projects
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Community Access
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Unlimited Private Projects
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Dedicated Phone Support
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            <span className="inline">Unlimited</span> Free Subdomain
          </p>
          <p>
            <CheckIcon style={{ verticalAlign: " text-bottom" }} />
            Monthly Status Reports
          </p>
          <a className="button" href="#">
              Button
            </a>
        </div>
      </div>
  );
}
