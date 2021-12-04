import Header from '../header';
import * as S from './styled';


function Layout({children}) {
    
    return(
        <S.WrraperLayout>
            <Header/>
            {children}

        </S.WrraperLayout>
    )
}

export default Layout