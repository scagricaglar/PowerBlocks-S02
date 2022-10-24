resource "vsphere_virtual_machine" "vm" {
  name             = var.vmName
  resource_pool_id = data.vsphere_host.host.resource_pool_id
  datastore_id     = data.vsphere_datastore.ds.id

  num_cpus = 2
  memory   = 2048

  #Guest id is required for powerOn
  guest_id = "ubuntu64Guest"
  #To not to wait for IP allocation
  wait_for_guest_ip_timeout  = -1
  wait_for_guest_net_timeout = -1

  disk {
    label            = "disk0"
    size             = 35
    thin_provisioned = true
  }

  network_interface {
    network_id = data.vsphere_network.nw.id
  }

  clone {
    template_uuid = data.vsphere_virtual_machine.template.id
    customize {
      linux_options {
        host_name = var.vmName
        domain = var.domain
      }
      #Empty object for DHCP configuration of net interface
      network_interface {}
    }
  }
}