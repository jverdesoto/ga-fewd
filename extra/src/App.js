import {Container, Stack, Button} from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';
import AddBudgetsModal from './components/AddBudgetsModal'; 
import AddExpensesModal from './components/AddExpensesModal';
import ViewExpensesModal from './components/ViewExpensesModal';
import { useState } from 'react';
import { useBudgets } from './context/BudgetProvider';
import AddSingleExpenseModal from './components/AddSingleExpenseModal';


function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const { budgets, getBudgetExpenses } = useBudgets()
  const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] = useState()
  const [showAddSingleExpenseModal, setShowAddSingleExpenseModal] = useState(false)
  return (
    <>
  <Container>
    <Stack direction='horizontal' gap={2} className='mb-4'>
      <h1 className='me-auto'>Budget</h1>
      <Button variant='primary' onClick={()=>{setShowAddBudgetModal(true)}}>Add Budget</Button>
      <Button variant='secondary' onClick={()=>{setShowAddExpenseModal(true)}}>Add Expense</Button>
    </Stack>
    <div 
      style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem', 
        alignItems: 'flex-start'
      }}
      >
        {
          budgets.map( (budget) => {
            const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
            return (
              <BudgetCard 
              key={budget.id} 
              name={budget.name} 
              amount={amount} 
              maxAmount={budget.max}
              onViewExpensesClick = { () => setViewExpenseModalBudgetId(budget.id) }
              showAddSingleExpenseModal = { (budgetName) => setShowAddSingleExpenseModal(true, budgetName )}
              />
            )
          } )
        }
       <AddBudgetsModal show={showAddBudgetModal} onClick={() => {setShowAddBudgetModal(false)}} />
       <AddExpensesModal show={showAddExpenseModal} onClick={() => {setShowAddExpenseModal(false)}} />
       {/* <AddSingleExpenseModal show={showAddSingleExpenseModal} onClick={() => {setShowAddSingleExpenseModal(false)}} /> */}
      </div>
  </Container>
  <AddBudgetsModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
  <AddExpensesModal show={showAddExpenseModal} handleClose={() => setShowAddExpenseModal(false)}/>
  <ViewExpensesModal budgetId={ viewExpenseModalBudgetId } handleClose={ () => setViewExpenseModalBudgetId() } />
  <AddSingleExpenseModal show={ showAddSingleExpenseModal } handleClose={ () => setShowAddSingleExpenseModal(false) } />
  </>
  )
}

export default App;
