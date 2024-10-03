import turtlesPic from "../images/turtles.png";
import winePic from "../images/wine.png";
import facePic from "../images/face.png";

export const mockEvents = [
  {
    id: "1",
    date: "2024-09-15",
    city: "New York",
    pictureName: "Trutles",
    status: "FREE",
    info: "Join us for a wonderful painting evening.",
    price: 50,
    media: turtlesPic,  // Use the imported image here
    maxNumberOfPeople: 20,
    availableSpotsLeft: 5,
    startTime: "18:00",
    endTime: "21:00"
  },
  {
    id: "2",
    date: "2024-09-20",
    city: "Los Angeles",
    pictureName: "Cherry Wine",
    status: "BOOKED",
    info: "A relaxing evening with paint and wine.",
    price: 60,
    media: winePic,  // Use the imported image here
    maxNumberOfPeople: 25,
    availableSpotsLeft: 0,
    startTime: "19:00",
    endTime: "22:00"
  },
  {
    id: "3",
    date: "2024-10-01",
    city: "San Francisco",
    pictureName: "Face",
    status: "FREE",
    info: "Enjoy a fun-filled evening of painting.",
    price: 45,
    media: facePic,  // Use the imported image here
    maxNumberOfPeople: 15,
    availableSpotsLeft: 10,
    startTime: "17:00",
    endTime: "20:00"
  }
];
  