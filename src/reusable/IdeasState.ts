import { IdeaProps } from './Idea';
import { createIdeaState } from './IdeaState';
import { proxy } from 'valtio';

type IdeasState = {
  ideas: IdeaProps[];
  addIdea: () => void;
  removeIdea: () => void;
}

export const createIdeasState = (): IdeasState => {
  const state = proxy({
    ideas: [createIdeaState()],
    addIdea: () => state.ideas.push(createIdeaState()),
    removeIdea: () => {
      if (state.ideas.length > 1) {
        state.ideas.pop();
      }
    },
  });

  return state;
};

export const ideasState = createIdeasState();