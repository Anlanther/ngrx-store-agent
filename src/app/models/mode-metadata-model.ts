import { Type } from '@angular/core';
import { Mode } from '../constants/mode-enum';
import { BaseAgentService } from './base-agent-service-model';

export interface ModeMetadata {
  mode: Mode;
  service: Type<BaseAgentService>;
}
