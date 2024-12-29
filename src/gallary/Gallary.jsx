import { useState } from "react";
import people from "../utils/data";
import PhoneImage from "../assets/phone.jpg"

const Gallary = () => {
  const [persons, setPersons] = useState(people);
  return (
    <div className="grid grid-cols-5 gap-5 mt-10">
      {persons.map((person) => (
        <div
          key={person.id}
          className="border border-blue-200 w-[300px] h-[300px]"
        >
         <img draggable src={PhoneImage} alt={person.imgName} style={{width:"100%",height:"100%",objectFit:"cover"}} />
        </div>
      ))}
    </div>
  );
};

export default Gallary;
