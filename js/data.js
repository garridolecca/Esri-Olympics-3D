export const VENUES = [
  {
    id: 1, name: "SoFi Stadium", type: "NFL Stadium", cat: "outdoor",
    sports: ["Opening Ceremony", "Closing Ceremony", "Athletics"],
    loc: "Inglewood, CA", cap: 70240, built: 2020,
    addr: "1001 Stadium Dr, Inglewood, CA 90301",
    desc: "State-of-the-art NFL stadium hosting the most prestigious Olympic events including the Opening and Closing Ceremonies. Features the world's largest video board and a translucent roof canopy.",
    lat: 33.9535, lng: -118.3392
  },
  {
    id: 2, name: "Crypto.com Arena", type: "Indoor Arena", cat: "indoor",
    sports: ["Basketball (Men & Women)", "Boxing"],
    loc: "Downtown Los Angeles, CA", cap: 20000, built: 1999,
    addr: "1111 S Figueroa St, Los Angeles, CA 90015",
    desc: "Home of the LA Lakers and LA Clippers, this iconic arena in the heart of downtown LA will host basketball and boxing competitions with its legendary electric atmosphere.",
    lat: 34.0430, lng: -118.2673
  },
  {
    id: 3, name: "Los Angeles Memorial Coliseum", type: "Historic Stadium", cat: "outdoor",
    sports: ["Athletics (Track & Field)", "Rugby Sevens"],
    loc: "Exposition Park, Los Angeles, CA", cap: 77500, built: 1923,
    addr: "3911 S Figueroa St, Los Angeles, CA 90037",
    desc: "The only stadium to have hosted two previous Olympic Games (1932 & 1984), now preparing for a historic third. A National Historic Landmark and icon of Los Angeles.",
    lat: 34.0141, lng: -118.2879
  },
  {
    id: 4, name: "Rose Bowl Stadium", type: "Stadium", cat: "outdoor",
    sports: ["Soccer (Football)", "Field Hockey"],
    loc: "Pasadena, CA", cap: 92542, built: 1922,
    addr: "1001 Rose Bowl Dr, Pasadena, CA 91103",
    desc: "Iconic stadium known as 'The Granddaddy of Them All', nestled in the scenic Arroyo Seco valley. Will host soccer group stage and knockout matches.",
    lat: 34.1614, lng: -118.1676
  },
  {
    id: 5, name: "Pauley Pavilion", type: "Indoor Arena", cat: "indoor",
    sports: ["Artistic Gymnastics", "Rhythmic Gymnastics", "Handball"],
    loc: "UCLA Campus, Westwood, CA", cap: 13800, built: 1965,
    addr: "301 Westwood Plaza, Los Angeles, CA 90095",
    desc: "UCLA's legendary indoor arena on the beautiful Westwood campus. Home to countless NCAA championships, hosting gymnastics and handball at the 2028 Games.",
    lat: 34.0706, lng: -118.4461
  },
  {
    id: 6, name: "Intuit Dome", type: "Indoor Arena", cat: "indoor",
    sports: ["3x3 Basketball", "Wheelchair Basketball"],
    loc: "Inglewood, CA", cap: 18000, built: 2024,
    addr: "3900 W Century Blvd, Inglewood, CA 90304",
    desc: "Brand-new home of the LA Clippers, featuring the most advanced arena technology in the world. Will host 3x3 basketball and wheelchair basketball competitions.",
    lat: 33.9555, lng: -118.3422
  },
  {
    id: 7, name: "Dignity Health Sports Park", type: "Soccer Stadium", cat: "outdoor",
    sports: ["Soccer (Football)"],
    loc: "Carson, CA", cap: 27000, built: 2003,
    addr: "18400 Avalon Blvd, Carson, CA 90746",
    desc: "Home of the LA Galaxy MLS team. This dedicated soccer-specific stadium will host group stage and knockout round matches during the 2028 Olympics.",
    lat: 33.8644, lng: -118.2611
  },
  {
    id: 8, name: "Long Beach Arena", type: "Indoor Arena", cat: "indoor",
    sports: ["Volleyball (Indoor)", "Judo", "Wrestling"],
    loc: "Long Beach, CA", cap: 13500, built: 1978,
    addr: "300 E Ocean Blvd, Long Beach, CA 90802",
    desc: "Multi-purpose arena near the Long Beach waterfront, hosting indoor volleyball, judo, and wrestling competitions during the Games.",
    lat: 33.7666, lng: -118.1916
  },
  {
    id: 9, name: "UCLA Olympic Village", type: "Athletes Village", cat: "village",
    sports: ["Athletes Village", "Media Center", "Medical Facilities"],
    loc: "Westwood, Los Angeles, CA", cap: 16000, built: 1929,
    addr: "405 Hilgard Ave, Los Angeles, CA 90095",
    desc: "Main athletes' village for LA 2028 accommodating over 16,000 Olympic athletes and officials within UCLA's residential campus in Westwood.",
    lat: 34.0689, lng: -118.4452
  },
  {
    id: 10, name: "Sepulveda Basin Whitewater", type: "Outdoor Venue", cat: "outdoor",
    sports: ["Canoe Slalom", "Kayak Cross"],
    loc: "Encino, Los Angeles, CA", cap: 15000, built: null,
    addr: "17017 Burbank Blvd, Encino, CA 91316",
    desc: "Specially constructed whitewater venue in the Sepulveda Basin featuring artificially created rapids and gates for canoe slalom and kayak cross competitions.",
    lat: 34.1609, lng: -118.4745
  },
  {
    id: 11, name: "Santa Monica State Beach", type: "Beach Venue", cat: "outdoor",
    sports: ["Beach Volleyball", "Open Water Swimming"],
    loc: "Santa Monica, CA", cap: 50000, built: null,
    addr: "1 Olympic Dr, Santa Monica, CA 90401",
    desc: "Iconic Southern California beach with temporary stadium seating for beach volleyball and an open water swimming course extending into the Pacific Ocean.",
    lat: 34.0088, lng: -118.4965
  },
  {
    id: 12, name: "Venice Beach", type: "Urban Beach Venue", cat: "outdoor",
    sports: ["Skateboarding", "BMX Freestyle", "Breaking (Breakdancing)"],
    loc: "Venice, Los Angeles, CA", cap: 25000, built: null,
    addr: "1800 Ocean Front Walk, Venice, CA 90291",
    desc: "Birthplace of modern skateboard culture staging urban youth sports in their spiritual home. The Pacific Ocean and iconic boardwalk provide a stunning backdrop.",
    lat: 33.9850, lng: -118.4695
  },
  {
    id: 13, name: "Grand Park", type: "Street Course", cat: "outdoor",
    sports: ["Cycling Road Race", "Marathon", "Race Walk"],
    loc: "Downtown Los Angeles, CA", cap: 100000, built: 2012,
    addr: "200 N Grand Ave, Los Angeles, CA 90012",
    desc: "Downtown LA's civic park serves as the start/finish for road cycling, marathon, and race walking events that traverse the city's iconic streets and landmarks.",
    lat: 34.0565, lng: -118.2467
  },
  {
    id: 14, name: "Pomona Fairplex", type: "Cycling Venue", cat: "outdoor",
    sports: ["Cycling BMX Racing", "Mountain Bike Cross-Country"],
    loc: "Pomona, CA", cap: 10000, built: 1922,
    addr: "1101 W McKinley Ave, Pomona, CA 91768",
    desc: "Home of the historic L.A. County Fair, transformed with a world-class BMX racing circuit and mountain bike cross-country course for the 2028 Games.",
    lat: 34.0556, lng: -117.7514
  },
  {
    id: 15, name: "Long Beach Aquatics Center", type: "Aquatics", cat: "outdoor",
    sports: ["Swimming", "Diving", "Water Polo", "Para Swimming"],
    loc: "Long Beach, CA", cap: 15000, built: null,
    addr: "4800 E Anaheim St, Long Beach, CA 90804",
    desc: "Purpose-built temporary aquatics center along the Long Beach waterfront hosting swimming heats and finals, platform/springboard diving, and water polo.",
    lat: 33.7798, lng: -118.1468
  },
  {
    id: 16, name: "El Dorado Regional Park", type: "Archery Venue", cat: "outdoor",
    sports: ["Archery (Recurve & Compound)"],
    loc: "Long Beach, CA", cap: 8000, built: 1960,
    addr: "7550 E Spring St, Long Beach, CA 90815",
    desc: "Serene regional park with mature trees hosting Olympic and Paralympic archery competitions in a beautiful natural setting.",
    lat: 33.8094, lng: -118.0933
  },
  {
    id: 17, name: "BMO Stadium", type: "Soccer Stadium", cat: "outdoor",
    sports: ["Soccer (Football)"],
    loc: "Exposition Park, Los Angeles, CA", cap: 22000, built: 2018,
    addr: "3939 S Figueroa St, Los Angeles, CA 90037",
    desc: "Modern home of LAFC, adjacent to the historic Coliseum. This soccer-specific stadium will host additional soccer group stage and knockout matches.",
    lat: 34.0121, lng: -118.2842
  },
  {
    id: 18, name: "UCLA Tennis Center", type: "Tennis", cat: "outdoor",
    sports: ["Tennis (Singles, Doubles, Mixed)"],
    loc: "Westwood, Los Angeles, CA", cap: 8000, built: 1984,
    addr: "501 Westwood Plaza, Los Angeles, CA 90095",
    desc: "UCLA's premier tennis complex that hosted the 1984 Olympics returns for 2028. Features a main stadium court plus multiple outer courts for all tennis events.",
    lat: 34.0730, lng: -118.4510
  },
  {
    id: 19, name: "Long Beach Rowing Venue", type: "Rowing & Canoe Sprint", cat: "outdoor",
    sports: ["Rowing", "Canoe/Kayak Sprint", "Para Rowing"],
    loc: "Long Beach, CA", cap: 12000, built: null,
    addr: "5255 Paoli Way, Long Beach, CA 90803",
    desc: "Flatwater venue utilizing Long Beach's protected harbor waterways for all Olympic rowing and canoe/kayak sprint events.",
    lat: 33.7598, lng: -118.1052
  },
  {
    id: 20, name: "Hansen Dam Equestrian Center", type: "Equestrian", cat: "outdoor",
    sports: ["Equestrian (Dressage, Jumping, Eventing)", "Modern Pentathlon"],
    loc: "Lake View Terrace, Los Angeles, CA", cap: 12000, built: null,
    addr: "11770 Foothill Blvd, Lake View Terrace, CA 91342",
    desc: "World-class equestrian facility at Hansen Dam in the foothills, hosting all three Olympic equestrian disciplines plus the riding phase of modern pentathlon.",
    lat: 34.2820, lng: -118.3512
  }
];

// High-contrast colors optimized for dark-gray canvas basemap
// Bright, saturated tones that pop against the dark gray background
export const CAT_COLORS = {
  indoor:  { hex: "#FFB627", rgb: [255, 182, 39],  glow: [255, 200, 80]  },  // Warm amber-gold
  outdoor: { hex: "#00E5FF", rgb: [0, 229, 255],    glow: [100, 240, 255] },  // Electric cyan
  village: { hex: "#76FF03", rgb: [118, 255, 3],     glow: [160, 255, 80]  }   // Vivid lime
};
