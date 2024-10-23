module.exports = {
  boot: {
    delay: 0,
    efi_legacy_boot: false,
    enter_setup_mode: false,
    network_protocol: "IPV4",
    retry: false,
    retry_delay: 0,
    type: "BIOS",
  },
  boot_devices: [
    {
      disks: ["string"],
      nic: "string",
      type: "CDROM",
    },
  ],
  cdroms: {
    key: {
      allow_guest_control: false,
      backing: {
        auto_detect: false,
        device_access_type: "EMULATION",
        host_device: "string",
        iso_file: "string",
        type: "ISO_FILE",
      },
      ide: {
        master: false,
        primary: false,
      },
      label: "string",
      sata: {
        bus: 0,
        unit: 0,
      },
      start_connected: false,
      state: "CONNECTED",
      type: "IDE",
    },
  },
  cpu: {
    cores_per_socket: 0,
    count: 0,
    hot_add_enabled: false,
    hot_remove_enabled: false,
  },
  disks: {
    key: {
      backing: {
        type: "VMDK_FILE",
        vmdk_file: "string",
      },
      capacity: 0,
      ide: {
        master: false,
        primary: false,
      },
      label: "string",
      nvme: {
        bus: 0,
        unit: 0,
      },
      sata: {
        bus: 0,
        unit: 0,
      },
      scsi: {
        bus: 0,
        unit: 0,
      },
      type: "IDE",
    },
  },
  floppies: {
    key: {
      allow_guest_control: false,
      backing: {
        auto_detect: false,
        host_device: "string",
        image_file: "string",
        type: "IMAGE_FILE",
      },
      label: "string",
      start_connected: false,
      state: "enum",
    },
  },
  guest_OS: "DOS",
  hardware: {
    upgrade_error: {},
    upgrade_policy: "NEVER",
    upgrade_status: "NONE",
    upgrade_version: "VMX_03",
    version: "VMX_03",
  },
  identity: {
    bios_uuid: "string",
    instance_uuid: "string",
    name: "string",
  },
  instant_clone_frozen: false,
  memory: {
    hot_add_enabled: false,
    hot_add_increment_size_MiB: 0,
    hot_add_limit_MiB: 0,
    size_MiB: 0,
  },
  name: "string",
  nics: {
    key: {
      allow_guest_control: false,
      backing: {
        connection_cookie: 0,
        distributed_port: "string",
        distributed_switch_uuid: "string",
        host_device: "string",
        network: "string",
        network_name: "string",
        opaque_network_id: "string",
        opaque_network_type: "string",
        type: "STANDARD_PORTGROUP",
      },
      label: "string",
      mac_address: "string",
      mac_type: "MANUAL",
      pci_slot_number: 0,
      start_connected: false,
      state: "enum",
      type: "E1000",
      upt_compatibility_enabled: false,
      wake_on_lan_enabled: false,
    },
  },
  nvme_adapters: {
    key: {
      bus: 0,
      label: "string",
      pci_slot_number: 0,
    },
  },
  parallel_ports: {
    key: {
      allow_guest_control: false,
      backing: {
        auto_detect: false,
        file: "string",
        host_device: "string",
        type: "FILE",
      },
      label: "string",
      start_connected: false,
      state: "enum",
    },
  },
  power_state: "POWERED_OFF",
  sata_adapters: {
    key: {
      bus: 0,
      label: "string",
      pci_slot_number: 0,
      type: "AHCI",
    },
  },
  scsi_adapters: {
    key: {
      label: "string",
      pci_slot_number: 0,
      scsi: {
        bus: 0,
        unit: 0,
      },
      sharing: "NONE",
      type: "BUSLOGIC",
    },
  },
  serial_ports: {
    key: {
      allow_guest_control: false,
      backing: {
        auto_detect: false,
        file: "string",
        host_device: "string",
        network_location: "string",
        no_rx_loss: false,
        pipe: "string",
        proxy: "string",
        type: "FILE",
      },
      label: "string",
      start_connected: false,
      state: "enum",
      yield_on_poll: false,
    },
  },
};
