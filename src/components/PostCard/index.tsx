import {Image, Text, View, Pressable} from 'react-native';
import {PostCardProps} from './types';
import {postCardStyles} from './styles';
import {useState} from 'react';

export default function PostCard({post, updatePost}: PostCardProps) {
  const [newPost, setNewPost] = useState(post);

  function like() {
    const updatedPost = {
      ...post,
      likeada: !post.likeada,
      likers: post.likeada ? post.likers - 1 : post.likers + 1,
    };
    setNewPost(updatedPost);
    updatePost(updatedPost);
  }

  function carregaIcone(likeada: boolean) {
    return likeada
      ? require('./../../assets/images/likeada.png')
      : require('./../../assets/images/like.png');
  }

  return (
    <View style={postCardStyles.areaFeed}>
      <View style={postCardStyles.viewPerfil}>
        <Image
          source={{uri: post.imgperfil}}
          style={postCardStyles.fotoPerfil}
        />

        <Text style={postCardStyles.nomeUsuario}> {post.nome} </Text>
      </View>

      <Image
        resizeMode="cover"
        style={postCardStyles.fotoPublicacao}
        source={{uri: post.imgPublicacao}}
      />

      <View style={postCardStyles.areaBtn}>
        <Pressable onPress={like}>
          <Image
            source={carregaIcone(post.likeada)}
            style={postCardStyles.iconelike}
          />
        </Pressable>
        <Pressable style={postCardStyles.btnSend}>
          <Image
            source={require('./../../assets/images/send.png')}
            style={postCardStyles.iconelike}
          />
        </Pressable>
      </View>

      {post.likers > 0 ? (
        <Text style={postCardStyles.likes}>
          {post.likers} {post.likers > 1 ? 'curtidas' : 'curtida'}
        </Text>
      ) : null}

      <View style={postCardStyles.viewRodape}>
        <Text style={postCardStyles.nomeRodape}>{post.nome}</Text>

        <Text style={postCardStyles.descRodape}>{post.descricao}</Text>
      </View>
    </View>
  );
}
