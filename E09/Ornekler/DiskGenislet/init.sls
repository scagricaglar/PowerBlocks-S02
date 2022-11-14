include: 
  {% if grains['os_family'] == 'RedHat' %}
  - DiskGenislet.rhelExpandRootLVM
  - DiskGenislet.rhelResizeRootLVM
  {% elif grains['os_family'] == 'Windows' %}
  - DiskGenislet.winResize
  {% endif %}