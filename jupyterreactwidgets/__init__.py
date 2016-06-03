from ._version import version_info, __version__

from .reactwidgets import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyter-react-widgets',
        'require': 'jupyter-react-widgets/extension'
    }]
