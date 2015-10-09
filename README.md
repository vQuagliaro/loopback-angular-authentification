# loopback-angular-authentification

## Requirements

* [Ansible](http://docs.ansible.com/intro_installation.html)
* [Vagrant](http://www.vagrantup.com/downloads.html)
* [VirtualBox](https://www.virtualbox.org/wiki/Downloads).
* nfs `sudo apt-get install nfs-kernel-server`
* [Fansible/tywin](https://github.com/fansible/tywin) to generate your Ansible provisioning
* npm and nodejs

## The loopback installation
We will now install strongloop to create our loopback application:

```shell
sudo npm install -g strongloop
```

## project setup
Server:
```shell
npm install
```
Angular:
```shell
cd client/
npm install
```

## run server
```shell
node .
```

