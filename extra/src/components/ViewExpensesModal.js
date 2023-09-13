import React from 'react'
import { Modal, Button, Stack} from 'react-bootstrap'
import { UNCATEGORIES_BUDGET_ID, useBudgets } from '../context/BudgetProvider'
import { currencyFormatter } from '../utils'

export default function ViewExpensesModal( { budgetId, handleClose}) {
    const { getBudgetExpenses, budgets, } = useBudgets()
    const budget = UNCATEGORIES_BUDGET_ID === budgetId 
    ? { name: UNCATEGORIES_BUDGET_ID, id: UNCATEGORIES_BUDGET_ID } 
    : budgets.find( b => b.id === budgetId )

    const expenses = getBudgetExpenses(budgetId)

  return (
    <Modal show={ budgetId != null } onHide={ handleClose }>
        <Modal.Header>
            <Modal.Title>
                Expenses for { budget?.name }
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                expenses.map( expense => (
                    <Stack direction='horizontal' gap="2" key={expense.id}>
                        <div className='me-auto fs-4'>{expense.description}</div>
                        <div className='fs-5'>{currencyFormatter.format(expense.amount)}</div>
                    </Stack>    
                ) )
            }            
        </Modal.Body>
    </Modal>
  )
}
