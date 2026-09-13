window.setTimeout(() => {
  document.getElementById('hero-title')?.classList.add('is-hidden');
}, 8000);

const photos = [
  ['pool12', 'Your private swimming pool'], ['3room', 'A spacious, light-filled bedroom'],
  ['gazebo10', 'Poolside gazebo and outdoor seating'], ['house', 'Welcome to Mystic Dreamville'],
  ['pool10', 'The pool after sundown'], ['2room', 'A comfortable bedroom to unwind in'],
  ['1room', 'A cosy room for quiet mornings'], ['livingroom2', 'Space to gather in the living room'],
  ['kitchen', 'A fully equipped kitchen'], ['booknook', 'A quiet little reading corner'],
  ['bath', 'Bathroom at the villa'], ['2balcony', 'Step out onto your private balcony']
];
const gallery = document.getElementById('gallery');
photos.slice(3).forEach(([id, caption]) => {
  const button = document.createElement('button');
  button.className = 'gallery-photo';
  button.dataset.photo = id;
  button.setAttribute('aria-label', `View ${caption.toLowerCase()}`);
  const img = document.createElement('img');
  img.src = `images/${id}.webp`; img.alt = caption; img.loading = 'lazy'; img.width = 720; img.height = 720;
  const label = document.createElement('span'); label.textContent = caption;
  button.append(img, label); gallery.append(button);
});
let activePhoto = 0;
const photoDialog = document.getElementById('photo-dialog');
function showPhoto(index) {
  activePhoto = (index + photos.length) % photos.length;
  const [id, caption] = photos[activePhoto];
  const photo = document.getElementById('dialog-photo'); photo.src = `images/${id}.webp`; photo.alt = caption;
  document.getElementById('dialog-caption').textContent = caption;
  document.getElementById('photo-count').textContent = `${activePhoto + 1} / ${photos.length}`;
}
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
  showPhoto(photos.findIndex(([id]) => id === button.dataset.photo)); photoDialog.showModal();
}));
document.getElementById('photo-prev').addEventListener('click', () => showPhoto(activePhoto - 1));
document.getElementById('photo-next').addEventListener('click', () => showPhoto(activePhoto + 1));
photoDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') showPhoto(activePhoto - 1);
  if (event.key === 'ArrowRight') showPhoto(activePhoto + 1);
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
});

