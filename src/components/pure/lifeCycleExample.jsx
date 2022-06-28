//Ejemplo de componente de ipo clases
//que sirve para ver los metodos del ciclo de vida

import PropTypes from 'prop-types'
import React, { Component } from 'react'

class lifeCycleExample extends Component {
  constructor(props) {
    super(props)
    console.log("Cuando se instancia el componente")
  }

  componentWillMount(){
    console.log("willmount: antes del montaje del componente")

  }

  componentDidMount(){

    console.log("DidMount: justo al acabar el montaje del compnente, antes de pintarlo")
  }

  componentWillReceiveProps(){
    console.log("WillReceiveProps: si va a recibir nuevas props")
  }

  shouldComponentUpdate(){
    //Sirve para controlar si el componente
    //debe o no actualizarse
    //return true/false
  }

  componentWillUpdate(){
    console.log("WillUpdate: justo antes de actualizarse")
  }

  componentDidUpdate(){
    console.log("DisUpdate: justo despues de actualizarse")
  }

  componentWillMount(){
    console.log("WillUnmount: Justo despues de desaparecer")
  }

  
  render() {
    return (
      <div>lifeCycleExample</div>
    )
  }
}

export default lifeCycleExample