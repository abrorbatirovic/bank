import {connect} from 'react-redux'
import {useState} from "react";
import Add from "../../buttons/Add";
import Modal from './component/Modal'
import Thead from './component/Thead'
import {saveExpense, editExpense, deleteExpense} from "../../store/expense/expense";

const pageName = 'Расходы'

function Expense({expense, user, kassa, saveExpense,editExpense,deleteExpense}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [edit, setEdit] = useState('')

    function toggle() {
        setEdit('')
        setModalVisible(prev => !prev)
    }

    function selectItem(item) {
        setEdit(item)
        setModalVisible(true)
    }

    function submit(event, errors, values) {
        if (edit) {
            editExpense({...values, id: edit.id})
        } else {
            saveExpense({
                userId: parseInt(values.userId),
                kassaId: parseInt(values.kassaId),
                price: parseInt(values.price),
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
                    <Thead edit={edit} selectItem={selectItem} expense={expense} user={user} kassa={kassa} deleteExpense={deleteExpense}/>
                </div>
            </div>
            {modalVisible && <div className={'col-md-4'}>
                <Modal edit={edit} submit={submit} toggle={toggle} user={user} kassa={kassa}/>
            </div>}
        </div>
    )
}

export default connect((state) => {
    return {
        expense: state.expense.expense,
        user: state.user.user,
        kassa: state.kassa.kassa,
    }
}, {saveExpense, deleteExpense, editExpense})(Expense)