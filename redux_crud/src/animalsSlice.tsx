import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Animal = {
  id: string;
  name: string;
  photo: string;
};

export type AnimalState = Animal[];

const initialState: AnimalState = [
  //   { id: "1", name: 'Lion', photo: 'lion.jpg' },
  //   { id: "2", name: 'Elephant', photo: 'elephant.jpg' },
  //   { id: "3", name: 'Giraffe', photo: 'giraffe.jpg' },
  //   { id: "4", name: 'Monkey', photo: 'monkey.jpg' },
  //   { id: "5", name: 'Tiger', photo: 'tiger.jpg' },
  //   { id: "6", name: 'Penguin', photo: 'penguin.jpg' }
];

const animalSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    getAnimals: () => {
      const localStorageAnimals = JSON.parse(localStorage.getItem("animals"));
      if (localStorageAnimals) {
        return localStorageAnimals;
      }
      return (<div>No anjimals found</div>);
    },
    addAnimal: (state, action: PayloadAction<Animal>) => {
      state.push(action.payload);
      localStorage.setItem("animals", JSON.stringify(state));
    },
    deleteAnimal: (state, action: PayloadAction<string>) => {
      const animalId = action.payload;
      const index = state.findIndex((animal) => animal.id === animalId);
    
      state.splice(index, 1);
      localStorage.setItem("animals", JSON.stringify(state));
    },
    editAnimal: (state, action: PayloadAction<Animal>) => {
      const { id, name, photo } = action.payload;
      const index = state.findIndex((animal) => id === animal.id);

      if (index !== -1) {
        state[index].name = name;
        state[index].photo = photo;
      }
      localStorage.setItem("animals", JSON.stringify(state));
    },
    sortAnimalsAsc: (state, action: PayloadAction<string>) => {
      const sortName = action.payload;
      state.sort((a, b) => (a[sortName] > b[sortName] ? 1 : -1));
    },
    sortAnimalsDesc: (state, action: PayloadAction<string>) => {
      const sortName = action.payload;
      state.sort((a, b) => (b[sortName] > a[sortName] ? 1 : -1));
    },
  },
});

export const {
  getAnimals,
  addAnimal,
  deleteAnimal,
  editAnimal,
  sortAnimalsAsc,
  sortAnimalsDesc,
} = animalSlice.actions;
export const selectAnimals = (state: RootState) => state.animals;
export default animalSlice.reducer;
