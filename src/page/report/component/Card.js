function Card({history, item, income, expense}) {

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

    let a = [...income, ...expense]

    return (

        <div className={'col-md-4 text-center'}>
            <div className={'card card-padding my-3'}>
                <div className={'card-header'}><h3 className={'text-center'}>{item.name}</h3></div>
                <div className={'card-body'}>
                    <h3>{incomePrice() - expensePrice() + ' uzs'}</h3>
                </div>
            </div>
            <div className={'card card-padding'}>
                <div className={'card-footer'}>
                    {
                        a.filter(data => data.kassaId === item.id).sort((a, b) => {
                            let date1 = new Date(a.date)
                            let date2 = new Date(b.date)
                            if (date1 < date2) return -1
                            if (date1 > date2) return 1
                            return 0
                        }).map((item, index) => <h3 key={index} className={`${item.typeName ? 'bg-income' : 'bg-expense'}`}>
                            {item.typeName? 'Kirim: ' : 'Chiqim: '} {item.price} <span className={'date'}>{item.date}</span>
                        </h3>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Card