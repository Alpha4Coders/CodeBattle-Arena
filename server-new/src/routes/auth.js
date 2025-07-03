import express from 'express';

const router = express.Router();

// Auth status endpoint
router.get('/status', async (req, res) => {
  try {
    res.json({
      authenticated: false,
      message: 'Authentication handled by Clerk on frontend'
    });
  } catch (error) {
    res.status(500).json({ error: 'Auth status check failed' });
  }
});

// Webhook for Clerk events
router.post('/webhook', async (req, res) => {
  try {
    const { type, data } = req.body;
    
    // Handle different Clerk webhook events
    switch (type) {
      case 'user.created':
        console.log('New user created:', data.id);
        // Initialize user profile in database
        break;
      case 'user.updated':
        console.log('User updated:', data.id);
        // Update user profile in database
        break;
      case 'user.deleted':
        console.log('User deleted:', data.id);
        // Clean up user data
        break;
      default:
        console.log('Unhandled webhook event:', type);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({ error: 'Webhook processing failed' });
  }
});

export default router;
