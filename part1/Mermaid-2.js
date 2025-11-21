classDiagram
class User {
  +UUID id
  +string first_name
  +string last_name
  +string email
  +string password_hash
  +bool is_admin
  +datetime created_at
  +datetime updated_at

  +register(data)
  +update(data)
  +delete()
  +check_password(pass)
}

class Place {
  +UUID id
  +string title
  +string description
  +float price
  +float latitude
  +float longitude
  +UUID owner_id
  +datetime created_at
  +datetime updated_at

  +create(data, owner)
  +update(data)
  +delete()
  +add_amenity(amenity)
  +remove_amenity(amenity)
  +list_amenities()
}

class Review {
  +UUID id
  +UUID place_id
  +UUID user_id
  +int rating
  +string comment
  +datetime created_at
  +datetime updated_at

  +create(data, user, place)
  +update(data)
  +delete()
}

class Amenity {
  +UUID id
  +string name
  +string description
  +datetime created_at
  +datetime updated_at

  +create(data)
  +update(data)
  +delete()
}

class FacadeService {
  +register_user(data)
  +create_place(data, user_id)
  +submit_review(data, user_id)
  +get_places(filters)
  +manage_amenity(data)
}

%% Relationships
User "1" <-- "0..*" Place : owns
Place "1" <-- "0..*" Review : has
User "1" <-- "0..*" Review : writes
Place "0..*" o-- "0..*" Amenity : has_amenities

FacadeService --> User : uses
FacadeService --> Place : uses
FacadeService --> Review : uses
FacadeService --> Amenity : uses
