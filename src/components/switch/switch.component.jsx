

const Switch = ({switchStatus, handlerChangeSwitchStatus}) => {
    return(
        <div className={`switch-input ${switchStatus}`} onClick={handlerChangeSwitchStatus}>
            <span className="switch-btn"></span>
        </div>
    )
}

export default Switch;