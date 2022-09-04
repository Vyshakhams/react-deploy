import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function ModalComp(props) {
  let item = props.item;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Application Status
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {item.company_name}</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ display: "block", fontSize: "20px", gap: "20px" }}>
          Is Applied :{" "}
          {item.is_Applied ? (
            <span>
              {" "}
              <i className="bi bi-check-square-fill"></i>
            </span>
          ) : (
            <span>
              {" "}
              <i class="bi bi-hourglass-split"></i>
            </span>
          )}
          <br />
          In Progress :{" "}
          {item.in_progress ? (
            <span>
              {" "}
              <i className="bi bi-check-square-fill"></i>
            </span>
          ) : (
            <span>
              {" "}
              <i class="bi bi-hourglass-split"></i>
            </span>
          )}
          <br />
          Is Selected :{" "}
          {item.is_selected ? (
            <span>
              {" "}
              <i className="bi bi-check-square-fill"></i>
            </span>
          ) : (
            <span>
              {" "}
              <i class="bi bi-hourglass-split"></i>
            </span>
          )}
          <br />
          Orientation Sessions:{" "}
          {item.Orientation_sessions ? (
            <span>
              {" "}
              <i className="bi bi-check-square-fill"></i>
            </span>
          ) : (
            <span>
              {" "}
              <i class="bi bi-hourglass-split"></i>
            </span>
          )}
          <br />
          Mock Interviews :{" "}
          {item.mock_interviews ? (
            <span>
              {" "}
              <i className="bi bi-check-square-fill"></i>
            </span>
          ) : (
            <span>
              {" "}
              <i class="bi bi-hourglass-split"></i>
            </span>
          )}
          <br />
          First round :{" "}
          {item.interview_1 ? (
            <span>
              {" "}
              <i className="bi bi-check-square-fill"></i>
            </span>
          ) : (
            <span>
              {" "}
              <i class="bi bi-hourglass-split"></i>
            </span>
          )}
          <br />
          Secound round :{" "}
          {item.interview_2 ? (
            <span>
              {" "}
              <i className="bi bi-check-square-fill"></i>
            </span>
          ) : (
            <span>
              {" "}
              <i class="bi bi-hourglass-split"></i>
            </span>
          )}
          <br />
          Third round :{" "}
          {item.interview_3 ? (
            <span>
              {" "}
              <i className="bi bi-check-square-fill"></i>
            </span>
          ) : (
            <span>
              {" "}
              <i class="bi bi-hourglass-split"></i>
            </span>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComp;

//   map.entries(),
//   ([key, value]) => (
//     <div>{value[0]}</div>
//   ),
//   item.value[1] === true && (
//     <span>
//       {" "}
//       <i className="bi bi-check-square-fill"></i>
//     </span>
//   )
// )}{" "}

// {fontFamilyTest.map((font) => (
//   <div>
//     {item[font.name]}
//     {item["url"] === true && (
//       <span>
//         {" "}
//         <i className="bi bi-check-square-fill"></i>
//       </span>
//     )}{" "}
//   </div>
// ))}
