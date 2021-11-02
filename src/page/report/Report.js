import {connect} from 'react-redux'
import Card from './component/Card'
function Report({kassa, income, expense, history}) {
    return(
        <div className={'row'}>
            {
                kassa.map(item=><Card key={item.id} history={history} item={item} income={income} expense={expense} />)
            }
        </div>
    )
}

export default connect((state)=>{
    return{
        kassa: state.kassa.kassa,
        income: state.income.income,
        expense: state.expense.expense
    }
})(Report)