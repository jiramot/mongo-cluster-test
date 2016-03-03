#!/bin/bash

RS_NAME="$1"
RS_FACTOR=$2

if [ -z $1]
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
  docker run -P --name $name -d mongodb --noprealloc --configsvr --dbpath /data/db --port 27017
done  

