import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Mode } from '../../../../constants';
import { ToolbarBaseModel } from '../../../../models';

export interface SuperSearchToolbarState extends ToolbarBaseModel {
  mode: Mode.SuperSearch;
  deepResearchActive: boolean;
}

const initialState: SuperSearchToolbarState = {
  mode: Mode.SuperSearch,
  deepResearchActive: false,
};

export const SuperSearchToolbarStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    updateDeepResearchActive(active: boolean): void {
      patchState(store, (state) => ({ ...state, deepResearchActive: active }));
    },
  })),
);
