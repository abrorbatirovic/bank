import Button from "@material-ui/core/Button";

function Add({pageName, toggle}) {
    return(
        <div className={'row'}>
            <div className={'col-md-9'}>
                <h1 className={'text-center'}>{pageName}</h1>
            </div>
            <div className={'col-md-3'}>
                <Button color="primary" variant="contained" onClick={toggle}>+ Добавить</Button>
            </div>
        </div>
    )
}

export default Add