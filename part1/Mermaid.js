classDiagram
class PresentationLayer {
  <<Package>>
  +APIEndpoints()
  +AuthService()
  +PlaceService()
  +ReviewService()
  +AmenityService()
}

class BusinessLogicLayer {
  <<Package>>
  +UserModel
  +PlaceModel
  +ReviewModel
  +AmenityModel
  +Validation()
  +FacadeService()
}

class PersistenceLayer {
  <<Package>>
  +UserRepository
  +PlaceRepository
  +ReviewRepository
  +AmenityRepository
  +DatabaseConnector()
}

PresentationLayer --> BusinessLogicLayer : <<uses>> FacadeService
BusinessLogicLayer --> PersistenceLayer : <<uses>> Repositories
PresentationLayer ..> PersistenceLayer : (indirect) via FacadeService
