import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import SwitchButton from './buttons/SwitchButton'
import Income from "./page/income/Income";
import Expense from './page/expense/Expense'
import User from './page/user/User'
import Kassa from './page/kassa/Kassa'
import Report from "./page/report/Report";
import OnePage from './page/report/component/User'

function App({income, expense, user}) {
    return (
        <div className={'container'}>

            <SwitchButton/>

            <Switch>
                <Route path={'/отчет/касса/:id'}
                       render={(props) => <OnePage {...props} income={income} expense={expense} user={user}/>}/>
                <Route path={'/доход'} component={Income}/>
                <Route path={'/расход'} component={Expense}/>
                <Route path={'/пользователь'} component={User}/>
                <Route path={'/касса'} component={Kassa}/>
                <Route path={'/отчет'} component={Report}/>
            </Switch>
        </div>
    )
}

export default connect((state) => {
    return {
        income: state.income.income,
        expense: state.expense.expense,
        user: state.user.user
    }
})(App)