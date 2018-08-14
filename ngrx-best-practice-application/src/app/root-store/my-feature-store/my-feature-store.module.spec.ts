import { MyFeatureStoreModule } from './my-feature-store.module';

describe('MyFeatureStoreModule', () => {
  let myFeatureStoreModule: MyFeatureStoreModule;

  beforeEach(() => {
    myFeatureStoreModule = new MyFeatureStoreModule();
  });

  it('should create an instance', () => {
    expect(myFeatureStoreModule).toBeTruthy();
  });
});
