import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Card from './component/Card'
import Button from "@material-ui/core/Button";

function Report({kassa, income, expense, history}) {

    return(
        <div className={'row'}>
            <div className={'user-table'}>
                <Link to={'/отчет/касса/клиент'}><Button color="primary" variant="contained">Отчет клиента</Button></Link>
            </div>
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