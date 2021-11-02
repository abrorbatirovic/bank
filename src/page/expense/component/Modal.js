import {AvField, AvForm} from "availity-reactstrap-validation";
import Button from "@material-ui/core/Button";

function Modal({toggle, edit, submit, kassa, user}) {
    return(
        <div className={'card'}>
            <div className={'card-header'}>
                {edit ? <h5>Изменить</h5> : <h5>Добавить</h5>}
            </div>
            <div className={'card-body'}>
                <AvForm onSubmit={submit} id={'form-expense'} model={edit ? edit : {}} >
                    <AvField type={'select'} name={'userId'}>
                        {user.map(item=> <option value={item.id} key={item.id}>{item.name}</option>)}
                    </AvField>
                    <AvField type={'select'} name={'kassaId'}>
                        {kassa.map(item=> <option value={item.id} key={item.id}>{item.name}</option>)}
                    </AvField>
                    <AvField type={'number'} name={'price'} />
                    <AvField type={'date'} name={'date'} />
                </AvForm>
            </div>
            <div className={'card-header'}>
                <Button variant="contained" color="secondary" onClick={toggle}>Отменить</Button>
                <Button variant="contained" color="primary" type={'submit'} form={'form-expense'}>Сохранить</Button>
            </div>
        </div>
    )
}

export default Modal