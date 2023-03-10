export const validateContactForm = (values) =>{
    const errors = {};

    if(!values.question){
        errors.question = 'Required';
    }
    else if (values.question.length < 5){
        errors.question = 'Must be at least 5 characters';
    }
    else if (values.question.length > 25){
        errors.question = 'Must be 25 characters or less';
    }

    if(!values.option1){
        errors.option1 = 'Required';
    }
    else if (values.option1.length < 2){
        errors.option1 = 'Must be at least 5 characters';
    }
    else if (values.option1.length > 15){
        errors.option1 = 'Must be 25 characters or less';
    }

    if(!values.option2){
        errors.option2 = 'Required';
    }
    else if (values.option2.length < 2){
        errors.option2 = 'Must be at least 5 characters';
    }
    else if (values.option2.length > 15){
        errors.option2 = 'Must be 25 characters or less';
    }

    if(!values.option3){
        errors.option3 = 'Required';
    }
    else if (values.option3.length < 2){
        errors.option3 = 'Must be at least 5 characters';
    }
    else if (values.option3.length > 15){
        errors.option3 = 'Must be 25 characters or less';
    }

    if(!values.option4){
        errors.option4 = 'Required';
    }
    else if (values.option4.length < 2){
        errors.option4 = 'Must be at least 5 characters';
    }
    else if (values.option4.length > 15){
        errors.option4 = 'Must be 25 characters or less';
    }

    if(!values.correct){
        errors.correct = 'Required';
    }
    else if (values.correct !== values.option1 && values.correct !== values.option2 && values.correct !== values.option3 && values.correct !== values.option4){
        errors.correct = 'The answer must match up to one of the options';
    }

    if(!values.host){
        errors.host = 'Required';
    }
    else if (values.host !== values.option1 && values.host !== values.option2 && values.host !== values.option3 && values.host !== values.option4){
        errors.host = 'The answer must match up to one of the options';
    }
    return errors;
}