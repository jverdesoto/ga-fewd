import { Container, Stack, Button } from 'react-bootstrap'
import BudgetCard from './components/BudgetCard'
import AddBudgetsModal from './components/AddBudgetsModal';
import { useState } from 'react';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  return (
    <>
      <Container>
        <Stack direction='horizontal' gap="3" className="mb-4">
          <h1 className='me-auto'>Budget</h1>
          <Button variant='primary' onClick={()=>{setShowAddBudgetModal(true)}}>Add Budget</Button>
          <Button variant='secondary'>Add Expense</Button>
        </Stack>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
            alignItems: 'flex-start'
          }}
        >
          <BudgetCard name='Henry' amount={150} maxAmount={1000} />
          <BudgetCard name='Henry' amount={1100} maxAmount={1000} />
          <BudgetCard name='Henry' amount={150} maxAmount={1000} gray />
        </div>
      </Container>
      <AddBudgetsModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
    </>
  )
}

export default App;
