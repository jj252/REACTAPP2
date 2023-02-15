import {LOADED_QUESTIONS} from '../app/shared/LOADED_QUESTIONS'

export const SelectAllQuestions = () => {
    return LOADED_QUESTIONS.filter((question) => question.name )
}

/*export const Fifty_Fifty = () => {
    return (
        console.log(LOADED_QUESTIONS.find((question) => question.name === 'Question' + question_number )),
        LOADED_QUESTIONS.filter((question) => question.name === 'Question' + question_number.toString() )
        
    )
}*/

export const SelectQuestion = (question_number) => {
    return (
        console.log(LOADED_QUESTIONS.find((question) => question.name === 'Question' + question_number )),
        LOADED_QUESTIONS.find((question) => question.name === 'Question' + question_number.toString() )
        
    )
}

export const Compare_Answer = (answer) => {
    return (
        console.log(LOADED_QUESTIONS.find((question) => question.correct === answer )),
        LOADED_QUESTIONS.find((question) => question.correct === answer )
        
    )
}