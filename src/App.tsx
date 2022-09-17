import { Idea } from './reusable/Idea';
import { useSnapshot } from 'valtio';
import { ideasState } from './reusable/IdeasState';

function App() {
  const snap = useSnapshot(ideasState);

  return (<div className='app'>
    <div className='row'>
      <button onClick={() => snap.addIdea()}>➕</button>
      <button onClick={() => snap.removeIdea()}>➖</button>
    </div>

    {snap.ideas.map((ideaState, i) => <Idea key={i} {...ideaState} />)}

    <h3>Total Votes: {
      snap.ideas.reduce((total, ideaState) => total + ideaState.upVotes + ideaState.downVotes, 0)
    }</h3>
  </div>);
}

export default App;