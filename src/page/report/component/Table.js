function Table({item, index, income, expense}) {

    const IncomeExpense = [...income, ...expense]

    function totalPrice(){
        let sumIncome = 0
        let sumExpense = 0
        IncomeExpense.filter(data => data.userId === item.id).forEach(total=>{
            if(total.typeName)sumIncome += total.price
            else sumExpense += total.price
        })
        return sumIncome - sumExpense
    }

    totalPrice()
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
                {
                    IncomeExpense.filter(
                        data => data.userId === item.id
                    ).sort((a, b) => {
                            let date1 = new Date(a.date)
                            let date2 = new Date(b.date)
                            if (date1 > date2) return -1
                            if (date1 < date2) return 1
                            return 0
                        }
                    ).map(
                        fil => <li className={`list ${fil.typeName ? 'bg-income' : 'bg-expense'}`}
                                   key={fil.id}>{fil.typeName ? '' : '-'}{fil.price}</li>
                    )
                }
            </td>
            <td className={'m-auto'}>{totalPrice()}</td>
        </tr>
    )
}

export default Table