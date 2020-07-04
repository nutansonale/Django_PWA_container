# pwa_rvce [![Build Status](https://travis-ci.com/nutansonale/pwa_rvce.svg?branch=master)](https://travis-ci.com/nutansonale/pwa_rvce)
A simple PWA implementation inside docker container

## Used Tools <img src="https://avatars0.githubusercontent.com/u/1525981?s=200&v=4" width="50" height="50"><img src="https://avatars3.githubusercontent.com/u/27804?s=200&v=4" width="50" height="50"><img src="https://avatars0.githubusercontent.com/u/5429470?s=200&v=4" width="50" height="50">

* docker
* docker-compose
* travis
* java-script      
* Django                     2.2       
 * django-progressive-web-app 0.1.1     
 * django-webpush             0.3.1     
 * djangorestframework        3.11.0         
 * pip                        20.0.2        
 * py-vapid                   1.7.0     
 * pycparser                  2.19      
 * pytz                       2019.3    
 * pywebpush                  1.9.4       
 * certifi                    2019.11.28  
 
### Project structure
<pre>
-login_pwa
  |
  --login
     |
     --__pycache__
     --migrations
     --static
     --templates
  --login_pwa
    |
    --__init__.py
    --settings.py
    --url.py
    --wsgi.py
  --db.sqlite3
  --manage.py</pre>

Here i have built a container that contains the progressive web application, built using the Django framework. The application contains a simple service worker along with mainfest file. Here the service worker is served as a template form rather than a static file. the Application itself is more of a demo of how a pwa can be implemented and that can be containerized.

testing commit
