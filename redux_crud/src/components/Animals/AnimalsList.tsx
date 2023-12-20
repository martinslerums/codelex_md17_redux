import { useDispatch, useSelector } from "react-redux";
import { Animal, deleteAnimal, editAnimal } from "../../animalsSlice";
import { RootState } from "../../store";
import { useState } from "react";

export const AnimalsList = () => {
    const [editingAnimal, setEditingAnimal] = useState<null | string | number>(null);
  
    const dispatch = useDispatch();
    const animals = useSelector((state: RootState) => state.animals);
  
    return (
      <div className="container">
        {animals.map((animal: Animal) => (
          <div key={animal.id}>
            {editingAnimal === animal.id ? (
              <form>
                <input type="text" placeholder="animal" required />
                <input type="text" placeholder="photoUrl" required />
                <button type="submit">Save</button>
                <button onClick={() => setEditingAnimal(null)}>Cancel</button>
              </form>
            ) : (
              <>
                <h2>{animal.name}</h2>
                <h6>{animal.photo}</h6>
                <div>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteAnimal(animal.id))}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingAnimal(animal.id)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };
  