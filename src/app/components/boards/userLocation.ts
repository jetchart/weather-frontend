import { User } from "./../users/user";
import { Location } from "./../locations/location";

export class UserLocation {
  id: number;
  user: User;
  location: Location;
}
