import './Ebook.css';

const Ebook = () => {
  return (
    <section id='section6'>

      <h1><strong>E-book Mestre das Entregas</strong></h1>

      <div className="ebookContent">
        <img src="./ebook.png" alt="ebook" />
        <div>
          <h2><strong>Tudo oque você precisa saber antes de fazer entregas</strong></h2>
          <p>E-book completo com todas as informações necessárias para começar nesse ramo de entregas. Além de todo o processo teórico, você encontrará: Dicas dos melhores veículos para entregas, informações financeiras e como prometido os contatos das melhores distribuidoras de São Paulo, RJ, BH e Curitiba.</p>
        </div>
      </div>

      <div className="buttonContainer">
        <a href="https://pay.kiwify.com.br/FY5mlcB" target='_blank'>Quero começar agora mesmo!</a>
      </div>

    </section>
  )
}

export default Ebook;