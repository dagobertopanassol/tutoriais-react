import { Component } from "react";
import React from 'react';

//Componente extendido é tipo StateFull , aqui com estados omitidos, Botoes deve sem com ArrowFunction e sem estados (StateLess)
// this.props.children escopo de Classes o childrem é um parametro na hora de instanciar o botao no FrontEnd
class Button extends Component {
    render() {
        return (
            // <button>Salvar</button> Estatico
            <div>
                <p> {this.props.title} 
                    <button>Salvar - {this.props.children} </button>
                </p>
            </div>
        )
    }

}

export default Button; 