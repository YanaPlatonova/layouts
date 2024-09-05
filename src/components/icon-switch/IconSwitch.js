import './IconSwitch.css'

function IconSwitch({icon,onSwitch}){
    return(
        <button className="btn-icon" onClick={onSwitch}>
            <i className="material-icons" style={{color:'#696969', fontSize:'32px'}}>{icon}</i>
        </button>
    )
}

export default IconSwitch;