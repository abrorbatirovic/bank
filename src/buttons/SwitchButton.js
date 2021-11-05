import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const pageName = ['доход', 'расход', 'касса', 'пользователь', 'отчет']

function SwitchButton() {
    return (
        <div className={'switch-button'}>
            {pageName.map((item, index) => <Link to={'/'+item} key={index}>
                <Button color="primary" variant="contained">{item}</Button>
            </Link>)}
        </div>
    )
}

export default SwitchButton