const express = require("express");
const app = express();

const rest_appliance_system_version_ = require("./responses/rest_appliance_system_version_");
const api_vcenter_datacenter = require("./responses/api_vcenter_datacenter");
const api_vcenter_cluster = require("./responses/api_vcenter_cluster");
const rest_com_vmware_cis_session = require("./responses/rest_com_vmware_cis_session");
const api_vcenter_host = require("./responses/api_vcenter_host");
const api_vcenter_datastore = require("./responses/api_vcenter_datastore");
const api_vcenter_namespace_management_distributed_switch_compatibility = require("./responses/api_vcenter_namespace_management_distributed_switch_compatibility");
const api_vcenter_namespaces_user_namespaces = require("./responses/api_vcenter_namespaces_user_namespaces");
const api_vcenter_network = require("./responses/api_vcenter_network");
const api_vcenter_vm_hosts_host_14 = require("./responses/api_vcenter_vm_hosts_host_14");
const api_vcenter_vm_vm_20_guest_identity = require("./responses/api_vcenter_vm_vm_20_guest_identity");
const api_vcenter_vm_vm_21_guest_identity = require("./responses/api_vcenter_vm_vm_21_guest_identity");
const api_vcenter_vm_vm_23_guest_identity = require("./responses/api_vcenter_vm_vm_23_guest_identity");
const api_vcenter_vm_vm_22_guest_identity = require("./responses/api_vcenter_vm_vm_22_guest_identity");
const api_vcenter_vm_vm_43_guest_identity = require("./responses/api_vcenter_vm_vm_43_guest_identity");
const api_vcenter_vm_vm_44_hardware_ethernet = require("./responses/api_vcenter_vm_vm_44_hardware_ethernet");
const api_vcenter_vm_vm_44 = require("./responses/api_vcenter_vm_vm_44");
const api_vcenter_vm_vm_44_guest_identity = require("./responses/api_vcenter_vm_vm_44_guest_identity");
const api_vcenter_vm_vm_43_hardware_ethernet = require("./responses/api_vcenter_vm_vm_43_hardware_ethernet");
const api_vcenter_vm_vm_43 = require("./responses/api_vcenter_vm_vm_43");
const api_vcenter_vm_vm_23_hardware_ethernet = require("./responses/api_vcenter_vm_vm_23_hardware_ethernet");
const api_vcenter_vm_vm_23 = require("./responses/api_vcenter_vm_vm_23");
const api_vcenter_vm_vm_22_hardware_ethernet = require("./responses/api_vcenter_vm_vm_22_hardware_ethernet");
const api_vcenter_vm_vm_22 = require("./responses/api_vcenter_vm_vm_22");
const api_vcenter_vm_vm_21_hardware_ethernet = require("./responses/api_vcenter_vm_vm_21_hardware_ethernet");
const api_vcenter_vm_vm_21 = require("./responses/api_vcenter_vm_vm_21");
const api_vcenter_vm_vm_20_hardware_ethernet = require("./responses/api_vcenter_vm_vm_20_hardware_ethernet");
const api_vcenter_vm_vm_20 = require("./responses/api_vcenter_vm_vm_20");

const port = 80;

app.post("/api/session", (req, res) => {
  res.send("token", 201);
});

app.get("/rest/appliance/system/version/", (req, res) => {
  res.json(rest_appliance_system_version_);
});

app.get("/api/vcenter/datacenter", (req, res) => {
  res.json(api_vcenter_datacenter);
});

app.get("/api/vcenter/cluster", (req, res) => {
  res.json(api_vcenter_cluster);
});

app.post("/rest/com/vmware/cis/session", (req, res) => {
  res.json(rest_com_vmware_cis_session);
});

app.get("/api/vcenter/host", (req, res) => {
  res.json(api_vcenter_host);
});

app.get("/api/vcenter/datastore", (req, res) => {
  res.json(api_vcenter_datastore);
});

app.get(
  "/api/vcenter/namespace-management/distributed-switch-compatibility",
  (req, res) => {
    res.json(api_vcenter_namespace_management_distributed_switch_compatibility);
  },
);

app.get("/api/vcenter/namespaces-user/namespaces", (req, res) => {
  res.json(api_vcenter_namespaces_user_namespaces);
});

app.get("/api/vcenter/network", (req, res) => {
  res.json(api_vcenter_network);
});

app.get("/api/vcenter/vm", (req, res) => {
  res.json(api_vcenter_vm_hosts_host_14);
});

app.get("/api/vcenter/vm/vm-20/guest/identity", (req, res) => {
  res.json(api_vcenter_vm_vm_20_guest_identity);
});

app.get("/api/vcenter/vm/vm-20", (req, res) => {
  res.json(api_vcenter_vm_vm_20);
});
app.get("/api/vcenter/vm/vm-20/hardware/ethernet", (req, res) => {
  res.json(api_vcenter_vm_vm_20_hardware_ethernet);
});
app.get("/api/vcenter/vm/vm-21/guest/identity", (req, res) => {
  res.json(api_vcenter_vm_vm_21_guest_identity);
});
app.get("/api/vcenter/vm/vm-21", (req, res) => {
  res.json(api_vcenter_vm_vm_21);
});
app.get("/api/vcenter/vm/vm-21/hardware/ethernet", (req, res) => {
  res.json(api_vcenter_vm_vm_21_hardware_ethernet);
});
app.get("/api/vcenter/vm/vm-22/guest/identity", (req, res) => {
  res.json(api_vcenter_vm_vm_22_guest_identity);
});
app.get("/api/vcenter/vm/vm-22", (req, res) => {
  res.json(api_vcenter_vm_vm_22);
});
app.get("/api/vcenter/vm/vm-22/hardware/ethernet", (req, res) => {
  res.json(api_vcenter_vm_vm_22_hardware_ethernet);
});
app.get("/api/vcenter/vm/vm-23/guest/identity", (req, res) => {
  res.json(api_vcenter_vm_vm_23_guest_identity);
});
app.get("/api/vcenter/vm/vm-23", (req, res) => {
  res.json(api_vcenter_vm_vm_23);
});
app.get("/api/vcenter/vm/vm-23/hardware/ethernet", (req, res) => {
  res.json(api_vcenter_vm_vm_23_hardware_ethernet);
});
app.get("/api/vcenter/vm/vm-43/guest/identity", (req, res) => {
  res.json(api_vcenter_vm_vm_43_guest_identity);
});
app.get("/api/vcenter/vm/vm-43", (req, res) => {
  res.json(api_vcenter_vm_vm_43);
});
app.get("/api/vcenter/vm/vm-43/hardware/ethernet", (req, res) => {
  res.json(api_vcenter_vm_vm_43_hardware_ethernet);
});
app.get("/api/vcenter/vm/vm-44/guest/identity", (req, res) => {
  res.json(api_vcenter_vm_vm_44_guest_identity);
});
app.get("/api/vcenter/vm/vm-44", (req, res) => {
  res.json(api_vcenter_vm_vm_44);
});
app.get("/api/vcenter/vm/vm-44/hardware/ethernet", (req, res) => {
  res.json(api_vcenter_vm_vm_44_hardware_ethernet);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
