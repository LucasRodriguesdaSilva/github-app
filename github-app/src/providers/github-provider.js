import { useCallback } from "react";
import {useState, createContext} from "react";
import api from "../services/api";

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],

});

const GithubProvider = ({children}) => {
    const [githubState, setgithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            htmlUrl: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            publicGists: 0,
            publicRepos: 0,

            
        },
        repositories: [],
        starred: [],
    });

    const getUser = (userName) => {
        setgithubState(prevState => ({...prevState,
            loading: !prevState.loading,
        }));


        api.get(`users/${userName}`).then(({ data }) => {

            setgithubState(prevState => ({...prevState,
                hasUser: true,
                
                user: {
                    id: data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    htmlUrl: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    publicGists: data.public_gists,
                    publicRepos: data.public_repos,
            }}))

        }).finally(() => {
            setgithubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }))
        });

    }

    const getUserRepos = (username) => {

        api.get(`users/${username}/repos`).then(({ data }) => {

            setgithubState(prevState => ({...prevState,
                
                repositories: data,
            
            
            }))

        })

    }

    const getUserStarred = (username) => {

        api.get(`users/${username}/starred`).then(({ data }) => {

            setgithubState(prevState => ({...prevState,
                
                starred: data,
            
            
            }))

        })

    }

    const contextValue = {
        githubState,
        getUser: useCallback(
            (userName) => {
                getUser(userName)
            },
            [],
        ),
        getUserRepos: useCallback(
            (userName) => {
                getUserRepos(userName)
            },
            [],
        ),
        getUserStarred: useCallback(
            (userName) => {
                getUserStarred(userName)
            },
            [],
        )
    }

    return <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
}

export default GithubProvider;