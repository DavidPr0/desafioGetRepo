import React from "react";
import { RepositoryInfo } from './styles';
import { Repository } from "../../store/modules/repositories/types";
import { Button, Card, CardContent, CardActions } from '@material-ui/core';
import { repositoriesRequest } from "../../store/modules/repositories/actions";
import { useDispatch } from 'react-redux';
import StarBorderIcon from '@material-ui/icons/StarBorder';


type Props = {
    data: Repository[],
    newRepo: any,
}

const RepositoryList: React.FC<Props> = ({ data, newRepo }: Props) => {
    const dispatch = useDispatch();

    const addFavorite = (repository: Repository) => {
        const favorites: any = localStorage.getItem('favorites');
        const favoritesArr: any[] = JSON.parse(favorites);
        
        if (!favorites) {
          localStorage.setItem('favorites', JSON.stringify([repository]))
        }else{
            favoritesArr.push(repository);
            localStorage.setItem('favorites', JSON.stringify(favoritesArr))
        }
        dispatch(repositoriesRequest(newRepo));

    }

    const getFavorite = (repository: any) => {
        const favorites: any = localStorage.getItem('favorites');
        const favoritesArr: any[] = JSON.parse(favorites);
        console.log(newRepo);

        if(favoritesArr){
            let result = favoritesArr.find(repo => repo.id === repository.id)
            console.log(result);
            return result ? true : false;
        }
        
    }

    const deleteFavorite = (repository: any) => {
        const favorites: any = localStorage.getItem('favorites');
        const favoritesArr: any[] = JSON.parse(favorites);
        const newFavorites = favoritesArr.filter(item => item.id != repository.id);
        localStorage.removeItem('favorites');
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        dispatch(repositoriesRequest(newRepo));
    }

    return (
        <div>
            {
                data && data.map(repository => (
                    <RepositoryInfo key={repository.full_name}>
                        <Card>
                            <CardContent>
                            <header>
                                <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                                <div>
                                    <strong>{repository.full_name}</strong>
                                    <p>{repository.description}</p>
                                </div>
                            </header>
                            <ul>
                                <li>
                                    <strong>{repository.stargazers_count}</strong>
                                    <StarBorderIcon>Stars</StarBorderIcon>
                                </li>
                                <li>
                                    <strong>{repository.forks_count}</strong>
                                    <span>Forks</span>
                                </li>
                                <li>
                                    <strong>{repository.open_issues_count}</strong>
                                    <span>Issues Open</span>
                                </li>
                                <CardActions>
                                    {getFavorite(repository) ? (
                                    <Button onClick={() => deleteFavorite(repository)} variant="contained" color="secondary">
                                        Remover dos favoritos 
                                    </Button>
                                    ) : (
                                    <Button onClick={() => addFavorite(repository)} variant="contained" color="primary">
                                        Adicionar aos favoritos 
                                    </Button>
                                    )}
                                </CardActions>
                            </ul>
                            </CardContent>
                       </Card>
                    </RepositoryInfo>
                ))}
        </div>
    );
}

export default RepositoryList;
