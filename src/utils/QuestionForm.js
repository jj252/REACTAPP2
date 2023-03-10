import {Button, Label, Col, FormGroup} from 'reactstrap';
import {Formik, Field,Form, ErrorMessage} from 'formik';
import { validateContactForm } from './validateContactForm';
import { useDispatch } from 'react-redux';
import { addQuestion } from './Navigation';
import style from '../app/shared/StudentList.module.css';



const QuestionForm = () =>{

    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
        const question = {
            question: values.question,
            option1: values.option1,
            option2: values.option2,
            option3: values.option3,
            option4: values.option4,
            correct: values.correct,
            ans: values.ans,
            host: values.host
        }
        dispatch(addQuestion(question));
        resetForm();
    }


    return (
        <Formik initialValues={{
            question:'',
            option1:'',
            option2:'',
            option3:'',
            option4:'',
            correct:'',
            ans:'',
            host:''
        }}
        onSubmit={handleSubmit}
        validate={validateContactForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='question' md='2'>
                        Question
                    </Label>
                    <Col md='10'>
                        <Field 
                        className='form-control'
                        name='question'
                        placeholder='Your Question Here'
                        />
                        <ErrorMessage name='question'>
                            {(msg) => <p className={style.errors}>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='option1' md='2'>
                        Option1
                    </Label>
                    <Col md='10'>
                        <Field className='form-control'
                            name='option1'
                            placeholder='OptionA'
                        />
                        <ErrorMessage name='option1'>
                            {(msg) => <p className={style.errors}>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='option2' md='2'>
                        Option2
                    </Label>
                    <Col md='10'>
                        <Field className='form-control'
                            name='option2'
                            placeholder='OptionB'
                        />
                        <ErrorMessage name='option2'>
                            {(msg) => <p className={style.errors}>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='option3' md='2'>
                        Option3
                    </Label>
                    <Col md='10'>
                        <Field className='form-control'
                            name='option3'
                            placeholder='OptionC'
                        />
                        <ErrorMessage name='option3'>
                            {(msg) => <p className={style.errors}>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='option4' md='2'>
                        Option4
                    </Label>
                    <Col md='10'>
                        <Field className='form-control'
                            name='option4'
                            placeholder='OptionD'
                        />
                        <ErrorMessage name='option4'>
                            {(msg) => <p className={style.errors}>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='ans' md='2'>
                        Answer
                    </Label>
                    <Col md='2'>
                        <Field className='form-control'
                            name='ans'
                            as='select'
                            >
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='correct' md='5'>
                        Correct Answer
                    </Label>
                    <Col md='6'>
                        <Field className='form-control'
                            name='correct'
                            placeholder='Type the correct answer'
                        />
                        <ErrorMessage name='correct'>
                            {(msg) => <p className={style.errors}>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label htmlFor='host' md='2'>
                        Life Lines
                    </Label>
                    <Col md='10'>
                        <Field className='form-control'
                            name='host'
                            placeholder='Life Line Answer'
                        />
                        <ErrorMessage name='host'>
                            {(msg) => <p className={style.errors}>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}}>
                        <Button type='submit' color='primary'>
                            Submit Question
                        </Button>
                    </Col>
                </FormGroup>
            </Form>

        </Formik>
    )
}

export default QuestionForm;