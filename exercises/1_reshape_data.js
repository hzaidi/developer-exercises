const assert = require('assert')

const initialArray = [
  {
    rideShareId: 1,
    members: [
      {
        name: 'John',
        vehicleMake: 'BMW',
      },
      {
        name: 'Michael',
        vehicleMake: 'Hyundai',
      },
    ],
  },
  {
    rideShareId: 2,
    members: [
      {
        name: 'Matt',
        vehicleMake: 'Volkswagen',
      },
      {
        name: 'Paul',
        vehicleMake: 'Ford',
      },
      {
        name: 'Ethan',
        vehicleMake: 'Nissan',
      },
    ],
  },
  {
    rideShareId: 3,
    members: [
      {
        name: 'Aurora',
        vehicleMake: 'Subaru',
      },
      {
        name: 'Chris',
        vehicleMake: 'Huffy',
      },
    ],
  },
]

const expectedArray = [
  {
    rideShareId: 1,
    numberMembers: 2,
  },
  {
    rideShareId: 2,
    numberMembers: 3,
  },
  {
    rideShareId: 3,
    numberMembers: 2,
  },
]

// Break it down in higher order functions for testability and reusability
const rideMemberCount = (members) => members.length;
const flattenRide = ({ rideShareId, members }) => ({ rideShareId, numberMembers: rideMemberCount(members) });
const flattenRideshareArray = (array) => array.map(flattenRide);



assert.deepEqual(expectedArray, flattenRideshareArray(initialArray), 'Arrays are not equal') || console.log('Success')

const membersArray = [{ name: 'Chris', vehicleMake: 'Huffy' }, { name: 'Mike', vehicleMake: 'Ford' }]
assert.equal(2, rideMemberCount(membersArray), 'Members count are incorrect') || console.log('Success')

const unflattenRide = { rideShareId: 1, members: [{ name: 'Chris', vehicleMake: 'Huffy' }]};
assert.deepEqual({ rideShareId: 1, numberMembers: 1 }, flattenRide(unflattenRide), 'Ride Flatten incorrectly') || console.log('Success')

/*
When run with "node 1_reshape_data.js" you should see the
the following on the console:

Success
 */