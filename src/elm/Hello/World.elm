module Hello.World (..) where

import Html exposing (..)
import Html.Attributes exposing (..)


view : Html
view =
  p
    [ class "Hello__World" ]
    [ text "Hello, World!" ]
