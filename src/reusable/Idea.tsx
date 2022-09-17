export type IdeaProps = {
  value: string;
  setValue: (value: string) => void;

  votes: number;
  upVote: () => void;
  downVote: () => void;
}

export const Idea = (
  {
    value,
    setValue,
    votes,
    upVote,
    downVote
  }: IdeaProps
) => {

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={upVote}>Up</button>
      <div>{votes}</div>
      <button onClick={downVote}>Down</button>
    </div>
  );
};
