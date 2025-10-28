export interface ProjectGallery {
  projectId: string;
  images: {
    url: string;
    title: string;
    description?: string;
  }[];
}

export const projectGalleries: ProjectGallery[] = [
  {
    projectId: '1', // Venture Vibe
    images: [
      {
        url: new URL('../assets/ventureVibe/logo.png', import.meta.url).href,
        title: 'Logo',
        description: 'Venture Vibe brand logo'
      },
      {
        url: new URL('../assets/ventureVibe/homepage_01.PNG', import.meta.url).href,
        title: 'Homepage',
        description: 'Main landing page with trip planning features'
      },
      {
        url: new URL('../assets/ventureVibe/event_page.PNG', import.meta.url).href,
        title: 'Events Discovery',
        description: 'Browse and discover travel events'
      },
      {
        url: new URL('../assets/ventureVibe/view_travel_guide.PNG', import.meta.url).href,
        title: 'Travel Guides',
        description: 'Connect with verified travel guides'
      },
      {
        url: new URL('../assets/ventureVibe/view_ratings.PNG', import.meta.url).href,
        title: 'Ratings & Reviews',
        description: 'User ratings and travel experiences'
      },
      {
        url: new URL('../assets/ventureVibe/add_edit_delete_events.PNG', import.meta.url).href,
        title: 'Event Management',
        description: 'Admin panel for managing events'
      }
    ]
  },
  {
    projectId: '2', // Computify
    images: [
      {
        url: new URL('../assets/computify/logo.png', import.meta.url).href,
        title: 'Logo',
        description: 'Computify brand logo'
      },
      {
        url: new URL('../assets/computify/products_page.jpg', import.meta.url).href,
        title: 'Products Catalog',
        description: 'Browse PC components and accessories'
      },
      {
        url: new URL('../assets/computify/login.jpg', import.meta.url).href,
        title: 'User Authentication',
        description: 'Secure login system'
      }
    ]
  },
  {
    projectId: '3', // FreshLand
    images: [
      {
        url: new URL('../assets/freshland/freshland.PNG', import.meta.url).href,
        title: 'Homepage',
        description: 'Main food ordering interface'
      },
      {
        url: new URL('../assets/freshland/productsPage.PNG', import.meta.url).href,
        title: 'Product Listing',
        description: 'Browse food items by category'
      },
      {
        url: new URL('../assets/freshland/productPage.PNG', import.meta.url).href,
        title: 'Product Details',
        description: 'Detailed product information'
      },
      {
        url: new URL('../assets/freshland/categoriesPage.PNG', import.meta.url).href,
        title: 'Categories',
        description: 'Food categories and filters'
      },
      {
        url: new URL('../assets/freshland/cart.PNG', import.meta.url).href,
        title: 'Shopping Cart',
        description: 'Cart management and checkout'
      },
      {
        url: new URL('../assets/freshland/login.PNG', import.meta.url).href,
        title: 'Authentication',
        description: 'User login and registration'
      }
    ]
  },
  {
    projectId: '4', // Find Optimal Path
    images: [
      {
        url: new URL('../assets/findOptimalPath/homepage.png', import.meta.url).href,
        title: 'Upload Floor Plan',
        description: 'Upload and configure floor plans'
      },
      {
        url: new URL('../assets/findOptimalPath/findOptimalPath.jpg', import.meta.url).href,
        title: 'Path Generation',
        description: 'AI-generated optimal routes'
      },
      {
        url: new URL('../assets/findOptimalPath/findOptimalPathMarked.jpg', import.meta.url).href,
        title: 'Marked Obstacles',
        description: 'Interactive obstacle marking'
      }
    ]
  },
  {
    projectId: '5', // ShowSync
    images: [
      {
        url: new URL('../assets/showSync/logo.svg', import.meta.url).href,
        title: 'Logo',
        description: 'ShowSync brand logo'
      },
      {
        url: new URL('../assets/showSync/homepageWithNavbar.jpg', import.meta.url).href,
        title: 'Navigation',
        description: 'Full interface with navigation'
      },
      
      {
        url: new URL('../assets/showSync/homePage_02.png', import.meta.url).href,
        title: 'Dashboard View 2',
        description: 'Alternative dashboard layout'
      },
      {
        url: new URL('../assets/showSync/homePage_03.png', import.meta.url).href,
        title: 'Dashboard View 3',
        description: 'Additional dashboard features'
      },
      {
        url: new URL('../assets/showSync/artistsPage.png', import.meta.url).href,
        title: 'Artists Page',
        description: 'Browse and manage artists'
      }
    ]
  },
  {
    projectId: '6', // Portfolio
    images: [
      {
        url: new URL('../assets/portfolio/Screenshot 2025-10-27 082151.jpg', import.meta.url).href,
        title: 'Portfolio Website',
        description: 'Modern developer portfolio'
      }
    ]
  }
];

// Helper function to get images for a specific project
export const getProjectImages = (projectId: string): ProjectGallery['images'] => {
  const gallery = projectGalleries.find(g => g.projectId === projectId);
  return gallery?.images || [];
};
