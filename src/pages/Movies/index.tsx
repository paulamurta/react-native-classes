import api from '../../services/api';
import MovieCard from '../../components/MovieCard';
import {useEffect, useState} from 'react';
import {IMovie} from './types';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {moviesStyles} from './styles';

export default function Movies() {
  const [movies, setMovies] = useState<IMovie[]>();
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await api.get('r-api/?api=filmes');
        setMovies(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Erro ao buscar os filmes:', error);
      }
    }
    fetchData();
  }, []);

  function renderMovie({item}: {item: IMovie}) {
    return (
      <MovieCard
        id={item.id}
        nome={item.nome}
        sinopse={item.sinopse}
        foto={item.foto}
      />
    );
  }

  return (
    <View style={moviesStyles.container}>
      {isLoading ? (
        <View style={moviesStyles.loadingContainer}>
          <ActivityIndicator color="#09A6FF" size={'large'} />
        </View>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={moviesStyles.flatlistContent}
          data={movies}
          renderItem={renderMovie}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
}
