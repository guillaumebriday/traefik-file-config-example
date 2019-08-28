# Traefik File Config Example

![Screenshot](https://raw.githubusercontent.com/guillaumebriday/traefik-file-config-example/master/screenshot.png?token=AB66WTUM5ALM44YMU63U3QS5M4KSC)

## Installation

Before starting, you need to update your `/etc/hosts` file:

```bash
$ sudo vim /etc/hosts
```

And past this line at the end of the file:
```
127.0.0.1   backend.localhost frontend.localhost
```

Install the project on your local machine:
```bash
$ git clone https://github.com/guillaumebriday/traefik-file-config-example.git
$ cd traefik-file-config-example/example
$ yarn install
$ yarn run nodemon index.js
```

Open a new terminal and setup [Traefik](https://traefik.io):
```bash
$ brew install traefik
$ cd traefik-file-config-example
$ traefik -c traefik.toml
```

## How to use it

Open [http://localhost:8080](http://localhost:8080) to see the [Traefik Web UI](https://docs.traefik.io/configuration/api/#dashboard-web-ui).

Open [http://backend.localhost](http://backend.localhost) to see your app on port 3000.

Open [http://frontend.localhost](http://frontend.localhost) to see your app on port 3001.

Open [http://backend.localhost/github](http://backend.localhost/github) to be redirected to [https://github.com/guillaumebriday/traefik-file-config-example](https://github.com/guillaumebriday/traefik-file-config-example).

Run curl to see the custom headers:

```bash
$ curl -I http://backend.localhost
...
X-Custom-Header: Leave a star
X-Frame-Options:
```

Uncomment the `basicAuth` related line in the `rules.toml` file to try basic auth on [http://backend.localhost](http://backend.localhost).

You can tail the log:

```bash
$ tail -f tmp/traefik.log
$ tail -f tmp/access.log
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
