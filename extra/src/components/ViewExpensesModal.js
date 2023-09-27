import React from 'react'
import { Modal, Button, Stack, ModalBody } from 'react-bootstrap'
import { UNCATEGORISED_BUDGET_ID, useBudgets } from '../context/BudgetProvider'
import { currencyFormatter } from '../utils'

export default function ViewExpensesModal({ budgetId, handleClose }) {
    const { getBudgetExpenses, budgets } = useBudgets()
    const budget = UNCATEGORISED_BUDGET_ID === budgetId
    ? { name: UNCATEGORISED_BUDGET_ID, id: UNCATEGORISED_BUDGET_ID }
    : budgets.find( b => b.id === budgetId )

    const expenses = getBudgetExpenses(budgetId)

  return (
    <Modal show={ budgetId != null } onHide={ handleClose }>
        <Modal.Header closeButton>
            <Modal.Title>
                Expenses for { budget?.name }
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                expenses.map( expense => (
                    <Stack direction='horizontal' gap="2" key={expense.id}>
                        <div className='me-auto fs-4'>{expense.description}</div>
                        <div className='fs-5'>{ currencyFormatter.format(expense.amount) }</div>
                    </Stack>
                ) )
            }
        </Modal.Body>
    </Modal>
  )
}
