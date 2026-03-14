import './fundo-login.style.css'
export function FundoLogin({...props}) {
    return(
        <div {...props} className="fundo">
            {props.children}
        </div>
    )
}
