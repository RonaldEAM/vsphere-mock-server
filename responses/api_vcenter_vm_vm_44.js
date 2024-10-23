module.exports = {
  instant_clone_frozen: false,
  cdroms: {},
  memory: {
    hot_add_increment_size_MiB: 0,
    size_MiB: 8192,
    hot_add_enabled: false,
    hot_add_limit_MiB: 8192,
  },
  disks: {
    2000: {
      scsi: {
        bus: 0,
        unit: 0,
      },
      backing: {
        vmdk_file:
          "[vsanDatastore] 7c08e163-898f-8fba-f171-02795e6ce51e/NSX-Edge-0.vmdk",
        type: "VMDK_FILE",
      },
      label: "Hard disk 1",
      type: "SCSI",
      capacity: 210453397504,
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
    name: "NSX-Edge-0",
    instance_uuid: "50152e66-7596-3531-464f-90692bcff5a2",
    bios_uuid: "42156794-f4d9-d5fb-c001-3d1a32f632f3",
  },
  nvme_adapters: {},
  name: "NSX-Edge-0",
  nics: {
    4000: {
      start_connected: true,
      upt_v2_compatibility_enabled: false,
      backing: {
        connection_cookie: 1675692347,
        distributed_port: "bf205471-2e1b-4168-ae92-d0a2eaae1b73",
        distributed_switch_uuid:
          "89 a9 16 ae a6 23 11 ed-b5 02 6b ef 1d 46 08 6f",
        type: "DISTRIBUTED_PORTGROUP",
        network: "dvportgroup-26",
      },
      mac_address: "00:50:56:95:c2:08",
      mac_type: "ASSIGNED",
      allow_guest_control: false,
      wake_on_lan_enabled: true,
      label: "Network adapter 1",
      state: "CONNECTED",
      type: "VMXNET3",
      upt_compatibility_enabled: true,
    },
    4001: {
      start_connected: true,
      upt_v2_compatibility_enabled: false,
      backing: {
        connection_cookie: 1675692347,
        distributed_port: "1787dcf5-1866-4df3-a4a9-71507b3e577f",
        distributed_switch_uuid:
          "89 a9 16 ae a6 23 11 ed-b5 02 6b ef 1d 46 08 6f",
        type: "DISTRIBUTED_PORTGROUP",
        network: "dvportgroup-32",
      },
      mac_address: "00:50:56:95:62:eb",
      mac_type: "ASSIGNED",
      allow_guest_control: false,
      wake_on_lan_enabled: true,
      label: "Network adapter 2",
      state: "CONNECTED",
      type: "VMXNET3",
      upt_compatibility_enabled: true,
    },
    4002: {
      start_connected: false,
      upt_v2_compatibility_enabled: false,
      backing: {
        network_name: "none",
        type: "STANDARD_PORTGROUP",
        network: "network-45",
      },
      mac_address: "00:50:56:95:9a:54",
      mac_type: "ASSIGNED",
      allow_guest_control: false,
      wake_on_lan_enabled: true,
      label: "Network adapter 3",
      state: "NOT_CONNECTED",
      type: "VMXNET3",
      upt_compatibility_enabled: true,
    },
    4003: {
      start_connected: false,
      upt_v2_compatibility_enabled: false,
      backing: {
        network_name: "none",
        type: "STANDARD_PORTGROUP",
        network: "network-45",
      },
      mac_address: "00:50:56:95:6f:37",
      mac_type: "ASSIGNED",
      allow_guest_control: false,
      wake_on_lan_enabled: true,
      label: "Network adapter 4",
      state: "NOT_CONNECTED",
      type: "VMXNET3",
      upt_compatibility_enabled: true,
    },
    4004: {
      start_connected: false,
      upt_v2_compatibility_enabled: false,
      backing: {
        network_name: "none",
        type: "STANDARD_PORTGROUP",
        network: "network-45",
      },
      mac_address: "00:50:56:95:7f:70",
      mac_type: "ASSIGNED",
      allow_guest_control: false,
      wake_on_lan_enabled: true,
      label: "Network adapter 5",
      state: "NOT_CONNECTED",
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
    version: "VMX_19",
  },
};
