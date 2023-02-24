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
    <div className="total">
      <div className="price-outline">
      <div className="price-inline">
        <h5 className="head text-light">FREE</h5>
        <h6 className="head dollor">
          $0<span className="month">/month</span>
        </h6>
        <hr />
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Single User
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          5GB Storage
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Unlimited Public Projects
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Community Access
        </p>
        <p className="text-light">
          <IconButton>
            <ClearIcon />
          </IconButton>
          Unlimited Private Projects
        </p>
        <p className="text-light">
          <IconButton>
            <ClearIcon />
          </IconButton>
          Dedicated Phone Support
        </p>
        <p className="text-light">
          <IconButton>
            <ClearIcon />
          </IconButton>
          Free Subdomain
        </p>
        <p className="text-light">
          <IconButton>
            <ClearIcon />
          </IconButton>
          Monthly Status Reports
        </p>
        <div className="head">
          <Button variant="contained" className="button">
            <a className="link" href="#">
              Button
            </a>
          </Button>
        </div>
      </div>
      

      <div className="price-inline">
        <h5 className="head text-light">PLUS</h5>
        <h6 className="head dollor">
          $9<span className="month">/month</span>
        </h6>
        <hr />
        <p className="inline">
          <IconButton>
            <CheckIcon />
          </IconButton>
          5 User
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          50GB Storage
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Unlimited Public Projects
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Community Access
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Unlimited Private Projects
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Dedicated Phone Support
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Free Subdomain
        </p>
        <p className="text-light">
          <IconButton>
            <ClearIcon />
          </IconButton>
          Monthly Status Reports
        </p>
        <div className="head">
          <Button variant="contained" className="button">
            <a className="link" href="#">
              Button
            </a>
          </Button>
        </div>
      </div>
      <div className="price-inline">
        <h5 className="head text-light">PRO</h5>
        <h6 className="head dollor">
          $49<span className="month">/month</span>
        </h6>
        <hr />
        <p className="inline">
          <IconButton>
            <CheckIcon />
          </IconButton>
          Unlimited User
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          150GB Storage
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Unlimited Public Projects
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Community Access
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Unlimited Private Projects
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Dedicated Phone Support
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          <span className="inline">Unlimited</span> Free Subdomain
        </p>
        <p>
          <IconButton>
            <CheckIcon />
          </IconButton>
          Monthly Status Reports
        </p>
        <div className="head">
          <Button variant="contained" className="button">
            <a className="link" href="#">
              Button
            </a>
          </Button>
        </div>
      </div>     
    </div>
    </div>
  );
}
