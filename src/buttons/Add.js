function Add({pageName, toggle}) {
    return(
        <div className={'row'}>
            <div className={'col-md-9'}>
                <h1 className={'text-center'}>{pageName}</h1>
            </div>
            <div className={'col-md-3'}>
                <button onClick={toggle} className={'btn btn-outline-primary'}>+ Add</button>
            </div>
        </div>
    )
}

export default Add