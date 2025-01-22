import React, { useState } from "react";

import { GoPlus } from "react-icons/go";
const Table = () => {
  const [rows, setRows] = useState([{ label1: "", label2: [] }]);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleLabel1Change = (value, index) => {
    const updatedRows = [...rows];
    updatedRows[index].label1 = value;
    setRows(updatedRows);
  };

  const handleLabel2Change = (value, index) => {
    const updatedRows = [...rows];
    if (updatedRows[index].label2.includes(value)) {
      updatedRows[index].label2 = updatedRows[index].label2.filter(
        (opt) => opt !== value
      );
    } else {
      updatedRows[index].label2.push(value);
    }
    setRows(updatedRows);
  };

  const addNewRow = () => {
    setRows([...rows, { label1: "", label2: [] }]);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Frontend Assignment
      </h2>
      <div className="overflow-x-auto bg-white  shadow-md rounded-lg p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Label 1
              </th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Label 2
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4">
                  <select
                    className="block w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    value={row.label1}
                    onChange={(e) => handleLabel1Change(e.target.value, index)}
                  >
                    <option value="" disabled>
                      Select Option
                    </option>
                    {options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-3 px-4">
                  {options.map((option, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`row-${index}-option-${idx}`}
                        checked={row.label2.includes(option)}
                        onChange={() => handleLabel2Change(option, index)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor={`row-${index}-option-${idx}`}
                        className="text-gray-700"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                  <div className="mt-2 flex gap-4">
                    <input
                      type="text"
                      className=" p-2 border border-gray-800 rounded  focus:ring-blue-500 text-blue-600"
                      placeholder="Add new item"
                    />
                    <button className="px-6 py-1 flex items-center gap-1 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500">
                      <GoPlus />
                      Add
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addNewRow}
          className="mt-4 px-6 py-1 flex items-center gap-1  bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
        >
          <GoPlus />
          Add New Row
        </button>
      </div>
    </div>
  );
};

export default Table;