const amenities = [
  ['Scenic views', ['Pool view', 'Garden view']],
  ['Bathroom', ['Bath', 'Hairdryer', 'Cleaning products', 'Shampoo and conditioner', 'Body soap and shower gel', 'Bidet', 'Outdoor shower', 'Hot water']],
  ['Bedroom and laundry', ['Free washer — in unit', 'Tumble dryer', 'Towels, bed sheets, soap and toilet paper', 'Hangers', 'Cotton bed linen', 'Extra pillows and blankets', 'Room-darkening blinds', 'Iron and clothes drying rack', 'Safe', 'Mosquito net', 'Wardrobe']],
  ['Entertainment and family', ['42-inch HDTV with Amazon Prime Video, Disney+, HBO Max and Netflix', 'Toretto Bluetooth sound system', 'Books and reading material', 'Theme room', 'Board games']],
  ['Heating and cooling', ['Split-type ductless air conditioning', 'Ceiling fan', 'Heating']],
  ['Home safety', ['First aid kit']],
  ['Internet and office', ['Wi-Fi', 'Dedicated workspace in a room with a door']],
  ['Kitchen and dining', ['Kitchen for preparing your own meals', 'Samsung refrigerator', 'Microwave', 'Pots and pans, oil, salt and pepper', 'Crockery and cutlery', 'Gas cooker', 'Kettle', 'Wine glasses', 'Toaster', 'Rice cooker', 'Waste compactor', 'Barbecue utensils, grill, charcoal and skewers', 'Dining table', 'Coffee']],
  ['Location features', ['Waterfront — right next to a body of water', 'Private entrance', 'Launderette nearby']],
  ['Outdoor spaces', ['Private patio or balcony', 'Fully fenced private back garden', 'Outdoor furniture', 'Outdoor dining area', 'BBQ grill']],
  ['Parking and pool', ['Free parking on premises', 'Free on-street parking', 'Private outdoor pool — available all year, open 24 hours', 'Pool toys']],
  ['Services', ['Smoking allowed', 'Self check-in', 'Building staff available 24 hours a day for arrival assistance', 'Cleaning available during your stay']]
];
amenities.forEach(([title, items]) => {
  const group = document.createElement('section'); const h = document.createElement('h3'); h.textContent = title;
  const list = document.createElement('ul'); items.forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); });
  group.append(h, list); document.getElementById('amenity-list').append(group);
});
const iconPaths = {
  waves: '<path d="M2 8c3-4 5 4 8 0s5 4 8 0 4 0 4 0M2 14c3-4 5 4 8 0s5 4 8 0 4 0 4 0M2 20c3-4 5 4 8 0s5 4 8 0 4 0 4 0"/>',
  utensils: '<path d="M4 2v6a3 3 0 0 0 6 0V2M7 2v20M20 22V2c-4 3-5 8 0 10"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  wifi: '<path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0"/><circle cx="12" cy="20" r=".7"/>',
  play: '<rect x="2" y="3" width="20" height="15" rx="2"/><path d="m10 7 5 3.5-5 3.5zM8 22h8M12 18v4"/>',
  key: '<circle cx="8" cy="8" r="5"/><path d="m11.5 11.5 10 10M17 17l3-3M14 14l3-3"/>'
};
document.querySelectorAll('[data-icon]').forEach(element => {
  element.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[element.dataset.icon]}</svg>`;
});

const reviewTrack = document.getElementById('review-track');
const reviewDialog = document.getElementById('review-dialog');
function openReview(review) {
  document.getElementById('review-dialog-name').textContent = review.name;
  document.getElementById('review-dialog-stars').textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
  document.getElementById('review-dialog-stars').setAttribute('aria-label', `${review.rating} out of 5 stars`);
  document.getElementById('review-dialog-body').textContent = review.body; reviewDialog.showModal();
}
fetch('reviews.json').then(response => { if (!response.ok) throw new Error('Reviews unavailable'); return response.json(); }).then(reviews => {
  reviews.forEach(review => {
    const card = document.createElement('article'); card.className = 'review-card';
    const stars = document.createElement('p'); stars.className = 'stars'; stars.textContent = '★'.repeat(review.rating) + '☆'.repeat(5-review.rating); stars.setAttribute('aria-label', `${review.rating} out of 5 stars`);
    const quote = document.createElement('blockquote'); quote.textContent = review.body;
    const button = document.createElement('button'); button.className = 'read-review'; button.textContent = 'Read full review'; button.setAttribute('aria-label', `Read full review by ${review.name}`); button.addEventListener('click', () => openReview(review));
    const author = document.createElement('div'); author.className = 'review-author';
    const avatar = document.createElement('span'); avatar.className = 'avatar'; avatar.textContent = review.name.replace(/^39_/, '').split(' ').map(x => x[0]).slice(0,2).join('').toUpperCase(); avatar.setAttribute('aria-hidden','true');
    const byline = document.createElement('p'); const name = document.createElement('strong'); name.textContent = review.name; const source = document.createElement('span'); source.textContent = 'Google review'; byline.append(name, source); author.append(avatar, byline);
    card.append(stars, quote, button, author); reviewTrack.append(card);
  });
}).catch(() => { const text = document.createElement('p'); text.textContent = 'Guest reviews are available on Google. Use “View on Google” above to read them.'; reviewTrack.append(text); });
function scrollReviews(direction) { const card = reviewTrack.querySelector('.review-card'); reviewTrack.scrollBy({left: direction * ((card?.offsetWidth || 340) + 20), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}); }
document.getElementById('reviews-prev').addEventListener('click', () => scrollReviews(-1));
document.getElementById('reviews-next').addEventListener('click', () => scrollReviews(1));
reviewTrack.addEventListener('keydown', event => { if (event.target === reviewTrack && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {event.preventDefault(); scrollReviews(event.key === 'ArrowRight' ? 1 : -1);} });
