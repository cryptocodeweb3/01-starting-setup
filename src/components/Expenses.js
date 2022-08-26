import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    return (
        <div>
            <ExpensesFilter />
            <Card className='expenses'>
                <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
                <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date} />
                <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date} />
            </Card>
        </div>
    )
}

export default Expenses;