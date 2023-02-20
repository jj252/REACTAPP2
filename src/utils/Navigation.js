import {LOADED_QUESTIONS} from '../app/shared/LOADED_QUESTIONS'

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

export const SelectAllQuestions3 = () => {
    
    return LOADED_QUESTIONS.filter((question) => question.name )
    
    
     
}

export const SelectAllQuestions = (question_number) => {
    
    return (
        
        shuffle(LOADED_QUESTIONS.filter((question) => question.name ))
        
    )
}

/*export const Fifty_Fifty = () => {
    return (
        console.log(LOADED_QUESTIONS.find((question) => question.name === 'Question' + question_number )),
        LOADED_QUESTIONS.filter((question) => question.name === 'Question' + question_number.toString() )
        
    )
}*/

  
  // Used like so
  var arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);

export const SelectQuestion = (question_number) => {
    let randomized_questions = [];
    let random_questions = LOADED_QUESTIONS.find((question) => question.name === 'Question' + question_number.toString() );
    randomized_questions.push(random_questions);
    return (
        
        randomized_questions
        
    )
}

export const Compare_Answer = (answer) => {
    return (
        console.log(LOADED_QUESTIONS.find((question) => question.correct === answer )),
        LOADED_QUESTIONS.find((question) => question.correct === answer )
        
    )
}