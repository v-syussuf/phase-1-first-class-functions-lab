const returnFirstTwoDrivers = function(drivers){
    console.log(drivers.slice(0,2));
   }
   const arrdrivers = ["James","John","Jill","Junior","Jack"]
   const drivers = returnFirstTwoDrivers(arrdrivers);

   const returnLastTwoDrivers = function(drivers) {
    if (drivers.length >= 2) {
     console.log(drivers.slice(-2));
    }
  };
  const driversArray = ["Driver1", "Driver2", "Driver3", "Driver4"];
  const lastTwoDrivers = returnLastTwoDrivers(driversArray);

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  const firstTwo = selectingDrivers[0](driversArray);
  const lastTwo = selectingDrivers[1](driversArray);
 
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  const fareDoubler = createFareMultiplier(2);
  const fareQuadrupler = createFareMultiplier(4);
  
  const originalFare = 10;
  const doubledFare = fareDoubler(originalFare);
  const quadrupledFare = fareQuadrupler(originalFare);
  
  console.log(doubledFare); 
  console.log(quadrupledFare);  
  
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fare_Doubler = createFareMultiplier(2);
  
  const original_Fare = 10;
  const doubled_Fare = fareDoubler(originalFare);
  
  console.log(doubledFare); 

  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fareTripler = createFareMultiplier(3);
  
  const original__Fare = 10;
  const tripledFare = fareTripler(originalFare);
  
  console.log(tripledFare); 
  
  function selectDifferentDrivers(drivers, driverSelectionFunction) {
    return driverSelectionFunction(drivers);
  }
  
  const drivers_Array = ["Driver1", "Driver2", "Driver3", "Driver4"];
  
  // Assuming you have defined returnFirstTwoDrivers and returnLastTwoDrivers functions
  const firstTwoDrivers = selectDifferentDrivers(driversArray, returnFirstTwoDrivers);
  const last_TwoDrivers = selectDifferentDrivers(driversArray, returnLastTwoDrivers);
  
  console.log(firstTwoDrivers);
  console.log(lastTwoDrivers);
  
  
 
  
  
  
  
  
  
   
