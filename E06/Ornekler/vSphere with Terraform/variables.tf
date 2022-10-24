variable "vsphereUser" {
  description = "User name for vCenter Login"
  type        = string
  sensitive   = true
}

variable "vspherePassword" {
  description = "Password for vCenter Login"
  type        = string
  sensitive   = true
}

variable "vcenterAddress" {
  description = "Address for vCenter"
  type        = string
}

variable "hostName" {
  description = "Host name to be used for deployment"
  type        = string
}

variable "datastoreName" {
  description = "Datastore name to be used for deployment"
  type        = string
}

variable "networkName" {
  description = "Network name for the VM"
  type        = string
}

variable "vmName" {
  description = "VM Name"
  type        = string
  validation {
    condition     = length(var.vmName) > 5
    error_message = "VM name must be longer than 5 characters."
  }
}

variable "templateName" {
  description = "VM Taslagi"
  type = string
}

variable "datacenterName" {
  description = "Name of the vCenter Data Center"
  type = string
}

variable "domain" {
  description = "Your domain. Will be used for guest hostname"
  type = string
}