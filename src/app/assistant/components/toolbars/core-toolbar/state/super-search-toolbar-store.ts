import { Mode } from '../../../../../constants/mode-enum';
import { ToolbarBaseModel } from '../../../../../models/toolbar-base-model';

export interface CoreToolbarState extends ToolbarBaseModel {
  mode: Mode.Core;
  action: 'workspace-discovery' | 'workspace-creation';
}
