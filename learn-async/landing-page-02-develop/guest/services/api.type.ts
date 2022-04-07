

export interface Ilogin { email: string; password: string }
export interface IContanct {
  fullName: string,
  email: string,
  topic: string,
  content: string,
}


export interface IBooking {
  customerName: string;
  email: string;
  phoneNumber: string;
  startDate: string;
  endDate: string;
  roomType: string;
  roomNumber: string;
  numAdult: number;
  numChildren: number;
}