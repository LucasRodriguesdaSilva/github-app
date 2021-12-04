import useGithub from '../../hooks/github-hooks';
import Repositoryitem from '../repositoriy-item';
import * as S from './styled';
import React, {useState, useEffect} from 'react';

const Repositories = () => {
    const {githubState, getUserRepos, getUserStarred} = useGithub();
    const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if(githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        sethasUserForSearchRepos(githubState.repositories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login])
    return(
        <>
            {hasUserForSearchRepos ? (
                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.repositories.map((item) => (
                                <Repositoryitem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName = {item.full_name}/>
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.starred.map(item => (
                                <Repositoryitem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName = {item.full_name}/>
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ): (<></>)}
        </>
    )
}

export default Repositories;