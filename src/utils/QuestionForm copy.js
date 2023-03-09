import {useState} from 'react';
import {Button, Modal, ModalHeader,ModalBody} from 'reactstrap';
import {Formik,Field,Form,ErrorMessage} from 'formik';
import {FormGroup, Label} from 'reactstrap';
import { validateCommentForm } from '../utils/validateCommentForm';
import { useDispatch } from 'react-redux';
import { addComment } from '../utils/commentsSlice';

const CommentForm = ({campsiteId}) =>{
    const [modalOpen,setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (values) =>{
        const comment = {
                        campsiteId: parseInt(campsiteId),
                        rating: values.rating,
                        author: values.author,
                        text: values.commentText,
                        question: values.question,
                        date: new Date(Date.now()).toISOString()
                        }
        console.log(comment);
        dispatch(addComment(comment));
        setModalOpen(false);
    }
    return(
        <>
            <Button outline onClick={()=> setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg'/> Add Question
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Question
                </ModalHeader>
                <ModalBody>
                    <Formik 
                        initialValues={{
                        rating:undefined,
                        author:'',
                        commentText:''
                        
                    }}
                        onSubmit={handleSubmit}
                        validate={validateCommentForm}
                    >
                     <Form>
                        <FormGroup htmlFor='rating'>
                            <Label>
                                Rating
                            </Label>
                            <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                            <ErrorMessage name='rating'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup htmlFor='author'>
                            <Label>
                                Your Name
                            </Label>
                            <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                        </FormGroup>
                            <ErrorMessage name='author'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        <FormGroup htmlFor='commentText'>
                            <Label>
                                Comment
                            </Label>
                            <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                        </FormGroup>
                        <Button type='submit' color='primary'>
                                Submit
                        </Button>
                     </Form>
                    </Formik>
                    
                </ModalBody>
            </Modal>
        </>
    )
}

export default CommentForm;