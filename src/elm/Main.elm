module Main (..) where

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)


main : Html
main =
  div
    [ class "container" ]
    [ div
        [ class "row" ]
        [ div
            [ class "col-xs-12" ]
            [ text "Elm Starter" ]
        ]
    ]
