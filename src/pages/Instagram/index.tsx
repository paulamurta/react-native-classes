import {useState} from 'react';
import {View, Pressable, FlatList, Image} from 'react-native';
import {instagramStyles} from './styles';
import {IPostCard} from './../../components/PostCard/types';
import PostCard from '../../components/PostCard';
import logo from '../../assets/images/logo.png';
import send from '../../assets/images/send.png';

export default function Instagram() {
  const [feed, setFeed] = useState<IPostCard[]>([
    {
      id: 1,
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de muitos bugs :)',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: false,
      likers: 0,
    },
    {
      id: 2,
      nome: 'Matheus',
      descricao: 'Isso sim é ser raiz!!!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },
    {
      id: 3,
      nome: 'Jose Augusto',
      descricao: 'Bora trabalhar Haha',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 3,
    },
    {
      id: 4,
      nome: 'Gustavo Henrique',
      descricao: 'Isso sim que é TI!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: false,
      likers: 1,
    },
    {
      id: 5,
      nome: 'Guilherme',
      descricao: 'Boa tarde galera do insta...',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false,
      likers: 32,
    },
  ]);

  function renderPostCard({item}: {item: IPostCard}) {
    const updatePost = (updatedPost: IPostCard) => {
      setFeed(prevFeed =>
        prevFeed.map(post => (post.id === updatedPost.id ? updatedPost : post)),
      );
    };

    return <PostCard post={item} updatePost={updatePost} />;
  }

  return (
    <View style={instagramStyles.container}>
      <View style={instagramStyles.header}>
        <Pressable>
          <Image source={logo} style={instagramStyles.logo} />
        </Pressable>

        <Pressable>
          <Image source={send} style={instagramStyles.send} />
        </Pressable>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={feed}
        renderItem={renderPostCard}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
