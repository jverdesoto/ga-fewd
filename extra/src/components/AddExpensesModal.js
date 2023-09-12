import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useBudgets } from '../context/BudgetProvider'

export default function AddExpensesModal({ show, handleClose}) {
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const { addExpense } = useBudgets() 
    
    function handleSubmit(e){
        e.preventDefault()
        addExpense({
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value,
        })
        handleClose()
    }
  return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Add Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className='mb-3' controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control ref={descriptionRef} type='text' required />
                </Form.Group>
                <Form.Group className='mb-3' controlId='amount'>
                    <Form.Label>Expense Amount</Form.Label>
                    <Form.Control ref={amountRef} type='number' required min={0} step={.01} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='budgetId'>
                    <Form.Label>Budget ID</Form.Label>
                    <Form.Control ref={budgetIdRef} type='text' required />
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <Button variant='primary' type='submit'>Add Expense</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
