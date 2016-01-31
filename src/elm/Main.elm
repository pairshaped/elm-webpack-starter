module Main (..) where

import Html exposing (..)
import Html.Attributes exposing (..)
import Hello.World exposing (hello)


main : Html
main =
  div
    [ class "row" ]
    [ div
        [ class "col-xs-12" ]
        [ text hello ]
    ]
