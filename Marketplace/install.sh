#!/bin/sh

if [ apt ]
then
    pck=apt
elif [ dnf ]
then
    pck=dnf
else
    echo "No apt or dnf"
    exti 1
fi

echo "Instalando Angular.."

sudo $pck install nodejs
sudo $pck install npm

echo "Instalando Angular.."

sudo npm install -g @angular/cli
sudo npm install --save-dev @angular-devkit/build-angular

echo "Instalando bootstrap.."

sudo npm install bootstrap

