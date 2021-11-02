import Tbody from './Tbody'

function Thead({expense, user, kassa, selectItem, deleteExpense}) {
    return (
        <table className={'table text-center'}>
            <thead>
            <tr>
                <th>№</th>
                <th>Пользователь</th>
                <th>Оплата</th>
                <th>Касса</th>
                <th>Дата</th>
                <th/>
            </tr>
            </thead>
            <tbody>
            {
                expense.map((item, index) => <Tbody item={item} index={index} key={item.id} user={user} kassa={kassa}
                                                    selectItem={selectItem} deleteExpense={deleteExpense}/>)
            }
            </tbody>
        </table>
    )
}

export default Thead