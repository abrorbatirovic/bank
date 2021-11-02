import {AvForm, AvField} from 'availity-reactstrap-validation'
import Button from "@material-ui/core/Button";

function Modal({submit, edit, toggle}) {
    return(
        <div className={'card'}>
            <div className={'card-header'}>
                {edit ? <h5>Изменить</h5> : <h5>Добавить</h5>}
            </div>
            <div className={'card-body'}>
                <AvForm onSubmit={submit} id={'form-user'} model={edit ? edit : {}}>
                    <AvField type={'text'} name={'name'} />
                </AvForm>
            </div>
            <div className={'card-footer'}>
                <Button variant="contained" color="secondary" onClick={toggle}>Отменить</Button>
                <Button variant="contained" color="primary" type={'submit'} form={'form-user'}>Сохранить</Button>
            </div>
        </div>
    )
}

export default Modal