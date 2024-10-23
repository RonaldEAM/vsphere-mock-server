module.exports = {
  instant_clone_frozen: false,
  cdroms: {},
  memory: {
    hot_add_increment_size_MiB: 0,
    size_MiB: 24576,
    hot_add_enabled: false,
    hot_add_limit_MiB: 24576,
  },
  disks: {
    2000: {
      scsi: {
        bus: 0,
        unit: 0,
      },
      backing: {
        vmdk_file:
          "[vsanDatastore] da02e163-f0b3-691b-ce50-02795e6ce51e/NSX-Manager-0.vmdk",
        type: "VMDK_FILE",
      },
      label: "Hard disk 1",
      type: "SCSI",
      capacity: 214748364800,
    },
    2001: {
      scsi: {
        bus: 0,
        unit: 1,
      },
      backing: {
        vmdk_file:
          "[vsanDatastore] da02e163-f0b3-691b-ce50-02795e6ce51e/NSX-Manager-0_1.vmdk",
        type: "VMDK_FILE",
      },
      label: "Hard disk 2",
      type: "SCSI",
      capacity: 107374182400,
    },
  },
  parallel_ports: {},
  sata_adapters: {},
  cpu: {
    hot_remove_enabled: false,
    count: 4,
    hot_add_enabled: false,
    cores_per_socket: 1,
  },
  scsi_adapters: {
    1000: {
      pci_slot_number: 16,
      scsi: {
        bus: 0,
        unit: 7,
      },
      label: "SCSI controller 0",
      sharing: "NONE",
      type: "LSILOGIC",
    },
  },
  power_state: "POWERED_ON",
  floppies: {},
  identity: {
    name: "NSX-Manager-0",
    instance_uuid: "52842ab3-601a-4c68-f1b8-abaac79d4862",
    bios_uuid: "564db2dc-c5ff-6db4-5929-ec0ac9c96e4d",
  },
  nvme_adapters: {},
  name: "NSX-Manager-0",
  nics: {
    4000: {
      start_connected: true,
      pci_slot_number: 160,
      upt_v2_compatibility_enabled: false,
      backing: {
        connection_cookie: 1675691874,
        distributed_port: "782cd791-27a6-494f-b121-f3790f75f54b",
        distributed_switch_uuid:
          "89 a9 16 ae a6 23 11 ed-b5 02 6b ef 1d 46 08 6f",
        type: "DISTRIBUTED_PORTGROUP",
        network: "dvportgroup-26",
      },
      mac_address: "00:0c:29:c9:6e:4d",
      mac_type: "GENERATED",
      allow_guest_control: true,
      wake_on_lan_enabled: true,
      label: "Network adapter 1",
      state: "CONNECTED",
      type: "VMXNET3",
      upt_compatibility_enabled: true,
    },
  },
  boot: {
    delay: 0,
    retry_delay: 10000,
    enter_setup_mode: false,
    type: "BIOS",
    retry: false,
  },
  serial_ports: {},
  boot_devices: [],
  guest_OS: "UBUNTU_64",
  hardware: {
    upgrade_policy: "NEVER",
    upgrade_status: "NONE",
    version: "VMX_13",
  },
};
