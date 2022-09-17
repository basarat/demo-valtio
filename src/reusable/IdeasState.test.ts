import { createIdeasState } from './IdeasState';

test('Should start with one idea', () => {
  const state = createIdeasState();
  expect(state.ideas.length).toBe(1);
});

test('Should be able to add an idea', () => {
  const state = createIdeasState();
  state.addIdea();
  expect(state.ideas.length).toBe(2);
});

test('Should be able to remove all but the first idea', () => {
  const state = createIdeasState();
  state.addIdea();
  state.removeIdea();
  state.removeIdea();
  expect(state.ideas.length).toBe(1);
});