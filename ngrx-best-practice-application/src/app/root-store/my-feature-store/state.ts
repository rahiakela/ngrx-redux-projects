import {EntityAdapter, createEntityAdapter, EntityState} from '@ngrx/entity';
import { MyModel } from '../../models';

export const featureAdapter: EntityAdapter<MyModel> = createEntityAdapter({
  selectId: model => model.id,
  sortComparer: (a: MyModel, b: MyModel) => b.someDate.toString().localeCompare(a.someDate.toString())
});

export interface State extends EntityState<MyModel> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});
