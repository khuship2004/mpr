export const availableComponents = {
    "Processor (CPU)": [
      { id: 'cpu1', name: 'Intel Core i3-10105F', model: 'BX8070110105F', price: 6020, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'cpu2', name: 'AMD Ryzen 5 5600X', model: '100-100000065BOX', price: 18999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Cooling System (CPU Cooler)": [
      { id: 'cool1', name: 'Aerocool Mirage 5 ARGB', model: 'MIRAGE-5-ARGB', price: 3900, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'cool2', name: 'Alseye Halo H120D V2.0', model: 'H120D-V2-0-PWM', price: 3600, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Motherboard": [
      { id: 'mb1', name: 'ASUS Prime B460M-A', model: 'PRIME B460M-A', price: 7999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'mb2', name: 'MSI MAG B550M MORTAR', model: 'MAG B550M MORTAR', price: 11999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Memory (RAM)": [
      { id: 'ram1', name: 'Corsair Vengeance LPX 16GB', model: 'CMK16GX4M2B3200C16', price: 5999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'ram2', name: 'G.Skill Ripjaws V 32GB', model: 'F4-3600C16D-32GVKC', price: 11999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Solid State Drive (M.2 SSD)": [
      { id: 'ssd1', name: 'Samsung 970 EVO Plus 500GB', model: 'MZ-V7S500BW', price: 7999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'ssd2', name: 'WD Black SN750 1TB', model: 'WDS100T3X0C', price: 13999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Solid State Drive (SATA SSD)": [
      { id: 'satassd1', name: 'Crucial MX500 500GB', model: 'CT500MX500SSD1', price: 4999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'satassd2', name: 'Samsung 870 EVO 1TB', model: 'MZ-77E1T0B/AM', price: 9999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Hard Disk Drive (Internal HDD)": [
      { id: 'hdd1', name: 'Seagate Barracuda 1TB', model: 'ST1000DM010', price: 3499, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'hdd2', name: 'Western Digital Blue 2TB', model: 'WD20EZAZ', price: 4999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Graphics Card (GPU/VGA)": [
      { id: 'gpu1', name: 'NVIDIA GeForce RTX 3060 Ti', model: 'RTX 3060 Ti', price: 39999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'gpu2', name: 'AMD Radeon RX 6700 XT', model: 'RX 6700 XT', price: 44999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Power Supply Unit (SMPS/PSU)": [
      { id: 'psu1', name: 'Corsair CX550 550W 80+ Bronze', model: 'CP-9020121-NA', price: 4999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'psu2', name: 'Seasonic FOCUS GX-650 650W 80+ Gold', model: 'SSR-650FX', price: 9999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Cabinet (Case)": [
      { id: 'case1', name: 'NZXT H510', model: 'CA-H510B-W1', price: 6999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'case2', name: 'Phanteks Eclipse P300A', model: 'PH-EC300ATG_BK01', price: 5999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Monitor (Display)": [
      { id: 'mon1', name: 'LG 24MP59G 24" IPS', model: '24MP59G-P', price: 12999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'mon2', name: 'ASUS VG279Q 27" IPS 144Hz', model: 'VG279Q', price: 27999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Keyboard": [
      { id: 'kb1', name: 'Logitech G213 Prodigy', model: '920-008083', price: 4999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'kb2', name: 'Corsair K68 RGB', model: 'CH-9102010-NA', price: 9999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Mouse (Mice)": [
      { id: 'mouse1', name: 'Logitech G402 Hyperion Fury', model: '910-004069', price: 2499, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'mouse2', name: 'Razer DeathAdder Elite', model: 'RZ01-02010100-R3U1', price: 4999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Mouse Pad (Matz)": [
      { id: 'pad1', name: 'SteelSeries QcK', model: '63004', price: 999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'pad2', name: 'Corsair MM300 Extended', model: 'CH-9000108-WW', price: 2499, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
    "Headphones": [
      { id: 'hp1', name: 'HyperX Cloud II', model: 'KHX-HSCP-RD', price: 7999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
      { id: 'hp2', name: 'SteelSeries Arctis Pro', model: '61486', price: 14999, image: '/placeholder.svg?height=50&width=50', availability: 'In Stock' },
    ],
  }