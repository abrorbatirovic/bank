import {connect} from 'react-redux'
import Table from './Table'

function User({match, income, expense, user}) {

    return (
        <div className={'col-md-6 offset-3'}>
            <table className={'table text-center table-bordered'}>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Пользователь</th>
                    <th>Оплаты</th>
                    <th>Общий баланс</th>
                </tr>
                </thead>
                <tbody>
                {
                    user.map((item,index)=><Table key={index} item={item} index={index} income={income} expense={expense} />)
                }
                </tbody>
            </table>
        </div>
    );
}

export default connect((state) => {
    return {
        income: state.income.income,
        expense: state.expense.expense,
        user: state.user.user
    }
})(User)