import React from 'react';
import './PaymentType.css';
const PaymentType = () => {
  return (

    <section id="section4">

      <div className="paymenttypeContent">
        <h3>Você deve estar se perguntando, quanto vai custar tudo isso?</h3>
        <p>Você vai levar esse curso completo, e a oportunidade de faturar mais de 200 R$ por dia.</p>
        <h2>de R$ 97.90.</h2>
        <p>Por apenas:</p>
        <h1>6X DE 5,52 R$</h1>
        <h3>OU APENAS R$ 29,90 À VISTA</h3>
        <p>ATENÇÃO, AS VAGAS SÃO LIMITADAS!</p>
      </div>

      <div className="buttonContainer">
        <a href="https://pay.kiwify.com.br/FY5mlcB" target='_blank'>Quero começar agora !</a>
      </div>

      <div className="imgPayment">
        <img src="pagamentos.png" alt="formas de pagamento"/>
      </div>

      <div className="finalText">
        <img src="selo.png" alt="selo de garantia"/>
        <p>Ainda não tem certeza? Não se preocupe. Se o conteúdo descrito a cima não for o mesmo que você receber, você tem 07 dias de garantia e vamos devolver a quantia paga, sem burocracia! Lembrando que seu acesso a plataforma é VITALÍCIO e nosso curso é constantimente atualizado com novas técnicas e informações que vão fazer de você um Mestre de Entregas.</p>
      </div>

    </section>
    
  )
}

export default PaymentType