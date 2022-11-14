domaineKatil:
  system.join_domain:
    - name: muaddib.lab
    - username: administrator@muaddib.lab
    - password: VMware1!
    - restart: True

yerelKullanicilar1:
  user.present:
    - name: ccaglar
    - groups:
      - 'Remote Desktop Users'
      - Administrators
    - fullname: Cagri Caglar
    - maxdays: 120
    - password: {{pillar['yerelSifre']}}
  
yerelKullanicilar2:
  user.present:
    - name: yerelKullanici
    - groups:
      - 'Remote Desktop Users'
    - fullname: Yerel Kullanici
    - maxdays: 120
    - password: {{pillar['yerelSifre']}}

{% if pillar['vmType'] == 'Database' %}
  {% set uygulamaListesi = ['postgresql', 'putty'] %}
{% elif pillar['vmType'] == 'Application' %}
  {% set uygulamaListesi = ['python3_x64', 'putty'] %}
{% else %}
  {% set uygulamaListesi = ['putty'] %}
{% endif %}

day0Uygulamalar:
  pkg.installed:
    - pkgs: {{ uygulamaListesi }}

yerelGrainEkle:
  grains.present:
    - name: vmType
    - value: {{ pillar['vmType'] }}

belliBirGuncellemeKur:
  wua.installed:
    - updates:
      - KB2267602
      
tumKritikGuncellemeleriKur:
  wua.uptodate:
    - software: False
    - drivers: True
    - skip_reboot: False
    - skip_hidden: True
    - severities:
      - Critical
      - Important