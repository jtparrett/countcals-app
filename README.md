cd stylesheets/
bourbon install
cd ../
sass --watch stylesheets/application.sass:build/app/stylesheets/application.css

cd build/
php -S 0.0.0.0:3000
