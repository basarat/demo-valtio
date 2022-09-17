import { useState } from 'react';
import { IdeaProps } from './Idea';

export const useIdea = (): IdeaProps => {
  const [value, setValue] = useState('');
  const [votes, setVotes] = useState(0);
  const upVote = () => setVotes(v => v + 1);
  const downVote = () => setVotes(v => v - 1);

  return {
    value,
    setValue,
    votes,
    upVote,
    downVote,
  }
};
