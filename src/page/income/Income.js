import {connect} from "react-redux";
import {useState} from "react";
import Add from "../../buttons/Add";
import Modal from './component/Modal'
import Thead from './component/Thead'
import {saveIncome, editIncome, deleteIncome} from '../../store/income/income'

const pageName = 'Доходы'

function Income({income, user, kassa, saveIncome, editIncome, deleteIncome}) {

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
            editIncome({...values, id: edit.id})
        } else {
            saveIncome({
                userId: parseInt(values.userId),
                kassaId: parseInt(values.kassaId),
                price: parseInt(values.price) ,
                date: values.date
            })
        }
        toggle()
    }

    return (
        <div className={'row'}>
            <div className={`${modalVisible ? 'col-md-8' : 'col-md-12'}`}>
                <div className={'card card-padding'}>
                    <Add pageName={pageName} toggle={toggle}/>
                    <Thead income={income} user={user} kassa={kassa} selectItem={selectItem} deleteIncome={deleteIncome}/>
                </div>
            </div>
            {modalVisible && <div className={'col-md-4'}>
                <Modal user={user} kassa={kassa} toggle={toggle} edit={edit} submit={submit} />
            </div>}
        </div>
    );

}

export default connect((state) => {
    return {
        income: state.income.income,
        user: state.user.user,
        kassa: state.kassa.kassa,
    }
}, {saveIncome, editIncome, deleteIncome})(Income)