<!-- Pour lancer l'application -->
npx next dev

<!-- j'automatise mes commits -->
sudo rm -rf .next
npx next build
git add .
git commit -m "another commit"
git push