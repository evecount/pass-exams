
// This file maps internal quiz IDs to their corresponding Stripe Price IDs.
// To re-enable payments, populate this object with the correct Price IDs 
// from your Stripe dashboard.

export const stripePriceIds = {
    // Example for a one-time purchase product
    'res-5': {
      oneTime: 'price_1PScQtRqg1gQNqYQY2A9o9L5',
      subscription: 'price_1PTj8sRqg1gQNqYQ5y4Gq1hU'
    },
    // Example for another product
    'hi-exam': {
      oneTime: 'price_1PScSJRqg1gQNqYQahGZJmH6',
      subscription: 'price_1PTj9hRqg1gQNqYQpGcbpWzV'
    },
    'm9a-exam': {
      oneTime: 'price_1PScTNRqg1gQNqYQ2lFq4dYh',
      subscription: 'price_1PTjAWRqg1gQNqYQlMh349qN'
    },
    'm9-exam': {
      oneTime: 'price_1PScUDRqg1gQNqYQr48s9YvW',
      subscription: 'price_1PTjBBRqg1gQNqYQTfRk37yY'
    },
    'm8-exam': {
      oneTime: 'price_1PScUDRqg1gQNqYQr48s9YvW', // Placeholder
      subscription: 'price_1PTjBBRqg1gQNqYQTfRk37yY' // Placeholder
    },
    'm8a-exam': {
      oneTime: 'price_1PScUDRqg1gQNqYQr48s9YvW', // Placeholder
      subscription: 'price_1PTjBBRqg1gQNqYQTfRk37yY' // Placeholder
    },
    'bcp-exam': {
      oneTime: 'price_1PScUDRqg1gQNqYQr48s9YvW', // Placeholder
      subscription: 'price_1PTjBBRqg1gQNqYQTfRk37yY' // Placeholder
    },
    'pgi-exam': {
      oneTime: 'price_1PScUDRqg1gQNqYQr48s9YvW', // Placeholder
      subscription: 'price_1PTjBBRqg1gQNqYQTfRk37yY' // Placeholder
    },
    'comgi-exam': {
      oneTime: 'price_1PScUDRqg1gQNqYQr48s9YvW', // Placeholder
      subscription: 'price_1PTjBBRqg1gQNqYQTfRk37yY' // Placeholder
    },
    // Example for a subscription-only bundle
    'all-access-bundle': {
      oneTime: null, // No one-time option for this bundle
      subscription: 'price_1PTjCERqg1gQNqYQx60s0Y1X'
    }
  };
