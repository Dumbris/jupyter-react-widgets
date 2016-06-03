jupyter-react-widgets
===============================

React-based widgets for Jupyter

Installation
------------

To install use pip:

    $ pip install jupyterreactwidgets
    $ jupyter nbextension enable --py --sys-prefix jupyterreactwidgets


For a development installation (requires npm),

    $ git clone https://github.com/roaminsight/jupyter-react-widgets.git
    $ cd jupyter-react-widgets
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --user jupyterreactwidgets
    $ jupyter nbextension enable --py --user jupyterreactwidgets
