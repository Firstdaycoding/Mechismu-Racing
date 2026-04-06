export const kinetic_x1 = {
  id: "kinetic-x1",
  name: "KINETIC_X1",
  year: 2025,
  tag: "UNIT_07 // PROTO_S",
  
  stats: {
    acceleration: "1.82s",
    topSpeed: "138 km/h",
    weight: "184 kg",
    power: "80 kW",
    lateralG: "2.4G"
  },
  
  overview: {
    description: "The KINETIC_X1 represents the apex of Mechismu Racing's EV evolution. Focusing on extreme weight reduction and an aggressive aero package, it has been engineered to deliver maximum power-to-weight ratio while maintaining exceptional cornering stability."
  },
  
  domains: {
    powertrain: {
      title: "POWERTRAIN",
      text: "Dual rear inboard motors with carbon-fiber driveshafts. Featuring a custom silicon-carbide inverter setup for 98% efficiency."
    },
    aero: {
      title: "AERODYNAMICS",
      text: "Multi-element front and rear wings producing 85kg of downforce at 60 km/h with active drag reduction system (DRS)."
    },
    chassis: {
      title: "CHASSIS & DYNAMICS",
      text: "Full carbon-fiber monocoque chassis integrating the battery pack as a stressed member. Pull-rod suspension up front, push-rod rear."
    }
  },
  
  specs: {
    chassis: [
      { label: "Frame", value: "Carbon Fiber Monocoque" },
      { label: "Suspension", value: "Double Wishbone, Öhlins TTX36" },
      { label: "Tires", value: "Hoosier 16.0 x 7.5-10 LC0" },
      { label: "Brakes", value: "Custom AP Racing 4-piston calipers" },
    ],
    battery: [
      { label: "Voltage", value: "600V Max" },
      { label: "Cell Array", value: "144s3p Melasta LiPo" },
      { label: "Capacity", value: "6.4 kWh" },
      { label: "Cooling", value: "Liquid-cooled dielectric fluid" },
    ]
  },
  
  images: {
    hero: "/images/cars/kinetic_hero.png",
    gallery: [
      "/images/cars/kinetic_gal1.jpg",
      "/images/cars/kinetic_gal2.jpg",
      "/images/cars/kinetic_gal3.jpg"
    ]
  },
  
  timeline: [
    { date: "AUG 2024", event: "Concept & Rules Verification" },
    { date: "NOV 2024", event: "Design Freeze & FEA Approval" },
    { date: "JAN 2025", event: "Chassis Layup & Baking" },
    { date: "MAR 2025", event: "Rolling Chassis Assembly" },
    { date: "MAY 2025", event: "Track Testing & Validation" },
  ]
};
