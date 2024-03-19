import {Dispatch, SetStateAction} from 'react';

export type SimpleModalProps = {
  isModalOn: boolean;
  setIsModalOn: Dispatch<SetStateAction<boolean>>;
};
