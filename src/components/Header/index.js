import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo2.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              Diego Blues
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Diego Bllues"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
