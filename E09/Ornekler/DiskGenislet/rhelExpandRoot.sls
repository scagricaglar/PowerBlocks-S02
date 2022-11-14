yeniDiskiHazirla:
  lvm.pv_present:
    - name: /dev/sdb

vgGenislet:
  lvm.vg_present:
    - name: {{ ((grains['lvm'].keys()) | list)[0] }}
    - devices: 
      - /dev/sda3
      - /dev/sdb
    - onchanges:
      - lvm: yeniDiskiHazirla
      
lvVeFsBuyutEklemeSonrasi:
  module.run:
    - name: lvm.lvextend
    - lvpath: /dev/{{ ((grains['lvm'].keys()) | list)[0] }}/root
    - extents: '+100%FREE'
    - onchanges:
      - lvm: vgGenislet
  cmd.run:
    - name: "xfs_growfs /"
    - onchanges:
      - module: lvVeFsBuyutEklemeSonrasi