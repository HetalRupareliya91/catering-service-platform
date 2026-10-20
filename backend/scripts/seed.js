// Loads demo data so the website and admin panel have something to show
const db = require('../src/db');

const seed = {
  categories: [
    { name: 'Starters', description: 'Hot and cold appetisers', sortOrder: 1 },
    { name: 'Main Course', description: 'Curries, rice and breads', sortOrder: 2 },
    { name: 'Desserts', description: 'Traditional sweets and ice creams', sortOrder: 3 }
  ],
  'menu-items': [
    { name: 'Paneer Tikka', category: 'Starters', price: 220, isVeg: true, description: 'Char grilled cottage cheese' },
    { name: 'Hara Bhara Kebab', category: 'Starters', price: 180, isVeg: true, description: 'Spinach and pea patties' },
    { name: 'Dal Makhani', category: 'Main Course', price: 240, isVeg: true, description: 'Slow cooked black lentils' },
    { name: 'Veg Biryani', category: 'Main Course', price: 260, isVeg: true, description: 'Fragrant basmati with vegetables' },
    { name: 'Gulab Jamun', category: 'Desserts', price: 90, isVeg: true, description: 'Warm syrup soaked dumplings' }
  ],
  packages: [
    { name: 'Silver', pricePerPlate: 450, minGuests: 50, includes: '2 starters, 3 mains, 1 dessert' },
    { name: 'Gold', pricePerPlate: 750, minGuests: 100, includes: '4 starters, 5 mains, live counter, 2 desserts' },
    { name: 'Platinum', pricePerPlate: 1200, minGuests: 150, includes: 'Full buffet, 3 live counters, mocktail bar' }
  ],
  venues: [
    { name: 'Lotus Banquet', city: 'Surat', capacity: 500, address: 'Ring Road' },
    { name: 'Riverside Lawns', city: 'Ahmedabad', capacity: 1200, address: 'SG Highway' }
  ],
  reviews: [
    { customerName: 'Priya S.', rating: 5, comment: 'Wonderful food and service at our wedding.' },
    { customerName: 'Rahul M.', rating: 4, comment: 'Great corporate lunch, very punctual team.' }
  ],
  staff: [
    { name: 'Ramesh Patel', role: 'Head Chef', phone: '9800000001', active: true },
    { name: 'Anita Shah', role: 'Event Manager', phone: '9800000002', active: true }
  ]
};

for (const [collection, rows] of Object.entries(seed)) {
  if (db.all(collection).length) {
    console.log('skipped ' + collection + ' (already has data)');
    continue;
  }
  rows.forEach(row => db.insert(collection, row));
  console.log('seeded ' + collection + ': ' + rows.length);
}
