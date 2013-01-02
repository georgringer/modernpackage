#! /bin/bash

DIR="$1"

if [ $# -ne 1 ]
then
	echo "Usage: $0 {new extension key}"
	exit 1
fi

if [ -d "../$DIR" ]
then
	echo "Directory/extension '$DIR' exists already!"
else
	cp -rf "../modernpackage" "../$DIR"
	echo "$DIR created."
	cd ../$DIR && grep -rl modernpackage . |xargs sed -i -e "s/modernpackage/$DIR/"
	echo "Changed all occurrences of modernpackage to $DIR."
	echo "Have fun with your theme!"
fi