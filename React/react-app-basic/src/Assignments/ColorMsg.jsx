function ColorMsg({userName, textColor}) {
    return(
        <h2 style={{color: textColor}}>Hello, {userName}!</h2>
    )
}

export default ColorMsg;