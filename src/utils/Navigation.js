import {LOADED_QUESTIONS} from '../app/shared/LOADED_QUESTIONS'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questionsArray:LOADED_QUESTIONS
}

const questionsSlice = createSlice({
    name:'questions',
    initialState,
    reducers: {
        addQuestion: (state,action) => {
            
            const newQuestion = {
                id: state.questionsArray.length + 1,
                name:'Question' + state.questionsArray.length,
                ...action.payload
            }
            state.questionsArray.push(newQuestion);
            
        }
    }
});

export const questionsReducer = questionsSlice.reducer;

export const { addQuestion } = questionsSlice.actions;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


export const SelectAllQuestions = (state) => {
    console.log('STATE',state)
    return (
        
        shuffle(state.questions.questionsArray.filter((question) => question.name ))
        
    )
}

