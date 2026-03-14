import './boas-vindas.style.css'

export function BoasVindas({ src }) {
    return (
        <section className="boas-vindas">
            <h1>Bem-vindo</h1>
            <p>Faça login para acessar seu app de treinos</p>
            <img src={src} alt="gif de academia" />
        </section>
    )
}