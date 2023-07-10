import React from 'react'

const NavReact = () => {
  return (
    <nav class="layout-nav">
        <p>Inicio</p>
        <p>Aplicaciones</p>
        <p>Servicios</p>
        <p>Contacto</p>
        <img src={require("./img/lupa.png")} alt="lupa" />
      </nav>
  )
}

export default NavReact