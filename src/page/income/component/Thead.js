import Tbody from './Tbody'

function Thead({income, user, kassa, selectItem, deleteIncome}) {

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
                income.map((item, index) => <Tbody
                    item={item} index={index} key={item.id}
                    user={user} kassa={kassa} selectItem={selectItem} deleteIncome={deleteIncome}/>)
            }
            </tbody>
        </table>
    )
}

export default Thead