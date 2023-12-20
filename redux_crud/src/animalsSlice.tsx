import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

export type Animal = {
    id: number | string,
    name: string,
    photo: string,
  }
  
export type AnimalState = Animal[];

const initialState: AnimalState = [
    { id: 1, name: 'Lion', photo: 'lion.jpg' },
    { id: 2, name: 'Elephant', photo: 'elephant.jpg' },
    { id: 3, name: 'Giraffe', photo: 'giraffe.jpg' },
    { id: 4, name: 'Monkey', photo: 'monkey.jpg' },
    { id: 5, name: 'Tiger', photo: 'tiger.jpg' },
    { id: 6, name: 'Penguin', photo: 'penguin.jpg' }
  ];



const animalSlice = createSlice({
    name: "animals",
    initialState,
    reducers: {
        addAnimal: (state, action: PayloadAction<Animal>) => {
            state.push(action.payload)
        },
        deleteAnimal: (state, action: PayloadAction<number | string>) => {
            const animalId = action.payload;
            return state.filter((animal) => animal.id !== animalId )
        },
        editAnimal: (state, action: PayloadAction<number | string>) => {
            const animalId = action.payload;
            return state.filter((animal) => animal.id === animalId )
        },
    }
})

export const { addAnimal, deleteAnimal, editAnimal } = animalSlice.actions;
export default animalSlice.reducer;