sudo docker compose down
sudo docker image rm freecodecamp-headerparser-api

git pull

sudo docker compose up -d

response = $(curl --silent https://headerparser.freecodecamp.org/api/hello)

if [ "$response" == "{greeting":"hello API!}" ]; then
    echo "API is working!"
else
    echo "ERROR: API is not working!"
fi