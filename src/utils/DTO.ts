export interface Transitdata {
  arrivalDate: string;
  createdAt: string;
  currentLocation: string | null;
  departureDate: string;
  id: string;
  seatsbooked: number[];
  tripEnded: boolean;
  tripStarted: boolean;
  vehicle: {
    id: string;
    imagePaths: string[];
    seats: number;
    status: number;
    vehicleColor: string;
    vehicleNumber: string;
    vehiclePassengerCap: number;
    vehicleType: number;
  };
}

export interface Terminaldata {
  arrival: string;
  arrivalState: string;
  bookings: null;
  departure: string;
  departureState: string;
  id: string;
  price: number;
  pricediscountpercent: number;
  transits: null;
  vehicles: null;
}
