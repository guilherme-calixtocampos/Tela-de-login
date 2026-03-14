import './botao-header.style.css'

export function BotaoHeader({ children, ...props }) {

    
    return(
        <button className='botaoHeader' {...props}>
            {children}
        </button>
    )
}