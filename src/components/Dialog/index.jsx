import "./dialog.style.css";

export function Dialog({ dialogRef }) {

  const cancelSuporte = () => {
    dialogRef.current.close();
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-conteudo">

        <div className="suporte-box">
          <h2>Central de Suporte</h2>

          <p>
            Se você estiver com dificuldades para acessar sua conta ou encontrar algum erro no sistema,
            nossa equipe de suporte está pronta para ajudar.
          </p>

          <div className="contatos-suporte">
            <a href="mailto:suporte@sistemaexemplo.com" className="contato">
              📧 suporte@sistemaexemplo.com
            </a>

            <a href="https://wa.me/5515999999999" target="_blank" className="contato">
              📱 WhatsApp: (15) 99999-9999
            </a>
          </div>

          <small className="horario">
            Atendimento de segunda a sexta, das 8h às 18h.
          </small>
        </div>

        <button className="cancelSuporte" onClick={cancelSuporte}>
          Cancelar
        </button>

      </div>
    </dialog>
  );
}