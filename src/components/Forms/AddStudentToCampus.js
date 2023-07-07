import React, { useState } from "react";
import "./AddStudentToCampus.css";
function AddStudentToCampus(){
    const [selectedOption, setSelectedOption] = useState('');
    const [options, setOptions] = useState([]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
      const handleAddButtonClick = () => {
        if (selectedOption !== '' && !options.includes(selectedOption)) {
          setOptions([...options, selectedOption]);
          setSelectedOption('');
        }
      };
    return(
        <div>
            <h1>Students on Campus</h1>
            <div id="studentsList">
                <select value={selectedOption} onChange={handleSelectChange} id="selection">
                    <option value="">Select a student to add</option>
                    <option value="student1">student1</option>
                    <option value="student2">student2</option>
                    <option value="student3">student3</option>
                </select>
                <button id="addStudentToCampusButton" onClick={handleAddButtonClick}>Add To Campus</button>
                <ul>
                    {options.map((option,index) => {
                        <li key={index}>{option}</li>
                    })}
                </ul>
            </div>
            <p id="noStudents">There are no students currenlty registered to this campus.</p>
        </div>
    )
}

export default AddStudentToCampus