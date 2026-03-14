import './pagina.style.css'

export function Pagina({ children }) {
    return (
        <div className="pagina">
            {children}
        </div>
    )
}