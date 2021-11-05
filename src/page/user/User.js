import {connect} from 'react-redux'
import {useState} from "react";
import {saveUser, editUser, deleteUser} from "../../store/user/user";
import Add from '../../buttons/Add'
import Table from './component/Table'
import Modal from './component/Modal'
import {toast} from "react-hot-toast";

const pageName = 'Пользователь'

function User({user, saveUser, editUser, deleteUser}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [edit, setEdit] = useState('')

    function toggle() {
        setEdit('')
        setModalVisible(prev => !prev)
    }

    function selectItem(item) {
        setModalVisible(true)
        setEdit(item)
    }

    function submit(event, errors, values) {
        if (edit) {
            editUser({...values, id: edit.id})
        } else {
            if(values.name !== ''){
                saveUser(values)
                toggle()
            }
            else toast.error('Заполните все строки!')
        }
    }

    return (
        <div className={'row'}>
            <div className={`${modalVisible ? 'col-md-8' : 'col-md-12'}`}>
                <div className={'card card-padding'}>
                    <Add pageName={pageName} toggle={toggle}/>
                    <Table user={user} selectItem={selectItem} deleteUser={deleteUser}/>
                </div>
            </div>
            {modalVisible && <div className={'col-md-4'}>
                <Modal toggle={toggle} edit={edit} submit={submit}/>
            </div>}
        </div>
    )
}

export default connect((state) => {
    return {
        user: state.user.user
    }
},{saveUser, editUser, deleteUser})(User)