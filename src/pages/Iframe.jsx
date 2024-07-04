import React from 'react';
import './Iframe.css';

const Iframe = () => {
  return (
    <section id='section1'>
      <div className='iframeContainer'>

        <div className='iframeContent'>
          <h1>
            Aprenda como faturar mais de <strong>4 mil reais</strong> por mês fazendo <strong>entregas em sua região</strong>
          </h1>
          <h3>Mesmo que você nunca tenha feito entregas antes</h3>
        </div>

        <div className="videoContainer">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/E64P6NKqmRo?si=OoLQ43puo2cn6ZtU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        
        <div className="buttonContainer">
          <a href="https://pay.kiwify.com.br/FY5mlcB" target='_blank'>Quero começar agora mesmo!</a>
        </div>
        
        <div className="imgPayment">
          <img src="pagamentos.png" alt="formas de pagamento"/>
        </div>
        

      </div>
    </section>
  )
}

export default Iframe