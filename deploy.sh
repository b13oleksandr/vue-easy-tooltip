# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy docs'

git push -f https://github.com/b13oleksandr/tooltip-vue.git master:gh-pages

cd -
