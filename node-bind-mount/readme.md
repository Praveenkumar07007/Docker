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
