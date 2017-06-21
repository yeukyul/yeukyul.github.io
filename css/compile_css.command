#!/bin/bash
#compile all sass files

GREEN='\033[0;32m';
NC='\033[0m';
cd ~/Desktop/Personal/Projects/yeukyul.github.io/css;
sass sidebar.scss sidebar.css;
sass ../main.scss ../main.css;
echo -e "${GREEN}Sucessfully compiled all sass files ${NC}";
exit;
