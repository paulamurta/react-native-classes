import {Dispatch, SetStateAction} from 'react';

export interface IPostCard {
  id: number;
  nome: string;
  descricao: string;
  imgperfil: string;
  imgPublicacao: string;
  likeada: boolean;
  likers: number;
}

export type PostCardProps = {
  post: IPostCard;
  updatePost: (updatedPost: IPostCard) => void;
};
