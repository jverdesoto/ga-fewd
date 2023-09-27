import { createContext, useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import useLocacalStorage from "../hooks/useLocalStorage"

// [{
//     id,
//     name,
//     max
// }]

// [
//     {
//         id,
//         budgetId,
//         amount,
//         description
//     }
// ]

const BudgetContext = createContext()

export const UNCATEGORISED_BUDGET_ID = 'Uncategorised'

export function useBudgets() {
    return useContext(BudgetContext)
}

export const BudegetsProvider = ({children}) => {
    const [budgets, setBudgets] = useLocacalStorage('budgets', [])
    const [expenses, setExpenses] = useLocacalStorage('expenses', [])

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    function addExpense({ description, amount, budgetId }) {
        setExpenses( prevExpenses => {
            return [...prevExpenses, { id: uuidv4(), description, amount, budgetId }]
        } )
    }
    function addBudget({ name, max }) {
        setBudgets(prevBudgets => {
            if( prevBudgets.find(budget => budget.name === name) ) {
                return prevBudgets
            }
            return [...prevBudgets, {id: uuidv4(), name, max}]
        })
    }

    function deleteBudget( {id} ) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }
    function deleteExpense( {id} ) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }
    return (
        <BudgetContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>{children}</BudgetContext.Provider>
    )
}