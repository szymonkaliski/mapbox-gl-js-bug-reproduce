# mapbox-gl-js-bug-reproduce

Code to reproduce bug with filtering breaking on overzoomed tiles.

## setup

1. `./get-indonesia-tiles.sh`
2. `npm install`
3. `npm start`

## bug

1. zoom in a little bit (13+ zoom level so mapbox overzooms)
2. select filtering - tile disappears

If 2. is done on proper zoom level (12) then filtering works.


