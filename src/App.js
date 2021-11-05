import {Route, Switch} from 'react-router-dom';
import SwitchButton from './buttons/SwitchButton';
import Income from "./page/income/Income";
import Expense from './page/expense/Expense';
import User from './page/user/User';
import Kassa from './page/kassa/Kassa';
import Report from "./page/report/Report";
import OnePage from './page/report/component/User';
import Table from './page/report/component/Table'

function App() {
    return (
        <div className={'container'}>

            <SwitchButton/>
            <hr/>

            <Switch>
                <Route path={'/отчет/касса/:id'} component={OnePage}/>
                <Route path={'/отчет/касса/клиент'} component={Table}/>
                <Route path={'/доход'} component={Income}/>
                <Route path={'/расход'} component={Expense}/>
                <Route path={'/пользователь'} component={User}/>
                <Route path={'/касса'} component={Kassa}/>
                <Route path={'/отчет'} component={Report}/>
            </Switch>
        </div>
    )
}

export default App