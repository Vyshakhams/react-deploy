import { useState } from "react";
import { Link } from "react-router-dom";
import jsonData from "../MOCK_DATA.json";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ModalComp from "./ModalComp";

function Jobs() {
  const [data, setData] = useState(jsonData);
  const [filterKeyworks, setFilterKeywords] = useState(null);

  var filter_data = data.filter((e) => e.is_Applied === true);
  var allData = jsonData;

  function isApplied() {
    setFilterKeywords(filter_data);
    setData(filter_data);
  }

  function clearFilter() {
    setData(allData);
  }

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{ position: "relative", left: "275px", marginTop: "25px" }}
        >
          Filter
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => isApplied()}>Is Applied</Dropdown.Item>
          <Dropdown.Item onClick={() => clearFilter()}>
            Show All Jobs
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {data.map((item) => (
        <div
          className="container"
          style={{ padding: "10px" }}
          key={item.company_name}
        >
          <div className="card">
            <Link className="card-header" to="">
              {item.job_title}
            </Link>

            <div className="card-body">
              <h6 className="card-title"> {item.company_name}</h6>
              <h6 className="card-title">salary: {item.salary} lks</h6>
              <p className="card-text">{item.description}</p>
            </div>

            <ModalComp item={item} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jobs;
