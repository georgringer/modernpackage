#! /bin/bash

DIR="$1"

if [ $# -ne 1 ]
then
	echo "Usage: $0 {new extension key}"
	exit 1
fi

if [ -d "$DIR" ]
then
	echo "Directory/extension '$DIR' exists already!"
else
	git clone git://github.com/georgringer/modernpackage.git $DIR --depth=1
	echo "$DIR created."

	cd $DIR && rm -rf .git && grep -rl modernpackage . |xargs sed -i -e "s/modernpackage/${PWD##*/}/"
	echo "Changed all occurrences of modernpackage to $DIR."
	echo "Have fun with your theme!"
fi
