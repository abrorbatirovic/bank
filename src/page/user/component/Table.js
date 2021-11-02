import Button from "@material-ui/core/Button";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

function Table({user, deleteUser, selectItem}) {
    return(
        <table className={'table text-center'}>
            <thead>
            <tr>
                <th>№</th>
                <th>Пользователь</th>
                <th/>
            </tr>
            </thead>
            <tbody>
            {
                user.map((item,index)=> <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                        <Button color={'primary'} onClick={()=>selectItem(item)}><EditOutlinedIcon/></Button>
                        <Button color={'secondary'} onClick={()=>deleteUser(item.id)}><DeleteForeverOutlinedIcon/></Button>
                    </td>
                </tr>)
            }
            </tbody>
        </table>
    )
}

export default Table