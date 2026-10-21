/**
 * B3Networks Partner Product Directory — Client Logic
 */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('productSearch');
  const clearBtn = document.getElementById('clearSearch');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchStatus = document.getElementById('searchStatus');
  const productRows = document.querySelectorAll('.product-item-row');
  const v2Col = document.getElementById('v2-col');
  const v3Col = document.getElementById('v3-col');
  const ossCol = document.getElementById('ossbss');

  let activeModel = 'all';
  let searchQuery = '';

  function applyFilters() {
    let visibleCount = 0;

    productRows.forEach(row => {
      const model = row.getAttribute('data-model') || '';
      const text = row.textContent.toLowerCase();

      const matchesModel = (activeModel === 'all') || (model === activeModel);
      const matchesSearch = (searchQuery === '') || text.includes(searchQuery);

      if (matchesModel && matchesSearch) {
        row.style.display = 'flex';
        visibleCount++;
      } else {
        row.style.display = 'none';
      }
    });

    // Handle column visibility when specific model filter is clicked
    if (v2Col && v3Col) {
      if (activeModel === 'v2') {
        v2Col.style.display = 'block';
        v3Col.style.display = 'none';
        if (ossCol) ossCol.style.display = 'none';
      } else if (activeModel === 'v3') {
        v2Col.style.display = 'none';
        v3Col.style.display = 'block';
        if (ossCol) ossCol.style.display = 'none';
      } else if (activeModel === 'ossbss') {
        v2Col.style.display = 'none';
        v3Col.style.display = 'none';
        if (ossCol) ossCol.style.display = 'block';
      } else {
        // 'all'
        v2Col.style.display = 'block';
        v3Col.style.display = 'block';
        if (ossCol) ossCol.style.display = 'block';
      }
    }

    // Status message
    if (searchStatus) {
      if (searchQuery) {
        searchStatus.textContent = `Showing ${visibleCount} products matching "${searchQuery}" — click any product to view its details`;
      } else if (activeModel !== 'all') {
        const labels = { v2: 'V2 (App Model)', v3: 'V3 (License Model)', ossbss: 'OSS/BSS Platform' };
        searchStatus.textContent = `Showing ${visibleCount} products in ${labels[activeModel] || activeModel} — click any product to view its details`;
      } else {
        searchStatus.textContent = `Showing all ${visibleCount} products — click any product to view its details`;
      }
    }

    if (clearBtn) {
      clearBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
    }
  }

  // Search input event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  // Clear button event
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      applyFilters();
      searchInput.focus();
    });
  }

  // Filter button event
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeModel = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  // Nav link direct filter sync
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#v2-col') {
        setFilter('v2');
      } else if (targetId === '#v3-col') {
        setFilter('v3');
      } else if (targetId === '#ossbss') {
        setFilter('ossbss');
      } else if (targetId === '#comparison') {
        setFilter('all');
      }
    });
  });

  function setFilter(filterName) {
    activeModel = filterName;
    filterBtns.forEach(b => {
      if (b.getAttribute('data-filter') === filterName) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
    applyFilters();
  }

  applyFilters();
});
