import Button from "@material-ui/core/Button";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

function Tbody({item,index,user,kassa,selectItem,deleteExpense}){

    function userId(){
        const arr = user.filter(data => data.id === item.userId)
        return arr[0].name
    }
    function kassaId(){
        const arr = kassa.filter(data => data.id === item.kassaId)
        return arr[0].name
    }

    return(
        <tr>
            <td>{index + 1}</td>
            <td>{userId()}</td>
            <td>{item.price}</td>
            <td>{kassaId()}</td>
            <td>{item.date}</td>
            <td>
                <Button color={'primary'} onClick={()=>selectItem(item)}><EditOutlinedIcon/></Button>
                <Button color={'secondary'} onClick={()=>deleteExpense(item.id)}><DeleteForeverOutlinedIcon/></Button>
            </td>
        </tr>
    )
}

export default Tbody