import { useState } from 'react';
import { IdeaProps } from './Idea';

export const useIdea = (): IdeaProps => {
  const [value, onValueChange] = useState('');
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);
  const onUpVote = () => setUpVotes(v => v + 1);
  const onDownVote = () => setDownVotes(v => v + 1);
  const rating = upVotes - downVotes;

  return {
    value,
    onValueChange,
    upVotes,
    downVotes,
    rating,
    onUpVote,
    onDownVote
  };
};