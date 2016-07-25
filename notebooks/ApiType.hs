module ApiType where

import Data.Text
import Servant.API

type UserAPI = "users" :> QueryParam "sortby" SortBy :> Get '[JSON] [User]

data SortBy = Age | Name

data User = User {
  name :: String,
  age :: Int
}

type UserAPI = "users" :> QueryParam "sortby" SortBy :> Get '[JSON] [User]
                -- equivalent to 'GET /users?sortby={age, name}'