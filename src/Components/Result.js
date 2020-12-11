const Result = props => {    
    const resultComponent = (
        <div className = 'resultContainer'>
            <div className = 'Title'>{props.result.Title}</div>
            <div className='description'></div>
        </div>
    )
    
    const ifNoResult = (
        <div className='noResultContainer'>
            <h1>Sorry! You still havent asked for anything yet!</h1>
        </div>
    )
    return (
        <>
            {props.result? resultComponent: ifNoResult}
        </>
    )
}

export default Result