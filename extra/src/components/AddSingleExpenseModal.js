import React, { useRef } from 'react'
import { Modal, Form, Select, Button } from 'react-bootstrap'
import { useBudgets, UNCATEGORIES_BUDGET_ID } from '../context/BudgetProvider'

export default function AddSingleExpenseModal({ budgetId, handleClose, defaultBudgetID, defaultBudgetName }) {
    const descriptionRef = useRef();
    const amountRef = useRef();
    const budgetIdRef = useRef();
    const { addExpense, budgets } = useBudgets() ;
    const selectedBudget = budgets.find((budget) => budget.name === defaultBudgetName);
    const selectedBudgetId = selectedBudget ? selectedBudget.id : UNCATEGORIES_BUDGET_ID;
    
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
    <Modal show={budgetId != null} onHide={handleClose}>
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
                <Form.Group className='mb-2' controlId='budgetId'>
                    <Form.Label>Budget ID</Form.Label>
                    <Form.Select 
                        defaultValue ={ budgetId }
                        ref={ budgetIdRef }
                        disabled
                        >
                        <option id={UNCATEGORIES_BUDGET_ID}>{UNCATEGORIES_BUDGET_ID}</option>
                        {
                            budgets.map( (budget) => (
                                <option key={ budget.id } value={ budget.id } >{budget.name}</option>
                            ))
                        }
                        </Form.Select>
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <Button variant='primary' type='submit'>Confirm Single Expense</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}