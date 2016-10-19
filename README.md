sass --watch ui/stylesheets/application.sass:build/app/stylesheets/application.css

babel --watch --plugins transform-react-jsx ui/javascripts --out-file build/app/javascripts/application.js
