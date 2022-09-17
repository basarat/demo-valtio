import { createIdeaState } from './IdeaState';

test('Should have default values', () => {
  const state = createIdeaState();
  expect(state.value).toBe('');
  expect(state.upVotes).toBe(0);
  expect(state.downVotes).toBe(0);
  expect(state.rating).toBe(0);
});

test('Can change Idea value', () => {
  const state = createIdeaState();
  state.onValueChange('Valtio')
  expect(state.value).toBe('Valtio');
});

test('Can Vote', () => {
  const state = createIdeaState();
  state.onUpVote();
  state.onUpVote();
  state.onUpVote();
  state.onDownVote();
  expect(state.upVotes).toBe(3);
  expect(state.downVotes).toBe(1);
  expect(state.rating).toBe(2);
});