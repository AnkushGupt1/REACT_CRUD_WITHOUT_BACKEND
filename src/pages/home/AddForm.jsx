import { useState, useEffect } from "react";
import "./AddForm.css"; // Import your CSS file for styling
import PropTypes from "prop-types"; // Import PropTypes for validation

const AddForm = ({ isOpen, onClose, onAdd, onUpdate, selectedStudent }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        name: selectedStudent.name,
        address: selectedStudent.address,
      });
    } else {
      setFormData({
        name: "",
        address: "",
      });
    }
  }, [selectedStudent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStudent) {
      onUpdate(formData); // Call onUpdate function for updating existing student
    } else {
      onAdd(formData); // Call onAdd function for adding new student
    }
    onClose(); // Close the form after submission
  };

  if (!isOpen) {
    return null; // If isOpen is false, do not render anything
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="form-popup" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              autoFocus={true}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="label">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              {selectedStudent ? "Update Student" : "Add Student"}
            </button>
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  selectedStudent: PropTypes.object, // PropTypes for selectedStudent (null when adding)
};

export default AddForm;
