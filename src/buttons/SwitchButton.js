import {Link} from 'react-router-dom';
import Button from '@material-ui/core'
const pageName = ['доход', 'расход', 'касса', 'пользователь']

function SwitchButton() {
    return(
        <div className={'switch-button'}>
            {pageName.map((item,index)=><Link to={item}>
                <Button>{item}</Button>
            </Link>)}
        </div>
    )
}

export default SwitchButton