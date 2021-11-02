function User({match, income, expense, user}) {

    let iD = parseInt(match.params.id)

    function incomeUser() {
        return income.filter(item => item.kassaId === iD)
    }

    return (
        <div className={'col-md-6 offset-3'}>

            <h1>One Page</h1>
            <div className={'card'}>
                <ul className={'list-group'}>
                    {incomeUser().map(item => <li className={'list-group-item'} key={item.id}>
                        {user.map(data => {
                            if (item.userId === data.id) {
                                return <h5>{data.name}</h5>
                            }
                        })}
                    </li>)}
                </ul>
            </div>

        </div>
    )
}

export default User