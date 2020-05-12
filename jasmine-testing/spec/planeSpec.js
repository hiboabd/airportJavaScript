'use strict';

describe('Plane', function(){
  var plane
  var airport

  beforeEach(function(){
    plane = new Plane()
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });

  // it('can land at an airport', function(){
  //   expect(plane.land).not.toBeUndefined()
  // });

  it('can land at an airport 2', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});
