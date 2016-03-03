#!/bin/bash

RS_NAME="$1"
RS_FACTOR=$2

if [ -z $2]
then
  echo "Argument miss match"
  echo "$./craete_replica.sh $name $factor"
  exit
fi

echo "create RS $RS_NAME with factor $RS_FACTOR"
for (( i=0; i<$RS_FACTOR; i++ ))
do
  name=$RS_NAME"_s"$i
  echo "create $name"
  docker run -P --name $name -d mongodb --replSet $RS_NAME --noprealloc --smallfiles
  # docker inspect --format '{{ .NetworkSettings.IPAddress }}' $name
  host[$i]="$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' $name)"
done  

echo "IP: ${host[@]}"

#docker exec -it $RS_NAME_s0 mongo rs.initiate()