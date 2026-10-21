<?php
/**
 * B3Networks Partner Product Directory (PHP Version)
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>B3Networks — Partner Product Directory</title>
  <meta name="description" content="Simple product directory for B3Networks V2 (App Model) and V3 (License Model) products. Click any product to view its sales details." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- SITE HEADER -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.php" class="brand-wrap">
        <span class="brand-title">B3Networks</span>
        <span class="brand-sub">Partner Product Directory</span>
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
        <p class="page-subtitle">Click any product name to view its sales pitch, target customer profile, and specifications.</p>
        
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
            <li><a href="product.php?id=bizphone" class="product-link"><span>BizPhone</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=virtual-line" class="product-link"><span>Virtual Line</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=direct-line" class="product-link"><span>Direct Line</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=sip-v2" class="product-link"><span>SIP Trunking (V2)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=call-recording" class="product-link"><span>Call Recording</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=wallboard" class="product-link"><span>Wallboard</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=sms-marketing" class="product-link"><span>SMS Marketing</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=fax" class="product-link"><span>Cloud Fax</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=file-explorer" class="product-link"><span>File Explorer</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=global-dnc" class="product-link"><span>Global DNC</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=bizphone-desktop" class="product-link"><span>BizPhone Desktop App</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=bizphone-mobile" class="product-link"><span>BizPhone Mobile App</span><span class="product-link-arrow">Details &rarr;</span></a></li>
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
            <li><a href="product.php?id=phone-system" class="product-link"><span>Phone System (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=contact-center" class="product-link"><span>Contact Center (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=auto-attendant" class="product-link"><span>Auto Attendant (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=omni-channel" class="product-link"><span>Omni-Channel</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=teams-operator-connect" class="product-link"><span>MS Teams Operator Connect</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=teams-direct-routing" class="product-link"><span>MS Teams Direct Routing</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=sip-trunk-v3" class="product-link"><span>SIP Trunk (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=power-sip" class="product-link"><span>Power SIP Trunk</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=cpaas-fax" class="product-link"><span>CPaaS Fax</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=hotdesking" class="product-link"><span>CPaaS Hotdesking</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=developer-hub" class="product-link"><span>Developer Hub</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=cpaas-dnc" class="product-link"><span>CPaaS DNC</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=mobile-app-v3" class="product-link"><span>Mobile App (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=desktop-app-v3" class="product-link"><span>Desktop App (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
            <li><a href="product.php?id=web-phone" class="product-link"><span>Web Phone (V3)</span><span class="product-link-arrow">Details &rarr;</span></a></li>
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
          <li><a href="product.php?id=business-hub" class="oss-link">Business Hub &rarr;</a></li>
          <li><a href="product.php?id=sales-hub" class="oss-link">Sales Hub &rarr;</a></li>
          <li><a href="product.php?id=finance-hub" class="oss-link">Finance Hub &rarr;</a></li>
          <li><a href="product.php?id=security-hub" class="oss-link">Security Hub &rarr;</a></li>
          <li><a href="product.php?id=number-management" class="oss-link">Number Management &rarr;</a></li>
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
        <strong>B3Networks</strong> Partner Product Directory. Information verified with official <a href="https://b3networks.helpjuice.com/" target="_blank">Helpjuice Documentation</a>.
      </div>
      <div>
        <a href="https://www.b3networks.com/" target="_blank">Official Website</a> &bull;
        <a href="https://b3networks.helpjuice.com/" target="_blank">Helpjuice Knowledge Base</a>
      </div>
    </div>
  </footer>

  <!-- SIMPLE FILTER SCRIPT -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const input = document.getElementById('filterInput');
      const counter = document.getElementById('filterCount');
      const links = document.querySelectorAll('.product-link, .oss-link');
      const total = links.length;

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
    });
  </script>
</body>
</html>
