echo `awk '{gsub(/<script type="text\/javascript" src="\/build\.js"><\/script>/, "", $0); print}' dist/fr/index.html` > dist/fr/index.html
echo `awk '{gsub(/<script type="text\/javascript" src="\/build\.js"><\/script>/, "", $0); print}' dist/cn/index.html` > dist/cn/index.html
echo `awk '{gsub(/<script type="text\/javascript" src="\/build\.js"><\/script>/, "", $0); print}' dist/en/index.html` > dist/en/index.html
mv dist/en/index.html dist/index.html
rmdir dist/en
