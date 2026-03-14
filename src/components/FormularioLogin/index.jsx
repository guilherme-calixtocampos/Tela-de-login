import { useState } from 'react'
import { Botao } from '../Botao'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoEntrada } from '../CampoEntrada'
import { Label } from '../Label'
import './formulario-login.style.css'
import { CheckBox } from '../CheckBox'

export function FormularioLogin({ usuarios, src }) {

    const [mensagemErro, setMensagemErro] = useState("")
    const [modalAberto, setModalAberto] = useState(false)

    const [usuarioSalvo] = useState(() => {
        const dados = JSON.parse(localStorage.getItem("login"))
        return dados?.usuario || ""
    })

    function aoSubmeterForm(event) {
        event.preventDefault()

        const formData = new FormData(event.target)

        let usuarioDigitado = formData.get('usuarioLogin').trim()
        let senhaDigitada = formData.get('usuarioSenha').trim()
        const lembrarUsuario = formData.get('checkboxUsuario')

        if (lembrarUsuario) {
            const dadosLogin = {
                usuario: usuarioDigitado,
                senha: senhaDigitada
            }

            localStorage.setItem("login", JSON.stringify(dadosLogin))
        } else {
            localStorage.removeItem("login")
        }

        if (!usuarioDigitado || !senhaDigitada ) {
            return setMensagemErro("Preencha os campos necessários para o login")
        }
        
        const usuarioEncontrado = usuarios.find(function (usuario){
            return usuario.usuario === usuarioDigitado && usuario.senha === senhaDigitada
        })

        if (usuarioEncontrado) {
            setMensagemErro("")
            setModalAberto(true)
            setTimeout(() => {
                setModalAberto(false)
            }, 3000)

        } else {
            setMensagemErro("Usuário ou senha incorretos, por favor tente novamente!")
        }
    }

    return(
    
        <form onSubmit={aoSubmeterForm}>
            
            <CampoDeFormulario>
                
                <Label htmlFor='usuarioLogin'>Usuário:</Label>
                <CampoEntrada type='text' id='usuarioLogin' name='usuarioLogin' placeholder='Usuário' defaultValue={usuarioSalvo}/>

                <Label htmlFor='usuarioSenha'>Senha:</Label>
                <CampoEntrada type='password' id='usuarioSenha' name='usuarioSenha' placeholder='******'/>

                <Label htmlFor='checkboxUsuario'>
                    <CheckBox type='checkbox' id='checkboxUsuario' name='checkboxUsuario'/>
                    Lembrar Usuário
                </Label>
                
                
            </CampoDeFormulario>
            {mensagemErro && <p className='mensagemErro'>{mensagemErro}</p>}
                {modalAberto && (
                    <div className="modal-login">
                        <div className="modal-conteudo-login">
                            <p>Login realizado com sucesso!</p>
                            <img src={src}/>
                        </div>
                    </div>
                )}
            <Botao>Login</Botao>
            
        </form>
        
    )
}