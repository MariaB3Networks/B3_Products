import os

HUB_DIR = "/Users/ademariaulfa/.gemini/antigravity-ide/scratch/b3networks-product-hub"

# Read CSS
with open(os.path.join(HUB_DIR, "styles.css"), "r", encoding="utf-8") as f:
    css_content = f.read()

# Read PRODUCTS_DATA
with open(os.path.join(HUB_DIR, "products.js"), "r", encoding="utf-8") as f:
    products_js = f.read()

offline_html_template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>B3Networks — Partner Product Directory (Offline Edition)</title>
  <meta name="description" content="Offline product directory for B3Networks V2 and V3 products. Works 100% without internet." />
  <style>
/* Embedded Stylesheet */
__CSS_PLACEHOLDER__

/* Extra view transitions for seamless offline tab switching */
.view-hidden {
  display: none !important;
}
.view-visible {
  display: block !important;
}
.btn-pointer {
  cursor: pointer;
  border: 1px solid var(--gray-200);
}
  </style>
</head>
<body>

  <!-- VIEW 1: PRODUCT DIRECTORY (HOME) -->
  <div id="directoryView" class="view-visible">
    <!-- SITE HEADER -->
    <header class="site-header">
      <div class="container header-inner">
        <a href="#directory" class="brand-wrap" onclick="showDirectory(event)">
          <span class="brand-title">B3Networks</span>
          <span class="brand-sub">Partner Product Directory (Offline)</span>
        </a>
        <div class="header-links">
          <a href="#v2-section" class="header-link">V2 App Model</a>
          <a href="#v3-section" class="header-link">V3 License Model</a>
          <a href="#oss-section" class="header-link">OSS/BSS</a>
          <a href="#comparison-section" class="header-link">V2 vs V3</a>
          <a href="https://b3networks.helpjuice.com/" target="_blank" class="header-link">Helpjuice Docs</a>
        </div>
      </div>
    </header>

    <main>
      <div class="container">

        <!-- PAGE INTRO -->
        <section class="page-intro">
          <h1 class="page-title">B3Networks Products</h1>
          <p class="page-subtitle">Click any product name to view its sales pitch, target customer profile, and specifications. (Works 100% offline without internet)</p>
          
          <!-- SIMPLE LIVE FILTER -->
          <div class="search-bar-wrap">
            <input type="text" id="filterInput" class="search-input" placeholder="Type to filter products by name..." autocomplete="off" />
            <div class="search-hint" id="filterCount">Showing all products</div>
          </div>
        </section>

        <!-- SECTION 1: V2 AND V3 PRODUCT LISTS (SIDE-BY-SIDE) -->
        <section class="directory-grid">
          
          <!-- COLUMN 1: V2 APP MODEL -->
          <div class="column-card" id="v2-section">
            <div class="column-header">
              <span class="column-badge column-badge-v2">V2 Model</span>
              <h2 class="column-title">V2 — App Model</h2>
              <p class="column-desc">Modular pay-per-app subscriptions for SMBs</p>
            </div>
            <ul class="product-name-list" id="v2List">
              <li><a href="#bizphone" class="product-link" onclick="openProduct('bizphone', event)"><span>BizPhone</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#virtual-line" class="product-link" onclick="openProduct('virtual-line', event)"><span>Virtual Line</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#direct-line" class="product-link" onclick="openProduct('direct-line', event)"><span>Direct Line</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#sip-v2" class="product-link" onclick="openProduct('sip-v2', event)"><span>SIP Trunking (V2)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#call-recording" class="product-link" onclick="openProduct('call-recording', event)"><span>Call Recording</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#wallboard" class="product-link" onclick="openProduct('wallboard', event)"><span>Wallboard</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#sms-marketing" class="product-link" onclick="openProduct('sms-marketing', event)"><span>SMS Marketing</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#fax" class="product-link" onclick="openProduct('fax', event)"><span>Cloud Fax</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#file-explorer" class="product-link" onclick="openProduct('file-explorer', event)"><span>File Explorer</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#global-dnc" class="product-link" onclick="openProduct('global-dnc', event)"><span>Global DNC</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#bizphone-desktop" class="product-link" onclick="openProduct('bizphone-desktop', event)"><span>BizPhone Desktop App</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#bizphone-mobile" class="product-link" onclick="openProduct('bizphone-mobile', event)"><span>BizPhone Mobile App</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            </ul>
          </div>

          <!-- COLUMN 2: V3 LICENSE MODEL -->
          <div class="column-card" id="v3-section">
            <div class="column-header">
              <span class="column-badge column-badge-v3">V3 Model</span>
              <h2 class="column-title">V3 — License Model</h2>
              <p class="column-desc">Unified enterprise CPaaS suite for mid-market &amp; enterprise</p>
            </div>
            <ul class="product-name-list" id="v3List">
              <li><a href="#phone-system" class="product-link" onclick="openProduct('phone-system', event)"><span>Phone System (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#contact-center" class="product-link" onclick="openProduct('contact-center', event)"><span>Contact Center (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#auto-attendant" class="product-link" onclick="openProduct('auto-attendant', event)"><span>Auto Attendant (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#omni-channel" class="product-link" onclick="openProduct('omni-channel', event)"><span>Omni-Channel</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#teams-operator-connect" class="product-link" onclick="openProduct('teams-operator-connect', event)"><span>MS Teams Operator Connect</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#teams-direct-routing" class="product-link" onclick="openProduct('teams-direct-routing', event)"><span>MS Teams Direct Routing</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#sip-trunk-v3" class="product-link" onclick="openProduct('sip-trunk-v3', event)"><span>SIP Trunk (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#power-sip" class="product-link" onclick="openProduct('power-sip', event)"><span>Power SIP Trunk</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#cpaas-fax" class="product-link" onclick="openProduct('cpaas-fax', event)"><span>CPaaS Fax</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#hotdesking" class="product-link" onclick="openProduct('hotdesking', event)"><span>CPaaS Hotdesking</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#developer-hub" class="product-link" onclick="openProduct('developer-hub', event)"><span>Developer Hub</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#cpaas-dnc" class="product-link" onclick="openProduct('cpaas-dnc', event)"><span>CPaaS DNC</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#mobile-app-v3" class="product-link" onclick="openProduct('mobile-app-v3', event)"><span>Mobile App (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#desktop-app-v3" class="product-link" onclick="openProduct('desktop-app-v3', event)"><span>Desktop App (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
              <li><a href="#web-phone" class="product-link" onclick="openProduct('web-phone', event)"><span>Web Phone (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            </ul>
          </div>

        </section>

        <!-- SECTION 2: OSS / BSS PLATFORM BACKBONE (VERY SIMPLE) -->
        <section class="section-block" id="oss-section">
          <div class="section-header-simple">
            <span class="section-label">Platform Backbone</span>
            <h2 class="section-title">OSS / BSS Platform Backbone</h2>
            <p class="section-desc">Carrier operations, reseller management, and billing system that powers all B3 services.</p>
          </div>

          <ul class="oss-name-grid" id="ossList">
            <li><a href="#business-hub" class="oss-link" onclick="openProduct('business-hub', event)">Business Hub &rarr;</a></li>
            <li><a href="#sales-hub" class="oss-link" onclick="openProduct('sales-hub', event)">Sales Hub &rarr;</a></li>
            <li><a href="#finance-hub" class="oss-link" onclick="openProduct('finance-hub', event)">Finance Hub &rarr;</a></li>
            <li><a href="#security-hub" class="oss-link" onclick="openProduct('security-hub', event)">Security Hub &rarr;</a></li>
            <li><a href="#number-management" class="oss-link" onclick="openProduct('number-management', event)">Number Management &rarr;</a></li>
            <li><a href="https://b3networks.helpjuice.com/en_US/ossbss-answers" target="_blank" class="oss-link">Customer &amp; Billing Apps &rarr;</a></li>
          </ul>
        </section>

        <!-- SECTION 3: V2 APP MODEL VS V3 LICENSE MODEL (VERY SIMPLE) -->
        <section class="section-block" id="comparison-section">
          <div class="section-header-simple">
            <span class="section-label">Quick Decision Guide</span>
            <h2 class="section-title">V2 App Model vs V3 License Model</h2>
            <p class="section-desc">Clear criteria to help partners and sales reps recommend the right architecture for each client.</p>
          </div>

          <div class="compare-container">
            <!-- V2 CARD -->
            <div class="compare-card">
              <h3 class="compare-card-title">V2 — App Model</h3>
              <ul class="compare-list">
                <li class="compare-item">
                  <strong>Pricing</strong>
                  Pay per application monthly subscription.
                </li>
                <li class="compare-item">
                  <strong>Target Customer</strong>
                  Small &amp; medium businesses (SMBs), single-branch offices, and startups.
                </li>
                <li class="compare-item">
                  <strong>Architecture</strong>
                  Modular — buy only the specific apps you need (e.g., BizPhone, Wallboard, Fax).
                </li>
                <li class="compare-item">
                  <strong>Best For</strong>
                  Low initial cost, self-service setup in minutes, and standalone phone system needs.
                </li>
              </ul>
            </div>

            <!-- V3 CARD -->
            <div class="compare-card">
              <h3 class="compare-card-title">V3 — License Model</h3>
              <ul class="compare-list">
                <li class="compare-item">
                  <strong>Pricing</strong>
                  Pay per user license monthly or annual agreement.
                </li>
                <li class="compare-item">
                  <strong>Target Customer</strong>
                  Mid-market, enterprises, contact centers, and multi-location organizations.
                </li>
                <li class="compare-item">
                  <strong>Architecture</strong>
                  Unified suite — Phone System, Contact Center, and MS Teams calling in one platform.
                </li>
                <li class="compare-item">
                  <strong>Best For</strong>
                  Comprehensive enterprise communications, omni-channel ACD, and MS Teams integration.
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>

    <!-- SITE FOOTER -->
    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <strong>B3Networks</strong> Partner Product Directory (Offline Edition). Verified with official Helpjuice Documentation.
        </div>
        <div>
          <a href="https://www.b3networks.com/" target="_blank">Official Website</a> &bull;
          <a href="https://b3networks.helpjuice.com/" target="_blank">Helpjuice Knowledge Base</a>
        </div>
      </div>
    </footer>
  </div>


  <!-- VIEW 2: PRODUCT DETAIL VIEW (OFFLINE) -->
  <div id="detailView" class="view-hidden">
    <!-- SITE HEADER -->
    <header class="site-header">
      <div class="container header-inner">
        <a href="#directory" class="brand-wrap" onclick="showDirectory(event)">
          <span class="brand-title">B3Networks</span>
          <span class="brand-sub">Partner Product Directory (Offline)</span>
        </a>
        <div class="header-links">
          <a href="#directory" class="header-link" onclick="showDirectory(event)">&larr; Back to All Products</a>
          <a href="https://b3networks.helpjuice.com/" target="_blank" class="header-link">Helpjuice Docs</a>
        </div>
      </div>
    </header>

    <main class="detail-page-wrap">
      <div class="container">
        
        <!-- BACK NAVIGATION -->
        <div class="back-nav-bar">
          <button type="button" class="back-link btn-pointer" onclick="showDirectory(event)">&larr; Back to Product Directory</button>
        </div>

        <!-- NOT FOUND STATE (HIDDEN BY DEFAULT) -->
        <div id="notFoundBox" class="not-found-box" style="display: none;">
          <h2 class="detail-title">Product Not Found</h2>
          <p class="detail-text" style="margin-top: 8px;">The requested product could not be located in the catalog.</p>
          <button type="button" class="btn-doc btn-pointer" onclick="showDirectory(event)" style="margin-top: 16px;">Return to Directory</button>
        </div>

        <!-- PRODUCT CONTENT BOX -->
        <div id="productContent" class="detail-box">
          
          <!-- HEADER -->
          <div class="detail-top">
            <div class="detail-badges">
              <span class="badge" id="detailModelTag">V2 App Model</span>
              <span class="badge badge-category" id="detailCatTag">Voice &amp; Calling</span>
            </div>
            <h1 class="detail-title" id="detailTitle">BizPhone</h1>
            <p class="detail-tagline" id="detailTagline">Complete Cloud Business Phone System</p>
          </div>

          <!-- OVERVIEW -->
          <div class="detail-row">
            <div class="detail-label">What is it? (Overview)</div>
            <p class="detail-text" id="detailOverview"></p>
          </div>

          <!-- ARCHITECTURE -->
          <div class="detail-row">
            <div class="detail-label">Architecture &amp; Licensing</div>
            <p class="detail-text" id="detailArchitecture"></p>
          </div>

          <!-- TARGET CUSTOMER -->
          <div class="detail-row">
            <div class="detail-label">Target Customer (ICP)</div>
            <p class="detail-text" id="detailICP"></p>
          </div>

          <!-- BD SALES PITCH -->
          <div class="pitch-card">
            <div class="pitch-label">BD Sales Pitch Guidance</div>
            <p class="pitch-text" id="detailPitch"></p>
          </div>

          <!-- KEY FEATURES -->
          <div class="detail-row">
            <div class="detail-label">Key Features &amp; Capabilities</div>
            <ul class="bullets-list" id="detailFeatures"></ul>
          </div>

          <!-- VALUE PROPOSITION -->
          <div class="detail-row">
            <div class="detail-label">Business Value</div>
            <p class="detail-text" id="detailValue"></p>
          </div>

          <!-- DISCOVERY QUESTIONS -->
          <div class="detail-row">
            <div class="detail-label">Discovery Questions to Ask Prospect</div>
            <ul class="bullets-list" id="detailQuestions"></ul>
          </div>

          <!-- FOOTER ACTIONS -->
          <div class="detail-footer">
            <button type="button" class="back-link btn-pointer" onclick="showDirectory(event)">&larr; Back to Directory</button>
            <a href="#" target="_blank" class="btn-doc" id="detailDocBtn">Open Official Helpjuice Guide &rarr;</a>
          </div>

        </div>

      </div>
    </main>

    <!-- SITE FOOTER -->
    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <strong>B3Networks</strong> Partner Product Directory (Offline Edition).
        </div>
        <div>
          <a href="https://www.b3networks.com/" target="_blank">Official Website</a> &bull;
          <a href="https://b3networks.helpjuice.com/" target="_blank">Helpjuice Knowledge Base</a>
        </div>
      </div>
    </footer>
  </div>

  <!-- EMBEDDED PRODUCTS DATA -->
  <script>
__PRODUCTS_DATA_PLACEHOLDER__
  </script>

  <!-- OFFLINE ROUTING & FILTER LOGIC -->
  <script>
    const directoryView = document.getElementById('directoryView');
    const detailView = document.getElementById('detailView');
    const notFoundBox = document.getElementById('notFoundBox');
    const productContent = document.getElementById('productContent');

    function showDirectory(e) {
      if (e) e.preventDefault();
      history.pushState(null, null, '#directory');
      directoryView.className = 'view-visible';
      detailView.className = 'view-hidden';
      window.scrollTo(0, 0);
    }

    function openProduct(productId, e) {
      if (e) e.preventDefault();
      history.pushState(null, null, '#' + productId);
      renderProduct(productId);
    }

    function renderProduct(productId) {
      const product = PRODUCTS_DATA[productId];
      
      directoryView.className = 'view-hidden';
      detailView.className = 'view-visible';
      window.scrollTo(0, 0);

      if (!product) {
        notFoundBox.style.display = 'block';
        productContent.style.display = 'none';
        return;
      }

      notFoundBox.style.display = 'none';
      productContent.style.display = 'block';

      // Update titles
      document.title = product.name + ' — B3Networks Product Hub (Offline)';
      
      const modelTag = document.getElementById('detailModelTag');
      if (modelTag) {
        modelTag.textContent = product.modelLabel;
        const badgeClass = product.model === 'V2' ? 'badge-v2' : (product.model === 'V3' ? 'badge-v3' : 'badge-oss');
        modelTag.className = 'badge ' + badgeClass;
      }

      const catTag = document.getElementById('detailCatTag');
      if (catTag) catTag.textContent = product.category;

      const title = document.getElementById('detailTitle');
      if (title) title.textContent = product.name;

      const tagline = document.getElementById('detailTagline');
      if (tagline) tagline.textContent = product.tagline;

      const overview = document.getElementById('detailOverview');
      if (overview) overview.textContent = product.fullDesc || product.shortDesc;

      const arch = document.getElementById('detailArchitecture');
      if (arch) arch.textContent = product.architecture;

      const icp = document.getElementById('detailICP');
      if (icp) icp.textContent = product.targetCustomer;

      const pitch = document.getElementById('detailPitch');
      if (pitch) pitch.textContent = product.pitchGuide;

      const valueBox = document.getElementById('detailValue');
      if (valueBox) valueBox.textContent = product.valueProposition;

      // Features list
      const featuresList = document.getElementById('detailFeatures');
      if (featuresList && product.features) {
        featuresList.innerHTML = '';
        product.features.forEach(feat => {
          const li = document.createElement('li');
          li.textContent = feat;
          featuresList.appendChild(li);
        });
      }

      // Discovery questions
      const questionsList = document.getElementById('detailQuestions');
      if (questionsList && product.discoveryQuestions) {
        questionsList.innerHTML = '';
        product.discoveryQuestions.forEach(q => {
          const li = document.createElement('li');
          li.textContent = q;
          questionsList.appendChild(li);
        });
      }

      // Helpjuice button
      const docBtn = document.getElementById('detailDocBtn');
      if (docBtn) {
        docBtn.href = product.helpjuiceUrl;
      }
    }

    // Check hash on load or popstate
    function handleHashRoute() {
      const hash = window.location.hash.replace('#', '');
      if (hash && PRODUCTS_DATA[hash]) {
        renderProduct(hash);
      } else if (hash === 'directory' || !hash || hash === 'v2-section' || hash === 'v3-section' || hash === 'oss-section' || hash === 'comparison-section') {
        directoryView.className = 'view-visible';
        detailView.className = 'view-hidden';
        if (hash && hash !== 'directory') {
          const target = document.getElementById(hash);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    window.addEventListener('hashchange', handleHashRoute);
    window.addEventListener('popstate', handleHashRoute);
    document.addEventListener('DOMContentLoaded', handleHashRoute);

    // Live search filter in directory view
    document.addEventListener('DOMContentLoaded', () => {
      const input = document.getElementById('filterInput');
      const counter = document.getElementById('filterCount');
      const links = document.querySelectorAll('.product-link, .oss-link');
      const total = links.length;

      if (input) {
        input.addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase().trim();
          let matchCount = 0;

          links.forEach(link => {
            const text = link.textContent.toLowerCase();
            const li = link.closest('li');
            if (!query || text.includes(query)) {
              if (li) li.style.display = '';
              matchCount++;
            } else {
              if (li) li.style.display = 'none';
            }
          });

          if (query) {
            counter.textContent = `Showing ${matchCount} of ${total} products matching "${query}"`;
          } else {
            counter.textContent = 'Showing all products';
          }
        });
      }
    });
  </script>
</body>
</html>
"""

final_html = offline_html_template.replace("__CSS_PLACEHOLDER__", css_content).replace("__PRODUCTS_DATA_PLACEHOLDER__", products_js)

output_path = os.path.join(HUB_DIR, "b3networks-offline.html")
with open(output_path, "w", encoding="utf-8") as f:
    f.write(final_html)

print(f"SUCCESS: Generated standalone offline HTML at: {output_path} (Size: {os.path.getsize(output_path)} bytes)")
