import { storeState, changeState, stateControl, feed, blueFood, hydrate, superWater } from '../src/js/plant.js';

describe("storeState", () => {
  it("it will return an empty object", () => {
    expect(storeState()()).toEqual({});
  });
	
});

describe("changeState", () => {
  it("it will return an empty object", () => {
    expect(stateControl(feed)).toEqual({soil: 1});
  });
	
});

