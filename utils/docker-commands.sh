docker-compose up

# The following in a separate terminal
docker exec -it jupyterreactwidgets_jupyter_1 bash
#cd /source
cp -r /source/* /tmp/source/
cd /tmp/source
pip install -e .

# One time?
jupyter nbextension enable --py --sys-prefix widgetsnbextension

jupyter nbextension install --py --symlink --user jupyterreactwidgets
jupyter nbextension enable --py --user jupyterreactwidgets