import {connect} from "react-redux";
import {useState} from "react";
import {saveKassa, editKassa, deleteKassa} from "../../store/kassa/kassa";
import Add from "../../buttons/Add";
import Table from "./component/Table";
import Modal from "./component/Modal";

const pageName = 'Касса'

function Kassa({kassa,saveKassa, editKassa, deleteKassa}) {

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
            editKassa({...values, id: edit.id})
        } else {
            saveKassa(values)
        }
        toggle()
    }

    return (
        <div className={'row'}>
            <div className={`${modalVisible ? 'col-md-8': 'col-md-12'}`}>
                <div className={'card card-padding'}>
                    <Add pageName={pageName} toggle={toggle}/>
                    <Table kassa={kassa} selectItem={selectItem} deleteKassa={deleteKassa} />
                </div>
            </div>
            {modalVisible && <div className={'col-md-4'}>
                <Modal submit={submit} edit={edit} toggle={toggle} />
            </div>}
        </div>
    )
}

export default connect((state) => {
    return {
        kassa: state.kassa.kassa
    }
}, {saveKassa, editKassa, deleteKassa})(Kassa)