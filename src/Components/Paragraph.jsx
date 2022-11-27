



function Paragrapgh({paraClass,paraSize,paraText}) {

    return(
    <p className={paraClass} style={{textSize:paraSize}}> {paraText} </p>
    
    )
}


export default Paragrapgh