function Card({history,item, income, expense}) {

    function incomePrice() {
        let sum = 0
        income.forEach(data => {
            if (data.kassaId === item.id) {
                sum += data.price
            }
        })
        return sum
    }

    function expensePrice() {
        let sum = 0
        expense.forEach(data => {
            if (data.kassaId === item.id) {
                sum += data.price
            }
        })
        return sum
    }

    function onePage(id){
        history.push('/отчет/касса/' + id)
    }

    return (

        <div className={'col-md-4'}>
            <div className={'card card-padding'} onClick={()=>onePage(item.id)}>
                <div className={'card-header'}>{item.name}</div>
                <div className={'card-body'}>
                    {incomePrice() - expensePrice()}
                </div>
            </div>
        </div>
    )
}

export default Card