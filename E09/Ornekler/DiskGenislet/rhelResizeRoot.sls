onHazirlik:
  pkg.installed:
    - name: cloud-utils-growpart
  cmd.run:
    - name: "echo 1 > /sys/class/block/sda/device/rescan"

partitionBuyut:
  cmd.run:
    #- name: "growpart /dev/sda 3"
    - name: {% raw %}donus=$(growpart /dev/sda 3); if [ $? -eq 0 ]; then echo "changed=yes comment='"${donus//[=]/:}"'"; exit=0; else echo "changed=no comment='"$donus"'"; exit=0; fi{% endraw %}
    - stateful: True

pvBuyut:
  cmd.run:
    - name: "pvresize /dev/sda3"
    - onchanges: 
      - cmd: partitionBuyut
      
lvVeFsBuyutBuyutmeSonrasi:
  module.run:
    - name: lvm.lvextend
    - lvpath: /dev/{{ ((grains['lvm'].keys()) | list)[0] }}/root
    - extents: '+100%FREE'
    - onchanges:
      - cmd: pvBuyut
  cmd.run:
    - name: "xfs_growfs /"
    - onchanges:
      - module: lvVeFsBuyutBuyutmeSonrasi