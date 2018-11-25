## Synopsis

This application is part of a project involving Raspberry Pi to build a Weather Station. What differentiate this project from others is the setup that separates clearly front end and backend to provide modularity. The whole project is based on javascript.

## Description of the main project
The Project is a mix of technologies to provide on a screen information collected by weather sensors and data coming from public API. Because there was space left on the screen and it brings a nice touch, I added a slideshow of pictures located on a USB stick.

## Technologies used
The idea here was to bring modularity not only in the way software is built ( so we can easily add new features) but also in order to be able to bring more devices to cover additional rooms or possibilities. I thus decided to build a back-end with Node JS on a raspberry pi 3 Model B communicating with a raspberry pi zero connected to sensors. I am using MQTT as a Message Queue to send data received from sensors to the backend and Socket.io to update the information presented to the user Interface. in fact, the raspberry pi zero has two roles has in addition to collect data from sensor and ship them to the back end, it also receive from the backend the presentation layer built on vueJS and served to the browser of the RPi Zero where the screen is also connected.

## diagram of the solution
![diagram](/diagram-weather.jpg)

## Components used

**front end and sensors**

* Raspberry pi Zero w
* Adafruit BME280 sensor â€“ connected by i2c 
* HC-SR501 PIR motion sensor â€“ connected on GPIO 23
* Old VGA monitor (with HDMI to VGA adaptor)
* Button (not used)â€“ connected on GPIO 25 

**Backend**

* Raspberry pi 3 model B
* USB stick


## Motivation

This project is my first RPI project but I wanted to consolidate in a single project information I only found in many disparate sources of information. there is nothing fancy here but it exposes and integrate the result of many interesting concepts and technologies combined

#the UI - version 2 #
 Basic VueJs application with only one page (this is the first iteration of the project and I am planning to use other pages). The application integrates various sources of information:

 * Sensor's data received through socket.io by the back end
 * pictures served by the node js app

This is a more stylish version of the old UI I built. I removed completely the widget as refreshing its content was not optimal. I now fully leverage [OpenWeatherMap](https://openweathermap.org/) for getting both current weather and 5 days forecast.  I am also using the event created by the RPI button or a click on the chart to toggle between two components (24 hours temp forecast or 5 days forecast)
I also chanegd the architetcure to fetch API data in NOde JS and consume it at the browser level.
I also leveraged Vuetify which is a very nice framework to style the application. I spent time finding the best way to optimise the positionning and size of the picture.



## Installation

You can pull the app from bitbucket and run npm install to install dependancies. 
after you can run dev environment by using; 
> 'npm run serve'

to get a production ready release, you just need to run 
> 'npm run build'

then you need to deploy the content of the dist folder to your server


## References

Here are the links to the other applications that are part of the project:
* the UI version 2: [gitHub repo](https://github.com/Gerald1614/weather-ui)
* UI : [gitHub repo](https://github.com/Gerald1614/weather-ui-old)
* client node js app running on the RPI zero : [gitHub repo](https://github.com/Gerald1614/weather-client)
* backend : [gitHub repo](https://github.com/Gerald1614/weather-server)


## Contributors

Gerald Michelant

## License
You can do whatever you want with this code and learn to have fun with Node js, Vue Js, Raspberry pi...