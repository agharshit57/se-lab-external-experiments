# Nagios Core – Localhost Monitoring (Ubuntu)
Nagios Core installation requires sudo and build tools. Follow the official Nagios Core guide for the current release and your Ubuntu version; package names and commands can vary.

Typical dependencies:
```bash
sudo apt update
sudo apt install -y autoconf gcc libc6 make wget unzip apache2 php libapache2-mod-php libgd-dev libssl-dev
```
Download the current stable Nagios Core source archive from the official Nagios download page, extract it, then from the extracted directory follow the official compile/install steps, including configure, make install, install-daemoninit, install-config and install-webconf. Create the web user with htpasswd, enable Apache CGI/rewrite modules, and restart Apache and Nagios.

Validate configuration:
```bash
sudo /usr/local/nagios/bin/nagios -v /usr/local/nagios/etc/nagios.cfg
sudo systemctl status nagios
```
Open http://localhost/nagios and authenticate with the account configured during setup.

Terms: host = monitored machine; service = check on a host; plugin = program that performs a check; notification = alert. Do not expose the monitoring interface publicly without access controls.
