import {Route, Switch} from 'react-router-dom'
import SwitchButton from './buttons/SwitchButton'
import Income from "./page/income/Income";

function App() {
    return(
        <div className={'container'}>

            <SwitchButton/>

            <Switch>
                <Route path={'/доход'} component={Income} />
            </Switch>
        </div>
    )
}

export default App