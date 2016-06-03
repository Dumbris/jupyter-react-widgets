
*NOTE*: The following instructions are from the project template and are incomplete.

- To release a new version of jupyterreactwidgets on fury.io:

Update _version.py (set release version, remove 'dev')
git add and git commit
python setup.py sdist
#python setup.py bdist_wheel
curl -F package=@<file> https://TBD@push.fury.io/roam/
git tag -a X.X.X -m 'comment'
Update _version.py (add 'dev' and increment minor)
git add and git commit
git push
git push --tags

- To release a new version of jupyter-react-widgets on NPM:

# nuke the  `dist` and `node_modules`
git clean -fdx
npm install
npm publish
