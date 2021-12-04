import * as S from "./styled";

const Repositoryitem = ({name, linkToRepo, fullName}) => {
    return(
        <S.Wrapper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
            <S.WrapperFullName>Full Name: </S.WrapperFullName>
            <S.WrapperLink 
                href={linkToRepo} target="_blank" rel="noreferrer">
                    {fullName}
            </S.WrapperLink>
            
        </S.Wrapper>
    );
}

export default Repositoryitem;