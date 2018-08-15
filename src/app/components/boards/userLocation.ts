import { User } from "./../users/user";
import { Location } from "./../locations/location";

export class UserLocation {
  id: String;
  user: User;
  location: Location;
}
