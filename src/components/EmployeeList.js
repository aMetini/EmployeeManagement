import {Modal, Button, Alert } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import AddForm from "./AddForm";
import Employee from "./Employee";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);

  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  // when clicked the handle will show modal by switching (state) setShow from false to true
  const handleShow = () => setShow(true);
  // when clicked the handle will hide modal by switching setShow from true to false
  const handleClose = () => setShow(false);
  const handleShowAlert = () => setShowAlert(true);

  // This hook will automatically close our modal.  Add employees reference to fire when employees
  // changes.
  useEffect(() => {
    handleClose();

    return() => {
        handleShowAlert();
    }
  }, [employees])

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              //href="#addEmployeeModal"
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
            Employee List Updated Successfully
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.sort((a,b)=>(a.name < b.name ? -1 : 1)).map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>

{/* We add the variable show set to our show(state) */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
