provider "vsphere" {
    user = var.vsphereUser
    password = var.vspherePassword
    vsphere_server = var.vcenterAddress
    allow_unverified_ssl = true
}

data "vsphere_datacenter" "vsphereDc" {
  name = var.datacenterName
}

data "vsphere_host" "host" {
  name          = var.hostName
  datacenter_id = data.vsphere_datacenter.vsphereDc.id
}

data "vsphere_datastore" "ds" {
  name          = var.datastoreName
  datacenter_id = data.vsphere_datacenter.vsphereDc.id
}

data "vsphere_network" "nw" {
  name          = var.networkName
  datacenter_id = data.vsphere_datacenter.vsphereDc.id
}

data "vsphere_virtual_machine" "template" {
  name          = var.templateName
  datacenter_id = data.vsphere_datacenter.vsphereDc.id
}