import { useState, useEffect } from 'react';
import AddForm from './AddForm'; // Adjust the import path based on your project structure
import './home.css'; // Import your CSS file

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('studentData');
    return storedData ? JSON.parse(storedData) : [];
  }); // State to manage student data
  const [selectedStudent, setSelectedStudent] = useState(null); // State to store selected student for update

  useEffect(() => {
    localStorage.setItem('studentData', JSON.stringify(data));
  }, [data]);

  const openFormForAdd = () => {
    setSelectedStudent(null); // Reset selected student
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedStudent(null); // Reset selected student after closing form
  };

  const handleUpdateOpen = (formData) => {
    setSelectedStudent(formData);
    setIsFormOpen(true);
  };

  const handleUpdate = (formData) => {
    const updatedData = data.map((student) =>
      student.name === selectedStudent.name ? formData : student
    );
    setData(updatedData);
    closeForm(); // Close the form after updating
    setSelectedStudent(null); // Reset selected student after update
  };

  const handleDelete = (name) => {
    const shouldDelete = window.confirm(`Are you sure you want to delete ${name}?`);
    if (shouldDelete) {
      const updatedData = data.filter((student) => student.name !== name);
      setData(updatedData);
      setSelectedStudent(null); // Reset selected student if deleted
    }
  };

  const handleAddStudent = (formData) => {
    setData([...data, formData]);
    closeForm(); // Close the form after adding student
  };

  return (
    <div className="main-content1">
      <h1 className="h1">Welcome to the Home Page!</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>
                <button className="buttonclass" onClick={() => handleUpdateOpen(item)}>
                  Update
                </button>
              </td>
              <td>
                <button className="buttonclass" onClick={() => handleDelete(item.name)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="buttonclass" onClick={openFormForAdd}>
        ADD STUDENT
      </button>

      {isFormOpen && (
        <AddForm
          isOpen={isFormOpen}
          onClose={closeForm}
          onAdd={handleAddStudent}
          onUpdate={handleUpdate}
          selectedStudent={selectedStudent}
        />
      )}
    </div>
  );
};

export default Home;
