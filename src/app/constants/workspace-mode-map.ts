import { ModeMetadata } from '../models/mode-metadata-model';
import { CoreDataService, ResearchDataService } from '../services';
import { Mode } from './mode-enum';

export const WORKSPACE_MODE_MAP: Map<string, ModeMetadata> = new Map([
  ['super-search', { mode: Mode.SuperSearch, service: ResearchDataService }],
  ['core', { mode: Mode.Core, service: CoreDataService }],
]);
