import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import BudgetCard from './components/BudgetCard';


function App() {
  return (
    <Container>
      <Stack direction='horizontal' gap="2" className='mb-4'>
        <h1 className='me-auto'>Budget</h1>
        <Button variant='primary'>Add Budget</Button>
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
        <BudgetCard name='Areej' amount={1001} maxAmount={1000} />
        <BudgetCard name='Areej' amount={150} maxAmount={1000} />
        <BudgetCard name='Areej' amount={150} maxAmount={1000} />
        <BudgetCard name='Uncategorised' amount={150} maxAmount={1000} gray/>
        </div>
    </Container>
  )
}

export default App;
