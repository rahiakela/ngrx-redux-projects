import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { MyModel } from '../../models';

export const featureAdapter: EntityAdapter<MyModel> = createEntityAdapter({});
