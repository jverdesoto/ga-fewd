import React from 'react'
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

export default function BudgetCard({name, amount, maxAmount, gray}) {
    const classNames = []
    
    if(amount > maxAmount){
        classNames.push('bg-danger', 'bg-opacity-10')
    } else if (gray) {
        classNames.push('bg-light')
    }

  return (
    <Card className={classNames}>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                <div className='me-2'>{name}</div>
                <div className='d-flex align-items-baseline'>
                    {currencyFormatter.format(amount)}
                    <span className='text-muted fs-6 ms-1'>
                        / {currencyFormatter.format(maxAmount)}
                     </span>
                </div>
            </Card.Title>
            <ProgressBar
                className='rounded-pill'
                variant={getProgressBarVariant(amount, maxAmount)}
                min={0}
                max={maxAmount}
                now={amount}
            />
            <Stack direction='horizontal' gap="2" className='mt-4'>
                <Button variant='outline-primary' className='ms-auto'>Add Expense</Button>
                <Button variant='outline-secondary'>View Expenses</Button>
            </Stack>
        </Card.Body>
    </Card>
  )
}

function getProgressBarVariant(amount, maxAmount) {
    const ratio = amount / maxAmount
    if(ratio < .5) return 'primary'
    if(ratio < .75) return 'warning'
    return 'danger'
}
