import { signalStore, withState } from '@ngrx/signals';

type BodyState = {};

const initialState: BodyState = {};

export const BodyStore = signalStore(withState(initialState));
