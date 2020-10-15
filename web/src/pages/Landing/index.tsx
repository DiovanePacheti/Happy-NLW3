import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/img/Logo.svg'
import { PageLanding, ContentWapper, Main, Location, EnterApp, IconFiArrowRight } from './styles';
const Landing:React.FC = () =>{
    return(
        <PageLanding>
            <ContentWapper>
                <img src={LogoImg} alt="logo da Happy" />
                <Main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite  orfanatos e mude o dia de muitas crianças.</p>

                    <Location>
                        <strong>Pelotas</strong>
                        <span>Rio Grande do Sul</span>
                    </Location>
                </Main>
                <EnterApp>
                    <Link to="/app"><IconFiArrowRight /></Link>
                </EnterApp>
            </ContentWapper>
        </PageLanding>
    )
};
export default Landing;