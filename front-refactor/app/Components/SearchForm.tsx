"use client"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";

interface Property {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  icon: string;
}

const properties: Property[] = [
  {
    type: "text",
    id: "departure",
    name: "departure",
    placeholder: "From where?",
    icon: "north_east",
  },
  {
    type: "text",
    id: "arrival",
    name: "arrival",
    placeholder: "Where to?",
    icon: "south_east",
  },
];

export default function SearchForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date : Date | null) => setSelectedDate(date);


  return (
    <div className="flex">
      <div className="flex bg-neutral-50 rounded-lg w-fit ">
        {properties.map((property) => (
          <div key={property.id} className="w-60 h-16">
            <div className="flex items-center h-full border-r-2 border-gray-200">
              <span className="material-icons text-6xl text-gray-600 bg-gray-100 ml-3">
                {property.icon}
              </span>
              <input
                type={property.type}
                id={property.id}
                name={property.name}
                placeholder={property.placeholder}
                className="w-full p-4 bg-neutral-50 focus:outline-none text-gray-800"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>
        ))}

        <div className="w-60 h-16">
          <div className="flex items-center h-full">
            <span className="material-icons text-6xl text-gray-600 bg-gray-100 ml-3">
              calendar_month
            </span>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              placeholderText="Departure date"
              id="date"
              name="date"
              className="w-full p-4 bg-neutral-50 focus:outline-none text-gray-800"
              autoComplete="off"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
      </div>
      <div className="w-64 rounded-lg bg-lime-400 ml-3 flex justify-center items-center transition duration-150 hover:bg-lime-500">
        <button className="text-xl text-gray-900">Search</button>
      </div>
    </div>
  );
}
