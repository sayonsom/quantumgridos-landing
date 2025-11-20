// Google Analytics event tracking utility

export const GA_TRACKING_ID = 'G-DRJQ6XGFEP';

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Conversion events for key actions
export const trackConversion = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Predefined conversion events
export const conversions = {
  // Beta access funnel
  betaAccessModalOpen: () => {
    trackConversion('beta_modal_open', {
      event_category: 'engagement',
      event_label: 'Beta Access Modal Opened',
    });
  },

  betaAccessSubmit: (formData) => {
    trackConversion('beta_access_submit', {
      event_category: 'conversion',
      event_label: 'Beta Access Form Submitted',
      company: formData.company,
      timeline: formData.timeline,
      backend: formData.backend,
    });
  },

  betaAccessSuccess: () => {
    trackConversion('beta_access_success', {
      event_category: 'conversion',
      event_label: 'Beta Access Request Successful',
      value: 1,
    });
  },

  // Documentation and learning
  viewDocumentation: () => {
    trackConversion('view_documentation', {
      event_category: 'engagement',
      event_label: 'View Documentation Clicked',
    });
  },

  // Repository interactions
  cloneRepository: () => {
    trackConversion('clone_repository', {
      event_category: 'engagement',
      event_label: 'Clone Repository Clicked',
    });
  },

  githubClick: (location) => {
    trackConversion('github_click', {
      event_category: 'engagement',
      event_label: `GitHub Clicked - ${location}`,
    });
  },

  // Navigation tracking
  navigationClick: (section) => {
    trackConversion('navigation_click', {
      event_category: 'engagement',
      event_label: `Navigation - ${section}`,
    });
  },

  // Install tracking
  installMethodSelect: (method) => {
    trackConversion('install_method_select', {
      event_category: 'engagement',
      event_label: `Install Method - ${method}`,
    });
  },

  // Partnership
  applyPartnership: () => {
    trackConversion('apply_partnership', {
      event_category: 'conversion',
      event_label: 'Apply for Partnership Clicked',
    });
  },
};
