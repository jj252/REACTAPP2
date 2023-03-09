import {Button, Label, Col, FormGroup} from 'reactstrap';
import {Formik, Field,Form} from 'formik';

const QuestionForm = () =>{
    const handleSubmit = (values, {resetForm}) => {
        console.log('form values:',values)
        console.log('in JSON format',JSON.stringify(values));
        resetForm();
    }

    return (
        <Formik initialValues={{
            question:'',
            option1:'',
            option2:'',
            option3:'',
            option4:'',
            ans:'',
            host:''
        }}
        onSubmit={handleSubmit}
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
                        placeholder='Your Question Here'/>
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
                <Label htmlFor='host' md='2'>
                        Life Lines
                    </Label>
                    <Col md='10'>
                        <Field className='form-control'
                            name='host'
                            placeholder='Life Line Answer'
                        />
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