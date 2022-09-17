import { IdeaProps } from './Idea';
import { proxyWithComputed } from 'valtio/utils';

export const createIdeaState = (): IdeaProps => {
  const state = proxyWithComputed({
    value: '',
    onValueChange: (value: string) => state.value = value,
    upVotes: 0,
    downVotes: 0,
    onUpVote: () => state.upVotes++,
    onDownVote: () => state.downVotes++
  }, {
    rating: (snap) => snap.upVotes - snap.downVotes,
  });

  return state;
}