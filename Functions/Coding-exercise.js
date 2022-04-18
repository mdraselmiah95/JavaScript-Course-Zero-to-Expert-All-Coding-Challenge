"use strict";

// Default Parameters

const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
