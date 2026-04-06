export const ignition_06 = {
  id: "ignition-06",
  name: "IGNITION_06",
  year: 2024,
  tag: "UNIT_06 // PROTO_B",
  
  stats: {
    acceleration: "2.10s",
    topSpeed: "125 km/h",
    weight: "205 kg",
    power: "75 kW",
    lateralG: "2.1G"
  },
  
  overview: {
    description: "IGNITION_06 laid the groundwork for our high-voltage architecture. It was defined by unparalleled reliability and integrated sensor suites providing real-time telemetry, setting multiple endurance records for the team."
  },
  
  domains: {
    powertrain: {
      title: "POWERTRAIN",
      text: "Single Emrax 228 motor with custom planetary gearbox. Focusing on thermal endurance over aggressive sprint capabilities."
    },
    aero: {
      title: "AERODYNAMICS",
      text: "First generation aerodynamic package with emphasis on clean airflow to the rear cooling shrouds."
    },
    chassis: {
      title: "CHASSIS & DYNAMICS",
      text: "Hybrid Steel Spaceframe with Carbon Fiber shear panels. Highly tunable anti-roll bar configurations for varied track layouts."
    }
  },
  
  specs: {
    chassis: [
      { label: "Frame", value: "4130 Chromoly Spaceframe" },
      { label: "Suspension", value: "Push-rod actuated, Penske 7800" },
      { label: "Tires", value: "Hoosier 18.0 x 7.5-10 R25B" },
      { label: "Brakes", value: "Wilwood PS-1 calipers" },
    ],
    battery: [
      { label: "Voltage", value: "400V Max" },
      { label: "Cell Array", value: "96s4p Sony VTC6 18650" },
      { label: "Capacity", value: "5.8 kWh" },
      { label: "Cooling", value: "Forced Air Cooling" },
    ]
  },
  
  images: {
    hero: "/images/cars/ignition_hero.png",
    gallery: [
      "/images/cars/ignition_gal1.jpg",
      "/images/cars/ignition_gal2.jpg",
      "/images/cars/ignition_gal3.jpg"
    ]
  },
  
  timeline: [
    { date: "SEP 2023", event: "Initial CAD Modeling" },
    { date: "DEC 2023", event: "Frame Welding Completed" },
    { date: "FEB 2024", event: "Powertrain Integration" },
    { date: "APR 2024", event: "First Drive // EV Systems Check" },
  ]
};
