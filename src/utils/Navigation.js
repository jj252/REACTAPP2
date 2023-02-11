import {LOADED_QUESTIONS} from '../app/shared/LOADED_QUESTIONS'

export const SelectQuestion = (question_number) => {
    return (
        console.log(LOADED_QUESTIONS.find((question) => question.name === 'Question1' )),
        LOADED_QUESTIONS.find((question) => question.name === 'Question1' )
        
    )
}