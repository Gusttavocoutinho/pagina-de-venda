import React from 'react';
import './ReadMore.css';

const ReadMore = () => {
  return (
    
    <section id="section3">

      <div className="readmoreContainer">
        <div className="readmoreTitle">
          <h1><strong>Informações sobre o trabalho de entregas</strong></h1>
        </div>
        <div className="readmoreContent">
          <div className="card">
            <i className="fa-solid fa-clock"></i>
            <div >
              <h2>Entregas tem o tempo médio de 1 a 3 minutos.</h2>
              <p>Esse é o tempo que você gastará durante cada entrega, assim terminando o serviço em poucas horas.</p>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-paper-plane"></i>
            <div>
              <h2>As entregas acontecem na mesma região.</h2>
              <p>Cada saída acontece na mesma região, majoritariamente no mesmo bairro</p>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-box"></i>
            <div>
              <h2>Cada entregador tem direito a duas saidas.</h2>
              <p>A maioria das distribuidoras fazem saídas em dois horários, manhã e tarde. Quem finalizar as entregas a tempo, poderá participar da segunda saída e ganhar um extra no dia.</p>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-thumbtack"></i>
            <div>
              <h2>O entregador tem a opção de escolher a região das entregas.</h2>
              <p>No processo seletivo, o entregador pode escolher em qual região ele deseja atuar. Ex: Zona norte, Zona leste, Zona sul, Zonza oeste.</p>
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <a href="https://pay.kiwify.com.br/FY5mlcB" target='_blank'>Quero me tornar um mestre das entregas</a>
        </div>
      </div>

    </section>

  )
}

export default ReadMore;