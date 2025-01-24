### clean up the whole system and delete every image container etc:
```
  docker system prune -a
```
### Build a Dockerfile and create a n image (execute the below command either from the directory where dockerfile is present, or replace . with path to dockerfile)

```
  docker build -t <tag_name> .
```
### check for list of images
```
docker ps
```
###

```
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Authenticate to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information
```

### run a image
```
docker run -it --rm sha256:89871f29e084e3df96860403fff8bc63410d1e77efec0a13086aeb0af459aab6
```
###  image will be build with this command
```
docker build -t app-bind-mount .
```
### Run a container from an image

```
 docker run -it --init -p <host_port>:<container_port> <image_name>
```

### Once built, you can run a container from this image using but it will only bind after doing change it will not reflect in container  side :
```
docker run -it --rm -p 3002<host_port>:3000<container_port> app-bind-mount
```

```
// for mapping the local host and docker file changes
 docker run -it --init -p 3002:3000 -v "%cd%":/prave/nodejs/node-bind-mound-project app-bind-mount-node:latest
// use this cammand to run the docker container
```


# Docker Volume

## What is a Docker Volume?
A Docker Volume is a storage mechanism used to persist data generated and used by containers. Unlike data stored in the container's filesystem, data in a volume is not deleted when the container stops or is removed. Volumes are managed by Docker and can also be shared between multiple containers.

## Why Use Docker Volumes?
### Persistence: Keeps your data safe even after the container is deleted.
### Efficiency: Avoids reinstalling dependencies (e.g., node_modules) every time a container restarts.
### Development: Allows you to sync your local code with the container while keeping certain directories (like node_modules) isolated and persistent.
### Sharing: Volumes can be shared between multiple containers.
How to Use Volumes with Node.js Projects
## Example: Persistent node_modules
To persist the node_modules directory across container restarts:

### Create a Volume:
```
docker volume create node_modules
```
### Run the Container with the Volume:
```
docker run -it \
  -v $(pwd):/app \
  -v node_modules:/app/node_modules \
  -p 3000:3000 \
  app-bind-mount-node:latest
```
-v $(pwd):/app: Mounts your local project directory into the container at /app.
-v node_modules:/app/node_modules: Mounts a Docker-managed volume to persist dependencies.
## Common Commands for Managing Volumes
List all volumes:
```
docker volume ls
```

Inspect a volume:
```
docker volume inspect node_modules
```

Remove unused volumes:
```
docker volume prune
```

Delete a specific volume:
```
docker volume rm node_modules
```

## Benefits of Using Volumes in Node.js
### No Overwriting of node_modules: Your dependencies won't be overwritten by local code changes during development.

### Faster Development: Skip reinstalling dependencies after restarting the container.

### Data Safety: Volumes ensure your data persists even if the container is stopped or removed.
