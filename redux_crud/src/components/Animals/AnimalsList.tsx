import styles from "./AnimalList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Animal,
  deleteAnimal,
  editAnimal,
  sortAnimalsAsc,
  sortAnimalsDesc,
  getAnimals
} from "../../animalsSlice";
import { RootState } from "../../store";
import { FormEvent, useEffect, useState } from "react";

export const AnimalsList = () => {
  const [editingAnimalId, setEditingAnimalId] = useState<string>("");

  const [editedAnimalName, setEditedAnimalName] = useState("");
  const [editedAnimalPhoto, setEditedAnimalPhoto] = useState("");

  const dispatch = useDispatch();
  const animals = useSelector((state: RootState) => state.animals);

  const handleEditSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      editAnimal({
        id: editingAnimalId,
        name: editedAnimalName,
        photo: editedAnimalPhoto,
      })
    );
    setEditingAnimalId("");
    setEditedAnimalName("");
    setEditedAnimalPhoto("");
  };

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);


  const handleSortAsc = () => {
    dispatch(sortAnimalsAsc("name"));
  };

  const handleSortDesc = () => {
    dispatch(sortAnimalsDesc("name"));
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button type="button" onClick={handleSortAsc}>
          ASC
        </button>
        <button type="button" onClick={handleSortDesc}>
          DESC
        </button>
      </div>
      <div className={styles.animalCards} >
        {animals.map((animal: Animal) => (
          <div key={animal.id} className={styles.animalCard}>
            {editingAnimalId === animal.id ? (
              <form onSubmit={handleEditSubmit}>
                <input
                  type="text"
                  placeholder="animal"
                  required
                  value={editedAnimalName}
                  onChange={(e) => setEditedAnimalName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="photoUrl"
                  required
                  value={editedAnimalPhoto}
                  onChange={(e) => setEditedAnimalPhoto(e.target.value)}
                />
                <button type="submit">Save</button>
                <button onClick={() => setEditingAnimalId("")}>Cancel</button>
              </form>
            ) : (
              <>
                <h2>{animal.name}</h2>
                <img src={animal.photo} alt="Photo" height={100} width={"auto"} />
                <div>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteAnimal(animal.id))}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingAnimalId(animal.id)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
