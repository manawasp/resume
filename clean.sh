awk '{gsub(/<script type="text\/javascript" src="\/build\.js"><\/script>/, "", $0); print}' dist/fr/index.html
awk '{gsub(/<script type="text\/javascript" src="\/build\.js"><\/script>/, "", $0); print}' dist/cn/index.html
awk '{gsub(/<script type="text\/javascript" src="\/build\.js"><\/script>/, "", $0); print}' dist/en/index.html
mv dist/en/index.html dist/index.html
rmdir dist/en
