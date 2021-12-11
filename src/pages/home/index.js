import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeLayout   from '../../components/layouts/HomeLayout';
import LinkButton   from '../../shared/Button/LinkButton';
import NormalButton from '../../shared/Button/NormalButton';

const Home = () => {
  return (
    <HomeLayout>
      <NavLink to="user/doctor-profile"> perfil de doctor </NavLink>
      <NavLink to="user/doctor-profile"> perfil de paciente </NavLink>

      <div>
        <LinkButton text="Link Button de Prueba" href="#"/>
        <NormalButton text="Normal Button de Prueba" onClick={() => { alert('Hola mundo') }}/>
      </div>
    </HomeLayout>
  )
}

export default Home;
