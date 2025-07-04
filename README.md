# Header Parser Microservice

My solution for one of the tasks from [freecodecamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice). This task involved creation of simple timestamp microservice according to the given guidelines that can be found in the above link. The solution is currently available on [my website](https://headerparser.profresor.net)

## Requirements

The only requirement is Docker, which can be installed from [official website](https://www.docker.com/products/docker-desktop/)


## Setup

Micro service can be run using the following command run from the project directory:

```
sudo docker compose up -d
```

As the result, the microservice will be available at 127.0.0.1:10001.


NOTE: [<i>compose.yaml</i>](https://github.com/MrResor/freecodecamp-headerparser/blob/main/compose.yaml) should be updated with volume paths that correspond to the file layout on your machine.

## Description

The documentation of the application endpoints can be found under [<i>/api/docs</i>](https://headerparser.profresor.net/api/docs).

## NOTES

Due to usage of reverse proxy on my server, 'x-forwarded-for' header is used to determine the IP of the requester, instead of 'host' header. If you plan on using this program on your local machine or on machine where reverse proxy is not necessary please modify [this file](https://github.com/MrResor/freecodecamp-headerparser/blob/main/src/api/whoami/index.mjs)