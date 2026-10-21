/**
 * B3Networks Product Detail Page Logic (Page 2)
 */
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  let productId = urlParams.get('id');

  // Fallback to hash if present (e.g. product.html#bizphone)
  if (!productId && window.location.hash) {
    productId = window.location.hash.replace('#', '');
  }

  if (productId) {
    if (productId.includes('#')) productId = productId.split('#')[0];
    if (productId.includes('&')) productId = productId.split('&')[0];
    productId = productId.trim();
  }

  // Default to bizphone if none specified
  if (!productId) {
    productId = 'bizphone';
  }

  const product = PRODUCTS_DATA[productId];

  const notFoundBox = document.getElementById('notFoundBox');
  const productContent = document.getElementById('productContent');

  if (!product) {
    if (notFoundBox) notFoundBox.style.display = 'block';
    if (productContent) productContent.style.display = 'none';
    return;
  }

  // Update page title
  document.title = `${product.name} — B3Networks Partner Product Directory`;

  // Model Tag
  const modelTag = document.getElementById('detailModelTag');
  if (modelTag) {
    modelTag.textContent = product.modelLabel;
    const badgeClass = product.model === 'V2' ? 'badge-v2' : (product.model === 'V3' ? 'badge-v3' : 'badge-oss');
    modelTag.className = `badge ${badgeClass}`;
  }

  // Category Tag
  const catTag = document.getElementById('detailCatTag');
  if (catTag) catTag.textContent = product.category;

  // Title & Tagline
  const title = document.getElementById('detailTitle');
  if (title) title.textContent = product.name;

  const tagline = document.getElementById('detailTagline');
  if (tagline) tagline.textContent = product.tagline;

  // Overview & Architecture
  const overview = document.getElementById('detailOverview');
  if (overview) overview.textContent = product.fullDesc || product.shortDesc;

  const architecture = document.getElementById('detailArchitecture');
  if (architecture) architecture.textContent = product.architecture;

  // Target Customer
  const icp = document.getElementById('detailICP');
  if (icp) icp.textContent = product.targetCustomer;

  // Sales Pitch
  const pitch = document.getElementById('detailPitch');
  if (pitch) pitch.textContent = product.pitchGuide;

  // Key Features
  const featuresList = document.getElementById('detailFeatures');
  if (featuresList && product.features) {
    featuresList.innerHTML = '';
    product.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      featuresList.appendChild(li);
    });
  }

  // Business Value
  const valueBox = document.getElementById('detailValue');
  if (valueBox) valueBox.textContent = product.valueProposition;

  // Discovery Questions
  const questionsList = document.getElementById('detailQuestions');
  if (questionsList && product.discoveryQuestions) {
    questionsList.innerHTML = '';
    product.discoveryQuestions.forEach(q => {
      const li = document.createElement('li');
      li.textContent = q;
      questionsList.appendChild(li);
    });
  }

  // Helpjuice Document Link
  const docBtn = document.getElementById('detailDocBtn');
  if (docBtn) {
    docBtn.href = product.helpjuiceUrl;
  }
});
