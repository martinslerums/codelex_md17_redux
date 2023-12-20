import { useState, FormEvent } from "react";
import { addAnimal } from "../../animalsSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const AnimalsForm = () => {
  const dispatch = useDispatch();

  const [animal, setAnimal] = useState("");
  const [animalPhoto, setAnimalPhoto] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      addAnimal({ id: nanoid(), name: animal, photo: animalPhoto })
    );
    setAnimal("")
    setAnimalPhoto("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="animal"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="photoUrl"
        value={animalPhoto}
        onChange={(e) => setAnimalPhoto(e.target.value)}
        required
      />
      <button type="submit">Add animal</button>
    </form>
  );
};

export default AnimalsForm;
